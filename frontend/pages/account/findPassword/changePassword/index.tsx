import React, { useEffect, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Header } from 'components/account';
import * as A from 'lib/styles/accountStyle';
import * as RegExp from 'lib/hooks/useRegExp';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    const [passWordType, setPassWordType] = useState('password')
    const [inputs, setInputs] = useState({
        password: '',
        passwordCheck: ''
    })
    const { password, passwordCheck } = inputs
    const [passwordError, setPassWordError] = useState('')

    const changePwType = () => {
        passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')

    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    useEffect(() => {
        if (password !== '' && !RegExp.checkRegExp(password, RegExp.passwordRegExp)) {
            setPassWordError('영문/숫자/특수문자 중 2가지 이상 조합하여 6~12자로 입력해주세요.')
        } else if (passwordCheck !== '' && password !== passwordCheck) {
            setPassWordError('비밀번호가 일치하지 않습니다.')
        } else {
            setPassWordError('')
        }
    }, [password, passwordCheck])
    const submit = () => {
        if (password == '') {
            setPassWordError('비밀번호를 입력해주세요.')
            return
        } else if (passwordCheck == '') {
            setPassWordError('비밀번호를 한번 더 입력해주세요.')
            return
        } else {
            router.push('./complete')
            return//비밀번호 변경 api
        }
    }

    return (
        <>
            <Header contents={'findPassword'} />
            <A.ContentWrap>
                <A.SubTitleBox>
                    <A.SubTitleCommentRed>
                        인증되었습니다.<br />
                        비밀번호를 재설정하여 주시기 바랍니다.
                    </A.SubTitleCommentRed>
                </A.SubTitleBox>
                <A.InputWrapMT>
                    <A.InputBox>
                        <A.Input type={passWordType} name='password' value={password} placeholder='영문/숫자/특수문자 중 2가지 이상 조합, 6~12자' onChange={inputHandler} />
                        {passWordType === 'password' ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                    </A.InputBox>
                    <A.InputBox>
                        <A.Input type={passWordType} name='passwordCheck' value={passwordCheck} placeholder='새 비밀번호 확인' onChange={inputHandler} />
                        {passWordType === 'password' ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                        <A.AlertBox about='error'>{passwordError}</A.AlertBox>
                    </A.InputBox>
                </A.InputWrapMT>
                <A.RedButton onClick={submit}>
                    <A.RedButtonSpan>
                        확인
                    </A.RedButtonSpan>
                </A.RedButton>
            </A.ContentWrap>
        </>
    );
};

export default Index;