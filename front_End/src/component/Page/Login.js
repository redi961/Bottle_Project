import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../image/logo.jpg'
import email_img from '../../image/email.jpg'
import pw from '../../image/pass.png'

import './login.css'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/api/login', {email, password })
      .then(response => {
        // 로그인 성공 시에 취해야할 액션
        console.log(response.data);
      })
      .catch(error => {
        // 로그인 실패 시에 취해야할 액션
        console.log(error.response.data);
      });
  };

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
                    <h1>Bottle Collector</h1>
                    <div className ="first_input">
                      <img src={email_img} alt ="email" className ='input_icon'/>
                      <input className='input_slot' type="Email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='second_input'>
                      <img src={pw} alt ="pass" className ='input_icon'/>
                      <input className='input_slot' type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className='button_zone'>
                    <button className ="login_button" onClick={handleSubmit}>Login</button>
                    <button className ="signUp_button" >Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  );
}

export default Login;