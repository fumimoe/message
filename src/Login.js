import React from "react";
import "./Login.css";
import {Button} from '@material-ui/core';
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    // ポップアップ ウィンドウでログインを行う場合は、signInWithPopup を呼び出します。
      auth.signInWithPopup(provider)
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="Imessage"
        />
        <h1>Imessage</h1>
       
      </div>
      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
};

export default Login;
