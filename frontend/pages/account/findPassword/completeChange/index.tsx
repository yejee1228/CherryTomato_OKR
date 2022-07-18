import { useRouter } from 'next/router';
import React from 'react';
import { Header } from 'components'
import { ContentWrap, RedButton, RedButtonSpan, SubTitle, SubTitleBox, SubTitleComment } from 'components/account/findAccount'

const index = () => {
    const router = useRouter();
    return (
        <>
            <Header contents={'findPassword'} />
            <ContentWrap>
                <SubTitleBox style={{ marginBottom: '24px' }}>
                    <SubTitle>
                        <SubTitleComment>
                            비밀번호 변경이 완료되었습니다.
                        </SubTitleComment>
                    </SubTitle>
                </SubTitleBox>
                <RedButton onClick={() => router.push('/account/login')}>
                    <RedButtonSpan>
                        로그인
                    </RedButtonSpan>
                </RedButton>
            </ContentWrap>
        </>
    );
};

export default index;