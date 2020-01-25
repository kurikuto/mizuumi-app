import React from 'react';
import './login.css';

const Login = (props) => {

  const authLogin = () => {
    console.log("authLogin")
  }

  return (
    <div class="login">
      <h2 id="title">Your Favorite Movies.</h2>
      <div class="content">
        <p>Welcome</p>
        <div>
          <span>user: </span>
          <input type="text" />
        </div>
        <div>
          <span>password: </span>
          <input type="text" />
        </div>
        <button class="button" onClick={authLogin}>login</button>
      </div>
    </div>
  );
}

export default Login

