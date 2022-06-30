import React from 'react';
import {AiOutlineRight} from "react-icons/ai";

const FindPassword = () => {
    return (
        <>
            <div className="subtitle-box">
                <p className="return-comment">가입하신 이메일을 입력 후<br/>
                    하단의 본인인증 버튼을 누르시면<br/>
                    비밀번호를 재설정할 수 있습니다.</p>
            </div>
            <div className="input-box">
                <input type="email" placeholder='이메일 주소'/>
            </div>
            <div className="btn-find">
                <span>본인인증</span>
            </div>
            <div className="non-login">
                <a href=""><span className="green">가입하신 이메일</span>을 잊으셨나요? <AiOutlineRight /></a>
            </div>
        </>
    );
};

export default FindPassword;