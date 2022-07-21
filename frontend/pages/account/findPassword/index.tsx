import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Header } from 'components';
import * as F from 'components/account/findAccount';
import * as A from 'components/account'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [authError, setAuthError] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEmail(value);
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    const authCheck = async () => {
        setError('')
        setAuthError(false)
        if (email == '') {
            setError('이메일 주소를 입력해주세요.')
            return;
        } else if (email.indexOf('@') <= -1) {
            setError('@를 포함한 이메일 주소를 입력해주세요.')
            return;
        }

        axios.get(`http://localhost:8080/account/existid/` + email)
            .then((data) => {
                if (!data.data) {
                    setAuthError(true)
                    return;
                } else {
                    router.push('/account/findPassword/changePassword')
                    return;
                }
            })
            .catch(() => {
                return;
            })
    }
    return (
        <>
            <Header contents='findPassword' />
            <F.ContentWrap>
                <A.SubTitleBox>
                    <F.ReturnComment>가입하신 이메일을 입력 후<br />
                        하단의 본인인증 버튼을 누르시면<br />
                        비밀번호를 재설정할 수 있습니다.
                    </F.ReturnComment>
                </A.SubTitleBox>
                <A.InputWrap style={{ margin: '40px 0 24px' }}>
                    <A.Input type='email' name='email' placeholder='이메일 주소' value={email} ref={inputRef} onChange={handleInput} />
                    {error !== '' && <A.AlertText style={{ marginTop: '1px', textAlign: 'left' }} AlertType='error'>{error}</A.AlertText>}
                </A.InputWrap>
                <A.RedButton onClick={authCheck}>
                    <A.RedButtonSpan>본인인증</A.RedButtonSpan>
                </A.RedButton>
                <div onClick={() => router.push('/account/findId')}>
                    <a>
                        <A.LinkBox>
                            <A.GreenSpan>가입하신 이메일</A.GreenSpan>을 잊으셨나요? <AiOutlineRight />
                        </A.LinkBox>
                    </a>
                </div>
            </F.ContentWrap>
            {
                authError &&
                <>
                    <F.LayerBackground></F.LayerBackground>
                    <F.LayerPopup>
                        <F.LayerContent>회원정보가 일치하지 않습니다.</F.LayerContent>
                        <F.LayerButton onClick={() => { setAuthError(false); setEmail('') }}><F.LayerButtonSpan>확인</F.LayerButtonSpan></F.LayerButton>
                    </F.LayerPopup>
                </>
            }
        </>
    );
};

export default Index;