import { useState, useRef, useEffect } from 'react';
import * as L from 'components/account/login';
import * as A from 'components/account';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import axios from 'axios';
import { useRouter } from 'next/router';

const Index = () => {
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
    const inputRef = useRef<HTMLInputElement>(null)
    const errorStyle = { border: 'solid 1px #ff0000', backgroundColor: '#ffe2e2' }

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const handleInput = (e) => {
        const { value, name } = e.target

        setInputs({
            ...inputs,
            [name]: value
        })

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
        <L.LoginWrap>
            <L.LogoWrap>
                {/*로고 이미지*/}
                <L.LogoSpan>Cherry Tomato</L.LogoSpan>
            </L.LogoWrap>
            <L.LoginContent>
                <A.InputBox>
                    <A.Input type='email' name='email' value={email} placeholder='이메일 주소' onChange={handleInput} ref={inputRef} style={emailError !== '' ? errorStyle : {}} />
                    <A.InputIcon onClick={() => setInputs({ ...inputs, email: '' })}><MdCancel /></A.InputIcon>
                </A.InputBox>
                {emailError !== '' && <L.Error>{emailError}</L.Error>}
                <A.InputBox>
                    <A.Input type={passWordType} name='passwd' value={password} placeholder='비밀번호' onChange={handleInput} style={passWordError !== '' ? errorStyle : {}} />
                    {
                        passWordType === 'password'
                            ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon>
                            : <A.InputIcon onClick={changePwType}><AiFillEye /></A.InputIcon>
                    }
                </A.InputBox>
                {passWordError !== '' && <L.Error>{passWordError}</L.Error>}
            </L.LoginContent>
            <L.LoginButton onClick={doLogin}>
                <L.LoginSpan>로그인</L.LoginSpan>
            </L.LoginButton>
            {loginError !== '' && <L.Error>{loginError}</L.Error>}
            <L.NonLoginWrap>
                <L.FindId onClick={() => router.push('/account/findId')}><a>아이디찾기</a></L.FindId> <L.Vertical >&#124;</L.Vertical>
                <L.FindPassword onClick={() => router.push('/account/findPassword')}><a>비밀번호찾기</a></L.FindPassword> <L.Vertical >&#124;</L.Vertical>
                <L.Signup onClick={() => router.push('/account/signup')}><a>회원가입</a></L.Signup>
            </L.NonLoginWrap>
        </L.LoginWrap>
    );
};

export default Index;