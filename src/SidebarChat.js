import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./SidebarChat.css";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChat"
      onClick={() =>
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        )
      }
    >
      <Avatar />
      <div className="sidebar__info">
        <h3>{chatName}</h3>
        <p>message</p>

        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
