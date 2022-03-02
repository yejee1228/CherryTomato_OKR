import React, {useState} from 'react';
import Timer from './Timer'

const FindId = () => {
    const [inputs, setInputs] = useState({
        memberName:'',
        phone: ''
    });
    const { memberName ,phone } = inputs
    const [authCode, setAuthcode] = useState('')
    const [transNum, setTransNum] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [message, setMessage] = useState('')

    const transSms = () => {
        setMessage('')
        if(memberName == ''){
            setErrorMsg('성명을 입력해주세요.')
        }else if(phone == ''){
            setErrorMsg('휴대폰 번호를 입력해주세요.')
        }else{
            setTransNum(true)
            //문자발송
        }
    }
    const doAuth = () => {
        if(memberName == ''){
            setErrorMsg('성명을 입력해주세요.')
        }else if(phone == ''){
            setErrorMsg('휴대폰 번호를 입력해주세요.')
        }else if(authCode == ''){
            setErrorMsg('인증코드를 입력해주세요.')
        }else{
            //인증코드 유효성 검사.

            //인증코드 틀릴 경우
            //setErrorMsg('인증번호가 틀렸습니다. 인증번호를 다시 입력해주세요.')

            //인증코드 맞을 경우.
            setErrorMsg('')
            setMessage('인증이 완료되었습니다.')
        }
    }
    const findId = () => {
        //아이디 찾아다가 ReturnId.js로 이동.
    }
    return (
        <>
            <div className="subtitle-box">
                <p className="subtitle">휴대폰 인증</p>
                <p className="subtitle-comment">가입 당시 입력한 휴대전화 번호를 입력하세요.</p>
            </div>
            <div className="input-box">
                <input type="text" placeholder="성명" name={memberName}/>
                <input type="text" placeholder="휴대폰번호('-'제외)" name={phone}/>
                <button className="btn-transAuth" onClick={transSms}>{transNum === false ? '인증번호 전송' : '재전송'} </button>
                <input className="auth-number" type="text" name={authCode} placeholder="인증코드를 입력해 주세요."/>
                <Timer/>
                <button className="btn-auth" onClick={doAuth}>인증하기</button>
                <div className="alert-box">
                    {
                        errorMsg != '' && <p className="error">{errorMsg}</p>
                    }
                    {
                        message!='' && <p className="success">{message}</p>
                    }
                </div>
            </div>
            <div className="btn-find" onClick={findId}>
                <span>아이디 찾기</span>
            </div>
        </>
    );
};

export default FindId;
