import { useState, useRef, useEffect } from 'react';
import * as A from 'components/account'
import * as S from 'components/account/signup'
import { Header } from 'components';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    const doAuth = () => {
        setAuthYn(true)
        console.log('click')
        setError(true)
        setCompanyErrorMsg('')
        setMessage('')
        if (companyName === '') {
            setCompanyErrorMsg('회사명을 입력해주세요.')
        } else if (companyCode === '') {
            setMessage('인증번호를 입력해주세요.')
        } else if (companyCode !== 'abcd') {
            setMessage('인증번호가 틀렸습니다. 인증번호를 다시 입력해주세요.')
        } else {
            setError(false)
            /* axios.get('http://localhost:8080')
                .then(res => {
                    res.data
                }) */
            setMessage('인증이 완료되었습니다.')
        }
    }
    return (
        <>
            <Header contents={'signup_common'}></Header>
            <S.SignupWrap>
                <S.SignSubWrap>
                    <A.InputBox>
                        <A.Input name='companyName' value={companyName} placeholder='회사명을 입력해주세요.' ref={inputRef} onChange={handleInput} />
                        {authYn && <A.AlertText alertType={'error'}>{companyErrorMsg}</A.AlertText>}
                    </A.InputBox>
                    <A.InputBox>
                        <A.AuthInput name='companyCode' value={companyCode} placeholder='공유받은 회사코드를 입력해 주세요' onChange={handleInput} />
                        <A.AuthButton onClick={doAuth}>
                            <A.AuthButtonSpan authYn={authYn}>인증하기</A.AuthButtonSpan>
                        </A.AuthButton>
                        {authYn && <A.AlertText alertType={error ? 'error' : 'success'}>{message}</A.AlertText>}
                    </A.InputBox>
                </S.SignSubWrap>
                {
                    (authYn && !error)
                        ?
                        <>
                            <A.RedButton onClick={() => router.push('./')}>
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
            </S.SignupWrap>
        </>
    );
};

export default Index;