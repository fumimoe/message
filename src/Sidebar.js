import React,{useState,useEffect} from "react";
import "./Sidebar.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import IconButton from "@material-ui/core/IconButton";
import SidebarChat from './SidebarChat';
import { useSelector } from "react-redux";
import {selectUser} from './features/userSlice';
import {auth,db} from './firebase' 

const Sidebar = () => {
  const user = useSelector(selectUser)
  
const [chats,setChats] = useState([]);

useEffect(() => {
  db.collection('chats').onSnapshot(snapshot =>
    // 一個（）をつけないとreturnを書かないといけなくなる
    setChats(snapshot.docs.map((doc) =>({
      id: doc.id,
      data: doc.data()
    })))
    )
  
}, [])

const addChat = () => {
  const chatName = prompt('チャットに名前をいれてください');

  if(chatName){
    db.collection('chats').add({
      chatName:chatName,
    })
  }
  
}

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        {/* 画像を表示させることができる */}
        {/* ロゴをクリックするとログアウトになる */}
        <Avatar src={user.photo} onClick={( ) => auth.signOut()} className="sidebar__abatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="検索" />
        </div>
        <IconButton variant="outlined" className="sidebar__inputButton">
          <RateReviewIcon onClick={addChat}/>
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {chats.map(({id,data:{chatName}}) =>(
          <SidebarChat key={id}  id={id} chatName={chatName}/>
        ))}        
       
      </div>
    </div>
  );
};

export default Sidebar;
