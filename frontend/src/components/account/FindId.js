import React, {useState} from 'react';

const FindId = () => {
    const [inputs, setInputs] = useState({
        memberName:'',
        phone: ''
    });
    const { memberName ,phone } = inputs
    return (
        <>
            <div className="subtitle-box">
                <p className="subtitle">휴대폰 인증</p>
                <p className="subtitle-comment">가입 당시 입력한 휴대전화 번호를 입력하세요.</p>
            </div>
            <div className="input-box">
                <input type="text" placeholder="성명" name={memberName}/>
                <input type="text" placeholder="휴대폰번호('-'제외)" name={phone}/>
                <button className="btn-transAuth">인증번호 전송</button>
                <input className="auth-number" type="text" placeholder="인증코드를 입력해 주세요."/>
                <span className="auth-time">01:58</span>
                <button className="btn-auth">인증하기</button>
            </div>
            <div className="btn-find">
                <span>아이디 찾기</span>
            </div>
        </>
    );
};

export default FindId;