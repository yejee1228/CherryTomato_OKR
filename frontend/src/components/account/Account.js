import React, {useState} from 'react';
import {BsChevronLeft} from "react-icons/bs";
import FindId from './FindId';
import ReturnId from './ReturnId';

const account = () => {

    return (
        <>
            <div className="title-box">
                <span className="before"><BsChevronLeft/></span>
                <span className="title">이메일 찾기</span>
            </div>
            <div className="contents">
                <FindId/>
                {/*<ReturnId/>*/}
            </div>
        </>
    );
};

export default account;