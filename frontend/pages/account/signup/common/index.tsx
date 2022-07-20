import { useEffect, useRef, useState } from 'react'
import { Header } from 'components'
import { AlertBox, AlertText, InputIcon, Input, InputBox, LinkBox, LinkSpan, RedButton, RedButtonSpan } from 'components/account'
import { SignSubWrap, SignupWrap } from 'components/account/signup'
import { MdCancel } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible, AiOutlineRight } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter()
  const [inputs, setInputs] = useState({
    email: '',
    memberName: '',
    password: '',
    phone: '',
  });
  const { email, memberName, password, phone } = inputs;
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [message, setMessage] = useState('');
  const [passWordType, setPassWordType] = useState('password')
  const [passwordCheckType, setPasswordCheckType] = useState('password')
  const [emailError, setEmailError] = useState('')
  const [passWordError, setPassWordError] = useState('')
  const [loginError, setLoginError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  const errorStyle = { border: 'solid 1px #ff0000', backgroundColor: '#ffe2e2' }

  const handleInput = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const changePwType = (type) => {
    if (type === 'password') {
      passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')
    } else {
      passwordCheckType === 'password' ? setPasswordCheckType('text') : setPasswordCheckType('password')

    }
  }


  return (
    <>
      <Header contents='signup_admin' />
      <SignupWrap>
        <SignSubWrap>
          <InputBox>
            <Input type='email' name='email' value={email} placeholder='이메일 주소' onChange={handleInput} ref={inputRef} style={emailError !== '' ? errorStyle : {}} />
            <InputIcon onClick={() => setInputs({ ...inputs, email: '' })}><MdCancel /></InputIcon>
            {emailError !== '' && <AlertText AlertType='error'>{emailError}</AlertText>}
          </InputBox>
          <InputBox>
            <Input type='text' placeholder='성명' name='memberName' value={memberName} onChange={handleInput} />
            <InputIcon onClick={() => setInputs({ ...inputs, email: '' })}><MdCancel /></InputIcon>
            {emailError !== '' && <AlertText AlertType='error'>{emailError}</AlertText>}
          </InputBox>
          <InputBox>
            <Input type={passWordType} name='password' value={password} placeholder='비밀번호' onChange={handleInput} style={passWordError !== '' ? errorStyle : {}} />
            {
              passWordType === 'password'
                ? <InputIcon onClick={() => changePwType('password')}> <AiFillEyeInvisible /> </InputIcon>
                : <InputIcon onClick={() => changePwType('password')}> <AiFillEye /> </InputIcon>
            }
          </InputBox>
          <InputBox>
            <Input type={passwordCheckType} name='passwordCheck' value={passwordCheck} placeholder='비밀번호 확인' onChange={handleInput} style={passWordError !== '' ? errorStyle : {}} />
            {
              passwordCheckType === 'password'
                ? <InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEyeInvisible /> </InputIcon>
                : <InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEye /> </InputIcon>
            }
          </InputBox>
          {passWordError !== '' && <AlertText AlertType='error'>{passWordError}</AlertText>}
          <AlertBox>
            {errorMsg != '' && <AlertText AlertType='error'>{errorMsg}</AlertText>}
            {message != '' && <AlertText AlertType='success'>{message}</AlertText>}
          </AlertBox>
          <InputBox>
            <Input type='text' placeholder={`휴대폰번호('-'제외)`} name='phone' value={phone} onChange={handleInput} />
            <InputIcon onClick={() => setInputs({ ...inputs, email: '' })}><MdCancel /></InputIcon>
            {emailError !== '' && <AlertText AlertType='error'>{emailError}</AlertText>}
          </InputBox>
          <AlertBox>
            {errorMsg != '' && <AlertText AlertType='error'>{errorMsg}</AlertText>}
            {message != '' && <AlertText AlertType='success'>{message}</AlertText>}
          </AlertBox>
        </SignSubWrap>
        <RedButton >
          <RedButtonSpan>회원가입</RedButtonSpan>
        </RedButton>
        <div onClick={() => router.push('/account/signup/admin')}>
          <a>
            <LinkBox>
              관리자로 회원가입 <LinkSpan><AiOutlineRight /></LinkSpan>
            </LinkBox>
          </a>
        </div>
      </SignupWrap>
    </>
  );
};

export default Index;
