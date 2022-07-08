import React, {useState} from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

const ChangePassword = () => {
    const [passWordType, setPassWordType] = useState('password')
    const [passwd, setPasswd] = useState('')
    const [checkPasswd, setCheckPasswd] = useState('')


    const changePwType = ()=>{
        passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')

    }

    return (
        <>
            <p>
                인증되었습니다.<br/>
                비밀번호를 재설정하여 주시기 바랍니다.
            </p>
            <div className="input-box">
                <div>
                    <input type={passWordType} name="passwd" value = {passwd} placeholder="비밀번호" 
                           />
                    {passWordType === "password" ? <div onClick={changePwType}><AiFillEyeInvisible/></div> : <div onClick={changePwType}><AiFillEye/></div>}
                </div>
                <div>
                    <input type={passWordType} name="checkPasswd" value = {checkPasswd} placeholder="비밀번호"
                           />
                    {passWordType === "password" ? <div onClick={changePwType}><AiFillEyeInvisible/></div> : <div onClick={changePwType}><AiFillEye/></div>}
                </div>
            </div>
        </>
    );
};

export default ChangePassword;