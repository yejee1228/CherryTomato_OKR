import React, {useState} from 'react';
import {BsChevronLeft} from "react-icons/bs";

const FindId = () => {

    const [inputs,setInputs] = useState({
        memberName:'',
        phone: ''
    })
    const { memberName ,phone } = inputs
    return (
        <>
            <div className="title-box">
                <span className="before"><BsChevronLeft/></span>
                <span className="title">이메일 찾기</span>
            </div>
            <div>
                <div>
                    <span>휴대폰 인증</span>
                    <span>가입 당시 입력한 휴대전화 번호를 입력하세요.</span>
                </div>
                <div>
                    <input type="text" placeholder="성명" name={memberName}/>
                    <input type="text" placeholder="휴대폰번호('-'제외)" name={phone}/>
                    <button>인증번호 전송</button>
                    <input type="text" placeholder="인증코드를 입력해 주세요."/>
                    <span>01:58</span>
                    <button>인증하기</button>
                </div>
                <div>
                    <span>아이디 찾기</span>
                </div>


            </div>
        </>
    );
};

export default FindId;