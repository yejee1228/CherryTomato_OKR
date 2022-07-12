import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineRight } from "react-icons/ai";
import Header from '../../../components'
import { ContentWrap, RedButton, GreenSpan, Input, InputWrap, LinkBox, ReturnComment, SubTitleBox, RedButtonSpan }
    from '../../../components/account/findAccount'

const FindPassword = () => {
    const router = useRouter();

    const authCheck = () => {
        router.push('/account/findPassword/changePassword')
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
                <InputWrap>
                    <Input type="email" placeholder='이메일 주소' />
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
        </>
    );
};

export default FindPassword;