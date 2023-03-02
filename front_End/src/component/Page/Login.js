import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../image/Logo.png'
import email_img from '../../image/email.jpg'
import pw from '../../image/pass.png'
import {useNavigate} from 'react-router-dom'

import '../../styles/login.css'


function Login() {
  const [Email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigator = useNavigate();
  
  const  onEmailHandler = (event) => {
  setEmail(event.currentTarget.value);
}
  const  onPasswordHandler = (event) => {
  setPassword(event.currentTarget.value);
}

  const handleSubmit = () => {
    if (Email == null) {
      alert("아이디가 입력되지 않았습니다.")
    } else if (password == null) {
      alert("이름이 입력되지 않았습니다.")
    } else if (Email != null && password != null)
    axios.post('/bottle/user/login', {
      user_id : Email,
      user_pass : password
    })
      .then(res => {
        alert(res.data);
        if(res.data === "로그인 되었습니다.")
        document.location.href = "/";
      })
      .catch(error => {
        // 회원가입 실패 시에 취해야할 액션
        console.log(error.response.data);
      });
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
                      <input className='input_slot' type="password" placeholder="Password" value={password} onChange={onPasswordHandler} />
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