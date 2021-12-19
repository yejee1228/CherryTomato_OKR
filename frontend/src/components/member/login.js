import React from 'react';
import '../resource/css/member.scss';
import kakao from '../resource/image/kakao-talk.png';
import google from '../resource/image/google.png';
import {AiFillEyeInvisible} from 'react-icons/ai'

const Login = () => {
    return (
        <div className="login">
            <div className="logo">
                {/*로고 이미지*/}
                <span>Cherry Tomato</span>
            </div>
            <div className="input-box">
                <input type="email" name="email" placeholder="이메일 주소"/><br/>
                <input type="password" name="password" placeholder="비밀번호"/>
                <div className="blind-password"><AiFillEyeInvisible/></div>
            </div>
            <div className="login-button">
                <span>로그인</span>
            </div>
            <div className="non-login">
                <span>아이디찾기</span> <span className="vertical">&#124;</span>
                <span>비밀번호찾기</span> <span className="vertical">&#124;</span>
                <span>회원가입</span>
            </div>
            <div className="social-login">
                <div className="kakao-login">
                    <img src={kakao} alt=""/><br/>
                    <span>카카오<br/>로그인</span>
                </div>
                <div className="google-login">
                    <img src={google} alt=""/><br/>
                    <span>구글<br/>로그인</span>
                </div>
            </div>
        </div>
    );
};

export default Login;