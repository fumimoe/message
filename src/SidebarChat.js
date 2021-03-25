import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import './SidebarChat.css'

const SidebarChat = ({id,chatName}) => {
    return (
        <div className="sidebarChat">
            
            <Avatar />
            <div className="sidebar__info">
                <h3>{chatName}</h3>
                <p>message</p>
                
                <small>timestamp</small>
                
            </div>
            

            
        </div>
    )
}

export default SidebarChat
