import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {
  AlertBox, AlertText, AuthButton, AuthNumberInput, AuthTime,
  ContentWrap, Input, InputWrap, RedButton, RedButtonSpan, SubTitle, SubtitleBox,
  SubTitleComment, TransAuthButton,
} from '../../../components/account/findAccount'
import Header from '../../../components/index'

const useCounter = (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => (c > 0 ? c - 1 : c));
    }, ms);
  }, []);
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  const restart = useCallback(() => {
    setCount(180);
    start();
  }, []);
  return { count, start, stop, restart };
};

const FindId = (url, config) => {
  const [inputs, setInputs] = useState({
    memberName: '',
    phone: '',
  });
  const { memberName, phone } = inputs;
  const [authCode, setAuthcode] = useState('');
  const [transNum, setTransNum] = useState(false);
  const [phoneErrorMsg, setPhoneErrorMsg] = useState('가입 당시 입력한 휴대전화 번호을 입력하세요.');
  const [errorMsg, setErrorMsg] = useState('');
  const [message, setMessage] = useState('');
  const [currentMinutes, setCurrentMinutes] = useState(3);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const { count, start, stop, restart } = useCounter(180, 1000);

  const handleInput = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 타이머 기능
  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const minutes = checkMinutes % 60;
    const seconds = count % 60;
    setCurrentSeconds(seconds);
    setCurrentMinutes(minutes);
  };

  // count의 변화에 따라 timer 함수 랜더링
  useEffect(timer, [count]);

  const transSms = () => {
    console.log(phone.length);
    console.log(phone.startsWith('010', 0));
    setMessage('');
    setPhoneErrorMsg('');
    setErrorMsg('');
    if (memberName == '') {
      setErrorMsg('성명을 입력해주세요.');
    } else if (phone == '') {
      setPhoneErrorMsg('휴대폰 번호를 입력해주세요.');
    } else if (phone.length != 11 || !phone.startsWith('010', 0)) {
      setPhoneErrorMsg('휴대폰 번호를 올바르게 작성해주세요.');
    } else {
      setTransNum(true);
      if (currentMinutes == 3) {
        start();
      } else {
        restart();
      }

      //문자발송
    }
  };

  const existPhone = async () => {
    axios.get(`/account/existphone/${phone}`).then((data) => {
      if (!data.data) {
        return false;
      } else {
        return true;
      }
    });
  };
  const doAuth = () => {
    stop();
    setPhoneErrorMsg('');
    setErrorMsg('');
    if (existPhone()) {
      setPhoneErrorMsg('등록되지 않은 핸드폰번호입니다.');
    } else if (authCode == '') {
      setErrorMsg('인증코드를 입력해주세요.');
    } else {
      //인증코드 유효성 검사.

      //인증코드 틀릴 경우
      //setErrorMsg('인증번호가 틀렸습니다. 인증번호를 다시 입력해주세요.')

      //인증코드 맞을 경우.
      //setPhoneErrorMsg('')
      //setErrorMsg('')
      setMessage('인증이 완료되었습니다.');
    }
  };
  const findId = () => {
    //아이디 찾아다가 ReturnId.js로 이동.
  };
  return (
    <>
      <Header contents={'findId'} />
      <ContentWrap>
        <SubtitleBox>
          <SubTitle>휴대폰 인증</SubTitle>
          {phoneErrorMsg != '' && (
            <SubTitleComment> {phoneErrorMsg} </SubTitleComment>
          )}
        </SubtitleBox>
        <InputWrap>
          <Input
            type="text"
            placeholder="성명"
            name="memberName"
            value={memberName}
            onChange={handleInput}
          />
          <Input
            type="text"
            placeholder="휴대폰번호('-'제외)"
            name="phone"
            value={phone}
            onChange={handleInput}
          />
          <TransAuthButton onClick={transSms}>
            {transNum === false ? '인증번호 전송' : '재전송'}{' '}
          </TransAuthButton>
          <AuthNumberInput
            type="text"
            name={authCode}
            placeholder="인증코드를 입력해 주세요."
          />
          <AuthTime>
            {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:
            {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
          </AuthTime>
          <AuthButton onClick={doAuth}>
            인증하기
          </AuthButton>
          <AlertBox>
            {errorMsg != '' && <AlertText AlertType='error'>{errorMsg}</AlertText>}
            {message != '' && <AlertText AlertType='success'>{message}</AlertText>}
          </AlertBox>
        </InputWrap>
        <RedButton onClick={findId}>
          <Link href="/account/findAccount/findId/returnId">
            <a>
              <RedButtonSpan>아이디 찾기</RedButtonSpan>
            </a>
          </Link>
        </RedButton>
      </ContentWrap>
    </>
  );
};

export default FindId;
