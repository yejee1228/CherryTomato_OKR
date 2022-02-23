import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../resource/css/account.scss';
import kakao from '../resource/image/kakao-talk.png';
import google from '../resource/image/google.png';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { MdCancel } from "react-icons/md";
import axios from 'axios'

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        passwd: ''
    });
    const { email, passwd } = inputs;
    const [passWordType, setPassWordType ] = useState('password');
    const [emailError, setEmailError] = useState('')
    const [passWordError, setPassWordError] = useState('')
    const [loginError, setLoginError] = useState('')
    const inputRef = useRef();
    const errorStyle = {border: 'solid 1px #ff0000', backgroundColor: '#ffe2e2'}

    useEffect(()=>{
        inputRef.current.focus()
    }, [])
    const handleInput = (e) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value
        });

    }
    const changePwType = ()=>{
        passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')

    }
    const doLogin = async() => {
        setEmailError('')
        setPassWordError('')
        if(email == '') {
            setEmailError('이메일 주소를 입력해주세요.')
            return;
        }else if(email.indexOf('@') <= -1) {
            setEmailError('@를 포함한 이메일 주소를 입력해주세요.')
            return;
        }
        if(passwd == ''){
            setPassWordError('비밀번호를 입력해주세요.')
            return;
        }
        
        let headers = {
            'authorization': 'JWT fefege..',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(`http://localhost:8080/account/existid/`+email, email, headers)
            .then((data) => {
                if (!data.data) {
                    setEmailError('존재하지 않는 이메일주소입니다.')
                    return;
                }else{
                    setEmailError('')
                    /*let param = JSON.stringify({'email':email, 'passwd': password})*/
                    axios.post(`http://localhost:8080/account/login`, inputs, headers).then(
                        (data1)=>{
                            if(data1.data === 'wrongCount') {
                                setLoginError('로그인 가능횟수를 초과하였습니다.')
                            }else if(data1.data === 'wrongPasswd') {
                                setPassWordError('비밀번호가 일치하지 않습니다.')
                            }else if(data1.data === 'success' ){
                                alert('success')
                                setLoginError('')
                                setPassWordError('')
                                setEmailError('')
                                //메인페이지 이동 (세션 추가)
                            }
                        }
                    )
                    return;
                }
            })
            .catch(() => {
                return;
            })
    }
    const kauth = () => {
        alert("구현중")
    }
    const gauth = () => {
        alert("구현중")
    }

    return (
        <div className="login">
            <div className="logo">
                {/*로고 이미지*/}
                <span>Cherry Tomato</span>
            </div>
            <div className="input-box">
                <div>
                    <input type="email" name="email"  value = {email} placeholder="이메일 주소" onChange={handleInput} ref={inputRef}
                           style={emailError !== '' ? errorStyle : {}}/>
                    <div onClick={()=>setInputs({...inputs, email:''})}><MdCancel/></div>
                </div>
                {emailError !== '' && <span className="error">{emailError}</span>}
                <div>
                    <input type={passWordType} name="passwd"  value = {passwd} placeholder="비밀번호" onChange={handleInput}
                           style={passWordError !== '' ? errorStyle : {}}/>
                    {passWordType === "password" ? <div onClick={changePwType}><AiFillEyeInvisible/></div> : <div onClick={changePwType}><AiFillEye/></div>}
                </div>
                {passWordError !== '' && <span className="error">{passWordError}</span>}
            </div>
            <div className="login-button" onClick={doLogin}>
                <span>로그인</span>
            </div>
            {loginError !== '' && <span className="error">{loginError}</span>}
            <div className="non-login">
                <Link to="/account/account"><span className="find-id">아이디찾기</span></Link> <span className="vertical">&#124;</span>
                <Link to="/account/account"><span className="find-password">비밀번호찾기</span></Link> <span className="vertical">&#124;</span>
                <Link to="/account/join"><span className="join">회원가입</span></Link>
            </div>
            <div className="social-login">
                <div className="kakao-login" onClick={kauth}>
                    <img src={kakao} alt=""/><br/>
                    <span>카카오<br/>로그인</span>
                </div>
                <div className="google-login" onClick={gauth}>
                    <img src={google} alt=""/><br/>
                    <span>구글<br/>로그인</span>
                </div>
            </div>
        </div>
    );
};

export default Login;