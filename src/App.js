import React,{useEffect} from 'react';
import './App.css';
import IMessage from './IMessage.js'
import {useSelector,useDispatch} from 'react-redux'
import {selectUser,login,logout} from './features/userSlice';
import Login from './Login'
import {auth} from './firebase';



const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    // 現在ログインしてるユーザーを取得する
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // ログインしてるか
        // ログインしてたら自分の情報を取得することができる
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          name:authUser.displayName
        }))
      }else{
        // ログアウト
        dispatch(logout())

      }
    })
  }, [])

  
  return (
    <div className="app">
      {/* 条件分岐でuserSliceのuserがnullじゃなきゃログインしてる。 */}
      {user ? (
        <IMessage/>
      ):(
        <Login/>
      )}
      
    </div>
  )
}

export default App
