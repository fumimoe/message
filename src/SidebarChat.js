import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import './SidebarChat.css'

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            
            <Avatar />
            <div className="sidebar__info">
                <h3>name</h3>
                <p>message</p>
                
                <small>timestamp</small>
                
            </div>
            

            
        </div>
    )
}

export default SidebarChat
