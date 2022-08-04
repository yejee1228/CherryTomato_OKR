import { useState, useRef, useEffect } from 'react';
import * as A from 'lib/styles/accountStyle';
import { Header } from 'components/account';
import { setSignupState } from 'lib/store/modules/user.module';
import { useDispatch } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState(false)
    const [inputs, setInputs] = useState({
        companyName: '',
        companyCode: ''
    })
    const { companyName, companyCode } = inputs
    const [authYn, setAuthYn] = useState(false);
    const [error, setError] = useState(false);
    const [companyErrorMsg, setCompanyErrorMsg] = useState('');
    const [message, setMessage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
        dispatch(setSignupState(state))
    }, [dispatch, state])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const doAuth = () => {
        setAuthYn(true)
        setError(true)
        setCompanyErrorMsg('')
        setMessage('')
        if (companyName === '') {
            setCompanyErrorMsg('회사명을 입력해주세요.')
        } else if (companyCode === '') {
            setMessage('인증번호를 입력해주세요.')
        } else if (companyName !== '토마토컴퍼니') {
            setMessage('등록되지 않은 회사명입니다. 담당자에게 문의해주세요.')
        } else if (companyName !== '토마토컴퍼니' || companyCode !== 'A1B2C3D4') {
            setMessage('인증번호가 틀렸습니다. 인증번호를 다시 입력해주세요.')
        } else {
            setError(false)
            setMessage(`인증이 완료되었습니다. 회원가입을 계속 진행해주세요.`)
        }
    }
    return (
        <>
            <Header contents={'signup_common'}></Header>
            <A.SignupWrap>
                <A.SignSubWrap>
                    <A.InputBox>
                        <A.Input name='companyName' value={companyName} placeholder='회사명을 입력해주세요.(토마토컴퍼니)' ref={inputRef} onChange={handleInput} />
                        {authYn && <A.AlertText alertType={'error'}>{companyErrorMsg}</A.AlertText>}
                    </A.InputBox>
                    <A.InputBox>
                        <A.AuthInput name='companyCode' value={companyCode} placeholder='공유받은 회사코드를 입력해 주세요(A1B2C3D4)' onChange={handleInput} />
                        <A.AuthButton onClick={doAuth}>
                            <A.AuthButtonSpan authYn={authYn}>인증하기</A.AuthButtonSpan>
                        </A.AuthButton>
                        {authYn && <A.AlertText alertType={error ? 'error' : 'success'}>{message}</A.AlertText>}
                    </A.InputBox>
                </A.SignSubWrap>
                {
                    (authYn && !error)
                        ?
                        <>
                            <A.RedButton onClick={() => setState(true)}>
                                <A.RedButtonSpan>다음</A.RedButtonSpan>
                            </A.RedButton>
                        </>
                        :
                        <>
                            <A.GrayButton>
                                <A.RedButtonSpan>다음</A.RedButtonSpan>
                            </A.GrayButton>
                        </>
                }
            </A.SignupWrap>
        </>
    );
};

export default Index;