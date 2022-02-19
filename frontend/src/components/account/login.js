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
        userEmail: '',
        userPassword: ''
    });
    const { userEmail, userPassword } = inputs;
    const [passWordType, setPassWordType ] = useState('password');
    const [emailError, setEmailError] = useState('')
    const [passWordError, setPassWordError] = useState('')
    const [loginError, setLoginError] = useState('')
    const inputRef = useRef();
    const errorStyle = {border: 'solid 1px #f00', 'background-color': '#ffe2e2'}

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
        if(userEmail == '') {
            setEmailError('이메일 주소를 입력해주세요.')
            return;
        }else if(userEmail.indexOf('@') <= -1) {
            setEmailError('@를 포함한 이메일 주소를 입력해주세요.')
            return;
        }else{
            setEmailError('')
        }
        if(userPassword == ''){
            setPassWordError('비밀번호를 입력해주세요.')
            return;
        }
        
        let headers = {
            'authorization': 'JWT fefege..',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(`http://localhost:8080/account/existid/`+userEmail, userEmail, headers)
            .then(({data}) => {
                if (!data.result) {
                    setEmailError('존재하지 않는 이메일주소입니다.')
                    return;
                }else{
                    setEmailError('')
                    console.log('존재하는 이메일주소')
                    /*axios.post(`http://localhost:8080/account/login/`+userEmail, userPassword, headers).then(
                        ({data})=>{
                            if(data.result == 'overCount') {
                                setLoginError('로그인 가능횟수를 초과하였습니다.')
                            }else if(data.result == 'fail') {
                                setPassWordError('비밀번호가 일치하지 않습니다.')
                            }else{
                                //메인페이지 이동 (세션 추가)
                            }
                        }
                    )*/
                }
            })
            .catch(() => {
                return;
            })
    }


    return (
        <div className="login">
            <div className="logo">
                {/*로고 이미지*/}
                <span>Cherry Tomato</span>
            </div>
            <div className="input-box">
                <div>
                    <input type="email" name="userEmail"  value = {userEmail} placeholder="이메일 주소" onChange={handleInput} ref={inputRef}
                           style={emailError !== '' ? errorStyle : {}}/>
                    <div onClick={()=>setInputs({...inputs, userEmail:''})}><MdCancel/></div>
                </div>
                {emailError !== '' && <span className="error">{emailError}</span>}
                <div>
                    <input className="input-pw" type={passWordType} name="userPassword"  value = {userPassword} placeholder="비밀번호" onChange={handleInput}
                           style={emailError !== '' ? errorStyle : {}}/>
                    {passWordType === "password" ? <div onClick={changePwType}><AiFillEyeInvisible/></div> : <div onClick={changePwType}><AiFillEye/></div>}
                </div>
                {passWordError !== '' && <span className="error">{passWordError}</span>}
            </div>
            <div className="login-button" onClick={doLogin}>
                <span>로그인</span>
            </div>
            {loginError !== '' && <span className="error">{loginError}</span>}
            <div className="non-login">
                <Link to="/account/findid"><span className="find-id">아이디찾기</span></Link> <span className="vertical">&#124;</span>
                <Link to="/account/findid"><span className="find-password">비밀번호찾기</span></Link> <span className="vertical">&#124;</span>
                <Link to="/account/join"><span className="join">회원가입</span></Link>
            </div>
            <div className="social-login">
                <div className="kakao-login" onClick="">
                    <img src={kakao} alt=""/><br/>
                    <span>카카오<br/>로그인</span>
                </div>
                <div className="google-login" onClick="">
                    <img src={google} alt=""/><br/>
                    <span>구글<br/>로그인</span>
                </div>
            </div>
        </div>
    );
};

export default Login;