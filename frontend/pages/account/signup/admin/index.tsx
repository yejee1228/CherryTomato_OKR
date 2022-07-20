import React, { useRef, useState } from 'react'
import { Header } from 'components'
import * as A from 'components/account'
import * as S from 'components/account/signup'
import { AiFillEye, AiFillEyeInvisible, AiOutlineRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/modules/user.module';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import { useRouter } from 'next/router';

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [inputs, setInputs] = useState({
    email: '',
    memberName: '',
    password: '',
    passwordCheck: '',
    phone: '',
  });
  const user = useSelector((state: RootState) => state.user.user)
  const { email, memberName, password, passwordCheck, phone } = inputs;
  const [errorMsg, setErrorMsg] = useState('');
  const [message, setMessage] = useState('');
  const [passWordType, setPassWordType] = useState('password')
  const [passwordCheckType, setPasswordCheckType] = useState('password')
  const [emailError, setEmailError] = useState('')
  const [passWordError, setPassWordError] = useState('')
  const [loginError, setLoginError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  const errorStyle = { border: 'solid 1px #ff0000', backgroundColor: '#ffe2e2' }

  /* useEffect(()=>{
  
  }, [inputs]) */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

  };
  const changePwType = (type: string) => {
    if (type === 'password') {
      passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')
    } else {
      passwordCheckType === 'password' ? setPasswordCheckType('text') : setPasswordCheckType('password')

    }
  }
  const signup = () => {
    dispatch(setUser(inputs))
    router.push('./admin/complete')
  }

  return (
    <>
      <Header contents='signup_admin' />
      <S.SignupWrap>
        <S.SignSubWrap>
          <A.InputBox>
            <A.Input type='email' name='email' value={email} placeholder='이메일 주소' onChange={handleInput} ref={inputRef} style={emailError !== '' ? errorStyle : {}} />
            {emailError !== '' && <A.AlertText AlertType='error'>{emailError}</A.AlertText>}
          </A.InputBox>
          <A.InputBox>
            <A.Input type='text' placeholder='성명' name='memberName' value={memberName} onChange={handleInput} />
            {emailError !== '' && <A.AlertText AlertType='error'>{emailError}</A.AlertText>}
          </A.InputBox>
          <A.InputBox>
            <A.Input type={passWordType} name='password' value={password} placeholder='비밀번호' onChange={handleInput} style={passWordError !== '' ? errorStyle : {}} />
            {
              passWordType === 'password'
                ? <A.InputIcon onClick={() => changePwType('password')}> <AiFillEyeInvisible /> </A.InputIcon>
                : <A.InputIcon onClick={() => changePwType('password')}> <AiFillEye /> </A.InputIcon>
            }
          </A.InputBox>
          <A.InputBox>
            <A.Input type={passwordCheckType} name='passwordCheck' value={passwordCheck} placeholder='비밀번호 확인' onChange={handleInput} style={passWordError !== '' ? errorStyle : {}} />
            {
              passwordCheckType === 'password'
                ? <A.InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEyeInvisible /> </A.InputIcon>
                : <A.InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEye /> </A.InputIcon>
            }
          </A.InputBox>
          {passWordError !== '' && <A.AlertText AlertType='error'>{passWordError}</A.AlertText>}
          <A.AlertBox>
            {errorMsg != '' && <A.AlertText AlertType='error'>{errorMsg}</A.AlertText>}
            {message != '' && <A.AlertText AlertType='success'>{message}</A.AlertText>}
          </A.AlertBox>
          <A.InputBox>
            <A.Input type='text' placeholder={`휴대폰번호('-'제외)`} name='phone' value={phone} onChange={handleInput} maxLength={11} />
            {emailError !== '' && <A.AlertText AlertType='error'>{emailError}</A.AlertText>}
          </A.InputBox>
          <A.AlertBox>
            {errorMsg != '' && <A.AlertText AlertType='error'>{errorMsg}</A.AlertText>}
            {message != '' && <A.AlertText AlertType='success'>{message}</A.AlertText>}
          </A.AlertBox>
        </S.SignSubWrap>
        <A.RedButton onClick={signup}>
          <A.RedButtonSpan>회원가입</A.RedButtonSpan>
        </A.RedButton>
        <div onClick={() => router.push('./common')}>
          <a>
            <A.LinkBox>
              일반 회원으로 회원가입 <A.LinkSpan><AiOutlineRight /></A.LinkSpan>
            </A.LinkBox>
          </a>
        </div>
      </S.SignupWrap>
    </>
  );
};

export default Index;
