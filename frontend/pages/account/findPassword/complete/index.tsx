import { Header } from 'components'
import * as F from 'components/account/findAccount'
import * as A from 'components/account'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    return (
        <>
            <Header contents={'findPassword'} />
            <F.ContentWrap>
                <A.SubTitleBoxPw>
                    <A.SubTitle>
                        <A.SubTitleComment>
                            비밀번호 변경이 완료되었습니다.
                        </A.SubTitleComment>
                    </A.SubTitle>
                </A.SubTitleBoxPw>
                <A.RedButton onClick={() => router.push('/account/login')}>
                    <A.RedButtonSpan>
                        로그인
                    </A.RedButtonSpan>
                </A.RedButton>
            </F.ContentWrap>
        </>
    );
};

export default Index;