import React from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import IconButton from "@material-ui/core/IconButton";
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="sidebar__abatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="検索" />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
