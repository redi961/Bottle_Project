import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../image/Logo.png'
import email_img from '../../image/email.jpg'
import pw from '../../image/pass.png'
import {useNavigate} from 'react-router-dom'

import '../../styles/login.css'


function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigator = useNavigate();
  
  const  onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
}
  const  onPasswordHandler = (event) => {
  setPassword(event.currentTarget.value);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/login', {Email, Password })
      .then(res => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.userId);
        console.log("res.data.msg :: ",res.data.msg);
        if (res.data.email === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          console.log("======================", res.data.msg);
          alert("입력하신 id 가 일치하지 않습니다.");
        } else if (res.data.email === null) {
          // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log(
            "======================",
            "입력하신 비밀번호 가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } 
         else if (res.data.email === Email) {
           // id, pw 모두 일치 userId = userId1, msg = undefined
           console.log("======================", "로그인 성공");
           sessionStorage.setItem("user_id", Email); // sessionStorage에 id를 user_id라는 key 값으로 저장
           //sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
         }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/";
      })
      .catch();
  };

  const handelNav = (k) => {
    const url = {
      'signUp' : '/signup',
      'login' : '/login'
    }
    navigator(url[k])
  }

  return (
    <>
    <div className='main'>
        <div className='sub-main'>
            <div className = "center_div">
                <div className='imgs'>
                    <div className = 'container-image'>
                        <img src={logo} alt ="logo" className ='logo'/>
                    </div>
                </div>
                <div className='container-login'>
                  <div className='input_zone'>
                    <div className ="div_input">
                      <img src={email_img} alt ="email" className ='input_icon'/>
                      <input className='input_slot' type="Email" placeholder="E-mail" value={Email} onChange={onEmailHandler} />
                    </div>
                    <div className='div_input'>
                      <img src={pw} alt ="pass" className ='input_icon'/>
                      <input className='input_slot' type="password" placeholder="Password" value={Password} onChange={onPasswordHandler} />
                    </div>
                  </div>
                    <div className='button_zone'>
                    <button className ="menu_button" onClick={handleSubmit}>Login</button>
                    <button className ="menu_button"  onClick={() => {handelNav('signUp')}}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  );
}

export default Login;