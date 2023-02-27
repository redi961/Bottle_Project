<<<<<<< HEAD
import React, {useState, Dispatch} from 'react';
import axios from 'axios';
import logo from '../../image/Logo.png'
=======
import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../image/logo.jpg'
>>>>>>> e8079a7d12299d6b611da2b5d7dc9916c7fbdd6e
import email_img from '../../image/email.jpg'
import pw from '../../image/pass.png'

import '../../styles/login.css'
<<<<<<< HEAD
import Sidebar from '../sidebar/Sidebar';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('/api/login', {id, password})
            .then(response => {
                // 로그인 성공 시에 취해야할 액션
                console.log(response.data);
                if (response.data === 200) {
                    console.log("로그인");
                    setMsg("");
                }
                if (response.data.code === 400) {
                    setMsg("ID, Password가 비어있습니다.");
                }
                if (response.data.code === 401) {
                    setMsg("존재하지 않는 ID입니다.");
                }
                if (response.data.code === 402) {
                    setMsg("Password가 틀립니다.");
                }
            })
            .catch(error => {
                // 로그인 실패 시에 취해야할 액션
                console.log(error.response.data);

            });
    };

    return (
        <div>
            <div className='main'>
                <div className='sub-main'>
                    <div className="center_div">
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={logo} alt="logo" className='logo'/>
                            </div>
                        </div>
                        <div className='container-login'>
                            <div className='input_zone'>
                                <div className="first_input">
                                    <img src={email_img} alt="email" className='input_icon'/>
                                    <input
                                        className='input_slot'
                                        type="Email"
                                        placeholder="E-mail"
                                        value={id}
                                        onChange={(event) => setId(event.target.value)}/>
                                </div>
                                <div className='second_input'>
                                    <img src={pw} alt="pass" className='input_icon'/>
                                    <input
                                        className='input_slot'
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}/>
                                </div>
                            </div>
                            <div className='button_zone'>
                                <button className="login_button" onClick={handleSubmit}>Login</button>
                                <button className="signUp_button">Sign Up</button>
                            </div>
                        </div>
=======


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
                  <div className='input_zone'>
                    <div className ="first_input">
                      <img src={email_img} alt ="email" className ='input_icon'/>
                      <input className='input_slot' type="Email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='second_input'>
                      <img src={pw} alt ="pass" className ='input_icon'/>
                      <input className='input_slot' type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                  </div>
                    <div className='button_zone'>
                    <button className ="login_button" onClick={handleSubmit}>Login</button>
                    <button className ="signUp_button" >Sign Up</button>
>>>>>>> e8079a7d12299d6b611da2b5d7dc9916c7fbdd6e
                    </div>
                </div>
            </div>
        </div>
<<<<<<< HEAD
    );
=======
    </div>
  </>
  );
>>>>>>> e8079a7d12299d6b611da2b5d7dc9916c7fbdd6e
}

export default Login;