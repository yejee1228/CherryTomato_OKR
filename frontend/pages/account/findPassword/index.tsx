import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { Header } from 'components';
import { ContentWrap, RedButton, GreenSpan, LinkBox, ReturnComment, SubTitleBox, RedButtonSpan, LayerBackground, LayerPopup, LayerContent, LayerButton, LayerButtonSpan }
    from 'components/account/findAccount';
import { Input, InputWrap, AlertText } from 'components/common'

const index = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [authError, setAuthError] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInput = (e) => {
        const { value } = e.target;
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
            <Header contents="findPassword" />
            <ContentWrap>
                <SubTitleBox>
                    <ReturnComment>가입하신 이메일을 입력 후<br />
                        하단의 본인인증 버튼을 누르시면<br />
                        비밀번호를 재설정할 수 있습니다.
                    </ReturnComment>
                </SubTitleBox>
                <InputWrap style={{ margin: '40px 0 24px' }}>
                    <Input type="email" name="email" placeholder='이메일 주소' value={email} ref={inputRef} onChange={handleInput} />
                    {error !== '' && <AlertText style={{ marginTop: '1px', textAlign: 'left' }} AlertType='error'>{error}</AlertText>}
                </InputWrap>
                <RedButton onClick={authCheck}>
                    <RedButtonSpan>본인인증</RedButtonSpan>
                </RedButton>
                <Link href="/account/findId">
                    <a>
                        <LinkBox>
                            <GreenSpan>가입하신 이메일</GreenSpan>을 잊으셨나요? <AiOutlineRight />
                        </LinkBox>
                    </a>
                </Link>
            </ContentWrap>
            {
                authError &&
                <>
                    <LayerBackground></LayerBackground>
                    <LayerPopup>
                        <LayerContent>회원정보가 일치하지 않습니다.</LayerContent>
                        <LayerButton onClick={() => { setAuthError(false); setEmail('') }}><LayerButtonSpan>확인</LayerButtonSpan></LayerButton>
                    </LayerPopup>
                </>
            }
        </>
    );
};

export default index;