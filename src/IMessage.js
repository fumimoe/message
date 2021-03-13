import React from 'react'
import './IMessage.css'
import Sidebar from './Sidebar.js';
import Chat from './Chat';


const IMessage = () => {
    return (
        <div className="imessage">
            <Sidebar/>
            <Chat/>
            
        </div>
    )
}

export default IMessage
