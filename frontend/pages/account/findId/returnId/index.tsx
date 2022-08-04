import { Header } from 'components/account'
import { AiOutlineRight } from 'react-icons/ai';
import * as A from 'lib/styles/accountStyle'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    return (
        <>
            <Header contents={'findId'} />
            <A.ContentWrap>
                <A.ReturnComment>회원님의 정보와 일치하는 아이디 입니다.</A.ReturnComment>
                <A.ReturnBox>
                    <A.ReturnText>a00298***</A.ReturnText>
                </A.ReturnBox>
                <A.RedButton>
                    <A.RedButtonSpan>로그인</A.RedButtonSpan>
                </A.RedButton>
                <A.LinkBox>
                    <div onClick={() => router.push('/account/findPassword')}>
                        <a>
                            <A.LinkSpan>비밀번호 찾기 &nbsp;<AiOutlineRight /></A.LinkSpan>
                        </a>
                    </div>
                </A.LinkBox>
            </A.ContentWrap>
        </>
    );
};

export default Index;