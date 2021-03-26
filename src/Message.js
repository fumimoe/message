import React from "react";
import "./Message.css";
import Avatar from "@material-ui/core/Avatar";

const Message = ({
  id,
  contents: { timestamp, message, uid, photo, email, name },
}) => {
  return (
    <div className="message">
      <Avatar src={photo}/>
      <p>{message}</p>
      <small>{new Date(timestamp?.toDate()).toLocaleString}</small>
    </div>
  );
};

export default Message;
