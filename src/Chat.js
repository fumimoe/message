import React from "react";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          to:<span className="chat__name">channel name</span>
        </h4>
        <strong>details</strong>
      </div>
    </div>
  );
};

export default Chat;
