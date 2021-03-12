import React from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>sidebarです</h2>
            <div className="sidebar__header">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>

            </div>
            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar
