import React, {useState} from 'react';
import {BsChevronLeft} from "react-icons/bs";

const findAccount = () => {
    const [inputs, setInputs] = useState({
        memberName:'',
        phone: ''
    });
    const { memberName ,phone } = inputs
    return (
        <>
            <div className="title-box">
                <span className="before"><BsChevronLeft/></span>
                <span className="title">이메일 찾기</span>
            </div>
            <div className="contents">
                <div className="subtitle-box">
                    <span className="subtitle">휴대폰 인증</span><br/>
                    <span className="subtitle-comment">가입 당시 입력한 휴대전화 번호를 입력하세요.</span>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="성명" name={memberName}/>
                    <input type="text" placeholder="휴대폰번호('-'제외)" name={phone}/>
                    <button className="btn-transAuth">인증번호 전송</button>
                    <input className="auth-number" type="text" placeholder="인증코드를 입력해 주세요."/>
                    <span className="auth-time">01:58</span>
                    <button className="btn-auth">인증하기</button>
                </div>
                <div>
                    <span>아이디 찾기</span>
                </div>


            </div>
        </>
    );
};

export default findAccount;