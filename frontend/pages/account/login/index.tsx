import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    LoginWrap, LogoWrap, LogoSpan, LoginContent,
    LoginItem, ContentInput, CancelIcon, EyeIcon,
    Error, LoginButton, LoginSpan, NonLoginWrap,
    FindId, FindPassword, Signup
} from 'components/account/login'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { MdCancel } from "react-icons/md";
import axios from 'axios'
import { useRouter } from 'next/router';

const index = () => {
    const router = useRouter()
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const { email, password } = inputs
    const [passWordType, setPassWordType] = useState('password')
    const [emailError, setEmailError] = useState('')
    const [passWordError, setPassWordError] = useState('')
    const [loginError, setLoginError] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    const errorStyle = { border: 'solid 1px #ff0000', backgroundColor: '#ffe2e2' }

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleInput = (e) => {
        const { value, name } = e.target

        setInputs({
            ...inputs,
            [name]: value
        });

    }
    const changePwType = () => {
        passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')

    }
    const doLogin = async () => {
        setEmailError('')
        setPassWordError('')
        if (email == '') {
            setEmailError('이메일 주소를 입력해주세요.')
            return;
        } else if (email.indexOf('@') <= -1) {
            setEmailError('@를 포함한 이메일 주소를 입력해주세요.')
            return;
        }
        if (password == '') {
            setPassWordError('비밀번호를 입력해주세요.')
            return;
        }

        const headers: object = {
            'authorization': 'JWT fefege..',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        axios.get(`http://localhost:8080/account/existid/` + email)
            .then((data) => {
                if (!data.data) {
                    setEmailError('존재하지 않는 이메일주소입니다.')
                    return
                } else {
                    setEmailError('')
                    axios.post(`http://localhost:8080/account/login`, inputs, headers).then(
                        (data1) => {
                            if (data1.data === 'wrongCount') {
                                setLoginError('로그인 가능횟수를 초과하였습니다.')
                            } else if (data1.data === 'wrongPasswd') {
                                setPassWordError('비밀번호가 일치하지 않습니다.')
                            } else if (data1.data === 'success') {
                                alert('success')
                                setLoginError('')
                                setPassWordError('')
                                setEmailError('')
                                router.push('/main')
                            }
                        }
                    )
                    return
                }
            })
            .catch(() => {
                return
            })
    }

    return (
        <LoginWrap>
            <LogoWrap>
                {/*로고 이미지*/}
                <LogoSpan>Cherry Tomato</LogoSpan>
            </LogoWrap>
            <LoginContent>
                <LoginItem>
                    <ContentInput type="email" name="email" value={email} placeholder="이메일 주소" onChange={handleInput} ref={inputRef}
                        style={emailError !== '' ? errorStyle : {}} />
                    <CancelIcon onClick={() => setInputs({ ...inputs, email: '' })}><MdCancel /></CancelIcon>
                </LoginItem>
                {emailError !== '' && <Error>{emailError}</Error>}
                <LoginItem>
                    <ContentInput type={passWordType} name="passwd" value={password} placeholder="비밀번호" onChange={handleInput}
                        style={passWordError !== '' ? errorStyle : {}} />
                    {passWordType === "password" ? <EyeIcon onClick={changePwType}><AiFillEyeInvisible /></EyeIcon> : <EyeIcon onClick={changePwType}><AiFillEye /></EyeIcon>}
                </LoginItem>
                {passWordError !== '' && <Error>{passWordError}</Error>}
            </LoginContent>
            <LoginButton onClick={doLogin}>
                <LoginSpan>로그인</LoginSpan>
            </LoginButton>
            {loginError !== '' && <Error>{loginError}</Error>}
            <NonLoginWrap>
                <Link href="/account/findId"><a><FindId>아이디찾기</FindId></a></Link> <span className="vertical">&#124;</span>
                <Link href="/account/findPassword"><a><FindPassword>비밀번호찾기</FindPassword></a></Link> <span className="vertical">&#124;</span>
                <Link href="/account/signup"><a><Signup>회원가입</Signup></a></Link>
            </NonLoginWrap>
        </LoginWrap>
    );
};

export default index;