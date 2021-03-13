import React,{useState} from "react";
import "./Chat.css";
import MicIcon from "@material-ui/icons/Mic";
import IconButton from "@material-ui/core/IconButton";

const Chat = () => {
    const [input,setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault()
        setInput("");
    }
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          to:<span className="chat__name">channel name</span>
        </h4>
        <strong>details</strong>
      </div>

        <div className="chat__message">
            <h2>message</h2>
            <h2>message</h2>
            <h2>message</h2>
            <h2>message</h2>
            <h2>message</h2>
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
              <MicIcon className="mic_button"/>
            </IconButton>
        
      </div>
    </div>
  );
};

export default Chat;
