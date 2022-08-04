import * as A from 'lib/styles/accountStyle';
import { Header } from 'components/account';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()

    return (
        <>
            <Header contents={'signup'} />
            <A.CommonSignupWrap>
                <A.WhiteButton onClick={() => router.push('./signup/admin')}>
                    <A.WhiteButtonSpan>슈퍼 관리자 회원가입</A.WhiteButtonSpan>
                </A.WhiteButton>
                <A.RedButton onClick={() => router.push('./signup/common')}>
                    <A.RedButtonSpan>일반 회원가입</A.RedButtonSpan>
                </A.RedButton>
            </A.CommonSignupWrap>
        </>
    );
};

export default Index;