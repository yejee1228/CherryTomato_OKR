import React from 'react';
import {AiOutlineRight} from "react-icons/ai";

const ReturnId = () => {
    return (
        <>
            <div className="subtitle-box">
                <p className="return-comment">회원님의 정보와 일치하는 아이디 입니다.</p>
            </div>
            <div className="return-box">
                <span>a00298***</span>
            </div>
            <div className="btn-find">
                <span>로그인</span>
            </div>
            <div className="non-login">
                <a href=""><span>비밀번호 찾기</span> <AiOutlineRight/></a>
            </div>

        </>
    );
};

export default ReturnId;