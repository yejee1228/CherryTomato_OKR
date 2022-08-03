import { Header } from 'components/account';
import * as A from 'styles/accountStyle';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    return (
        <>
            <Header contents={'findPassword'} />
            <A.ContentWrap>
                <A.SubTitleBoxCenter>
                    <A.SubTitle>
                        <A.SubTitleComment>
                            비밀번호 변경이 완료되었습니다.
                        </A.SubTitleComment>
                    </A.SubTitle>
                </A.SubTitleBoxCenter>
                <A.RedButton onClick={() => router.push('/account/login')}>
                    <A.RedButtonSpan>
                        로그인
                    </A.RedButtonSpan>
                </A.RedButton>
            </A.ContentWrap>
        </>
    );
};

export default Index;