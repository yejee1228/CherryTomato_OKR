import React, {useState} from 'react';
import {BsChevronLeft} from "react-icons/bs";
import FindId from './FindId';
import FindPassword from './FindPassword';
import ReturnId from './ReturnId';

const account = ({flag}) => {

    return (
        <>
            <div className="title-box">
                <span className="before"><BsChevronLeft/></span>
                <span className="title">
                    {'비밀번호 찾기'}
                    {flag === 'findId' && '아이디 찾기' }
                    {flag === 'findPw' && '비밀번호 찾기'}
                </span>
            </div>
            {flag}
            <div className="contents">
            <FindPassword/>
                {flag === 'findId' && <FindId/> }
                {flag === 'returnId' && <ReturnId/>}
                {flag === 'findPw' && <FindPassword/>}
            </div>
        </>
    );
};

export default account;