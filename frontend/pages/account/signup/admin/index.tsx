import React, { useEffect, useRef, useState } from 'react';
import { Header } from 'components/account';
import * as A from 'lib/styles/accountStyle';
import { AiFillEye, AiFillEyeInvisible, AiOutlineRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setUser } from 'lib/store/modules/user.module';
import * as regExp from 'lib/hooks/useRegExp';
import Router from 'next/router';

const Index = () => {
  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
    phone: '',
    groupString: ''
  });
  const { email, name, password, passwordCheck, phone, groupString } = inputs
  const [passWordType, setPassWordType] = useState('password')
  const [passwordCheckType, setPasswordCheckType] = useState('password')
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [passWordError, setPassWordError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const errorStyle = { border: 'solid 1px #ff0000', backgroundColor: '#ffe2e2' }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (email !== '' && !regExp.checkRegExp(email, regExp.emailRegExp)) {
      setEmailError('이메일 형식이 아닙니다.')
    } else {
      setEmailError('')
    }

    if (name !== '' && !regExp.checkRegExp(name, regExp.memberNameRegExp)) {
      setNameError('한글과 영문만 입력 가능합니다.')
    } else {
      setNameError('')
    }

    if (password !== '' && !regExp.checkRegExp(password, regExp.passwordRegExp)) {
      setPassWordError('영문/숫자/특수문자 중 2가지 이상 조합하여 6~12자로 입력해주세요.')
    } else if (passwordCheck !== '' && password !== passwordCheck) {
      setPassWordError('비밀번호가 일치하지 않습니다.')
    } else {
      setPassWordError('')
    }

    if (phone !== '' && !regExp.checkRegExp(phone, regExp.phoneRegExp)) {
      setPhoneError('11자리 숫자로만 입력해주세요.')
    } else {
      setPhoneError('')
    }

  }, [email, name, password, passwordCheck, phone])

  const changePwType = (type: string) => {
    if (type === 'password') {
      passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')
    } else {
      passwordCheckType === 'password' ? setPasswordCheckType('text') : setPasswordCheckType('password')
    }
  }
  const signup = () => {
    if (email == '') {
      setEmailError('이메일을 입력해주세요.')
      return
    } else if (name == '') {
      setNameError('이름을 입력해주세요.')
      return
    } else if (password == '') {
      setPassWordError('비밀번호를 입력해주세요.')
      return
    } else if (passwordCheck == '') {
      setPassWordError('비밀번호를 한번 더 입력해주세요.')
      return
    } else if (phone == '') {
      setPhoneError('핸드폰번호를 입력해주세요.')
      return
    } else {
      dispatch(setUser(inputs))
      Router.push('./complete')
    }
  }

  return (
    <>
      <Header contents='signup_admin' />
      <A.SignupWrap>
        <A.SignSubWrap>
          <A.InputBox>
            <A.Input type='email' name='email' value={email} placeholder='이메일 주소' onChange={handleInput} ref={inputRef} style={emailError !== '' ? errorStyle : {}} />
            {emailError !== '' && <A.AlertText alertType='error'>{emailError}</A.AlertText>}
          </A.InputBox>
          <A.InputBox>
            <A.Input type='text' placeholder='이름' name='memberName' value={name} onChange={handleInput} />
            {nameError !== '' && <A.AlertText alertType='error'>{nameError}</A.AlertText>}
          </A.InputBox>
          <A.InputBox>
            <A.Input type={passWordType} name='password' value={password} placeholder='비밀번호' onChange={handleInput} style={passWordError !== '' ? errorStyle : {}} maxLength={12} />
            {
              passWordType === 'password'
                ? <A.InputIcon onClick={() => changePwType('password')}> <AiFillEyeInvisible /> </A.InputIcon>
                : <A.InputIcon onClick={() => changePwType('password')}> <AiFillEye /> </A.InputIcon>
            }
          </A.InputBox>
          <A.InputBox>
            <A.Input type={passwordCheckType} name='passwordCheck' value={passwordCheck} placeholder='비밀번호 확인' onChange={handleInput} style={passWordError !== '' ? errorStyle : {}} maxLength={12} />
            {
              passwordCheckType === 'password'
                ? <A.InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEyeInvisible /> </A.InputIcon>
                : <A.InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEye /> </A.InputIcon>
            }
            {passWordError !== '' && <A.AlertText alertType='error'>{passWordError}</A.AlertText>}
          </A.InputBox>
          <A.InputBox>
            <A.Input type='text' placeholder={`휴대폰번호('-'제외)`} name='phone' value={phone} onChange={handleInput} maxLength={11} />
            {phoneError !== '' && <A.AlertText alertType='error'>{phoneError}</A.AlertText>}
          </A.InputBox>
          <A.Input type='hidden' name='group' value={groupString} />
        </A.SignSubWrap>
        <A.RedButton onClick={signup}>
          <A.RedButtonSpan>회원가입</A.RedButtonSpan>
        </A.RedButton>
        <div onClick={() => Router.push('./common')}>
          <a>
            <A.LinkBox>
              <A.LinkSpan>일반 회원으로 회원가입 <AiOutlineRight /></A.LinkSpan>
            </A.LinkBox>
          </a>
        </div>
      </A.SignupWrap>
    </>
  );
};

export default Index;
