import React, { useState } from 'react';
import axios from 'axios';
import email_img from '../../image/email.jpg'
import pw from '../../image/pass.png'
import person from '../../image/Person.png'
import {useNavigate} from 'react-router-dom'

import '../../styles/login.css'

function SignUp() {
  const [Email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePasswd, setRePasswd] = useState(null);
  const [name, setName] = useState(null);
  const navigator = useNavigate();

const onEmailHandler = (event) => {
  setEmail(event.currentTarget.value);
} 

const onPasswordHandler = (event) => {
  setPassword(event.currentTarget.value);
}

const onRePasswordHandler = (event) => {
  setRePasswd(event.currentTarget.value);
}

const onNameHandler = (event) => {
  setName(event.currentTarget.value);
}

  const handleSubmit = () => {
    if (Email == null) {
      alert("아이디가 입력되지 않았습니다.")
    } else if (password == null) {
      alert("비밀번호가 입력되지 않았습니다.")
    } else if (password != rePasswd) {
      alert("비밀번호가 서로 일치하지 않습니다")
    } else if (password === rePasswd) {
    axios
      .post('/bottle/user/signup', {
        user_id : Email,
		    user_pass : password,
        user_name : name
      })
      .then(res => {
        console.log(Email);
        console.log(res.data);
        alert(res.data)
        if(res.data =="회원가입에 성공하셨습니다.") 
        document.location.href = "/login";
      })
      .catch(error => {
        // 회원가입 실패 시에 취해야할 액션
        console.log(error.response.data);
      });
  };}

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
                <div className='container-login'>
                    <h1>회원가입</h1>
                  <div className='input_zone'>
                    <div className ="div_input">
                      <img src={email_img} alt ="email" className ='input_icon'/>
                      <input className='input_slot' type="Email" placeholder="E-mail" value={Email} onChange={onEmailHandler} />
                    </div>
                    <div className='div_input'>
                      <img src={pw} alt ="pass" className ='input_icon'/>
                      <input className='input_slot' type="password" placeholder="Password" value={password} onChange={onPasswordHandler} />
                    </div>
                    <div className='div_input'>
                      <img src={pw} alt ="rePasswd" className ='input_icon'/>
                      <input className='input_slot' type="password" placeholder="Re-enter Password" value={rePasswd} onChange={onRePasswordHandler} />
                    </div>
                    <div className='div_input'>
                      <img src={person} alt ="person" className ='input_icon'/>
                      <input className='input_slot' type="text" placeholder="Enter your name" value={name} onChange={onNameHandler} />
                    </div>
                  </div>
                    <div className='button_zone'>
                    <button className ="menu_button" onClick={() => {handelNav('login')}}>Back</button>
                    <button className ="menu_button" onClick={handleSubmit}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  );
}


export default SignUp;