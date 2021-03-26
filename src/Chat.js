import React, { useState, useEffect } from "react";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";
import IconButton from "@material-ui/core/IconButton";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatName, selectChatId } from "./features/chatSlice";
import { db, FirebaseTimestamp } from "./firebase";
import { selectUser } from "./features/userSlice";

const Chat = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          // documentを全部持ってきて、それをひとつずつ回してるって感じ
          // docsは配列って意味
          setMessage(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  console.log(chatId)

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: FirebaseTimestamp,
      message: input,
      uid: user.uid,
      photo: user.photoURL,
      email: user.email,
      name: user.displayName,
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          to:<span className="chat__name">{chatName}</span>
        </h4>
        <strong>details</strong>
      </div>

      <div className="chat__message">
        {/* message.idを省略した書き方→配列を展開して{}の書き方で記載できる */}
        {messages.map(({ id, data }) => (
          <Message key={id} contents={data} />
        ))}
      </div>

      <div className="chat__input">
        <form className="chat__form">
          <input
            type="text"
            placeholder="message"
            className="chat__input__messages"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="chat__mic" onClick={sendMessage}></button>
        </form>
        <IconButton>
          <MicIcon className="mic_button" />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
