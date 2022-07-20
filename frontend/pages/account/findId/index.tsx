import React, { useState } from 'react';
import axios from 'axios';
import { ContentWrap } from 'components/account/findAccount'
import * as A from 'components/account'
import { Header } from 'components/index'
import { useRouter } from 'next/router';
//import { useCounter } from 'lib/ts/useCounter';


const Index = () => {
  const router = useRouter()
  const [inputs, setInputs] = useState({
    memberName: '',
    phone: '',
  });
  const { memberName, phone } = inputs;
  /* const [authCode, setAuthcode] = useState('');
  const [transNum, setTransNum] = useState(false); */
  //const [phoneErrorMsg, setPhoneErrorMsg] = useState('가입 당시 입력한 휴대전화 번호을 입력하세요.');
  const [errorMsg, setErrorMsg] = useState('');
  const [message, setMessage] = useState('');
  /* const [currentMinutes, setCurrentMinutes] = useState(3);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const { count, start, stop, restart } = useCounter(180, 1000); */

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 타이머 기능
  /*   const timer = () => {
      const checkMinutes = Math.floor(count / 60);
      const minutes = checkMinutes % 60;
      const seconds = count % 60;
      setCurrentSeconds(seconds);
      setCurrentMinutes(minutes);
    }; */

  // count의 변화에 따라 timer 함수 랜더링
  /*   useEffect(timer, [count]); */

  /*   const transSms = () => {
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
    }; */

  /*   const existPhone = async () => {
      axios.get(`/account/existphone/${phone}`).then((data) => {
        if (!data.data) {
          return false;
        } else {
          return true;
        }
      });
    }; */
  /* const doAuth = () => {
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
  }; */
  const findId = () => {
    const config = {
      header: ''
    }
    axios.post(`/member/id`, config)
      .then((data) => {
        if (!data.data) {
          return false;
        } else {
          return true;
        }
      });
    //아이디 찾아다가 ReturnId.js로 이동.
    router.push('/account/returnId')
  };
  return (
    <>
      <Header contents={'findId'} />
      <ContentWrap>
        <A.SubTitleBox>
          <A.SubTitle>휴대폰 인증</A.SubTitle>
          {/* {phoneErrorMsg != '' && (
            <SubTitleComment> {phoneErrorMsg} </SubTitleComment>
          )} */}
        </A.SubTitleBox>
        <A.InputWrap>
          <A.Input
            type='text'
            placeholder='성명'
            name='memberName'
            value={memberName}
            onChange={handleInput}
          />
          <A.Input
            type='text'
            placeholder={`휴대폰번호('-'제외)`}
            name='phone'
            value={phone}
            onChange={handleInput}
          />
          {/* <TransAuthButton onClick={transSms}>
            {transNum === false ? '인증번호 전송' : '재전송'}{' '}
          </TransAuthButton>
          <AuthNumberInput
            type='text'
            name={authCode}
            placeholder='인증코드를 입력해 주세요.'
          />
          <AuthTime>
            {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:
            {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
          </AuthTime>
          <AuthButton onClick={doAuth}>
            인증하기
          </AuthButton> */}
          <A.AlertBox>
            {errorMsg != '' && <A.AlertText AlertType='error'>{errorMsg}</A.AlertText>}
            {message != '' && <A.AlertText AlertType='success'>{message}</A.AlertText>}
          </A.AlertBox>
        </A.InputWrap>
        <A.RedButton onClick={findId}>
          <div onClick={() => router.push('/account/findAccount/findId/returnId')}>
            <a>
              <A.RedButtonSpan>아이디 찾기</A.RedButtonSpan>
            </a>
          </div>
        </A.RedButton>
      </ContentWrap>
    </>
  );
};

export default Index;
