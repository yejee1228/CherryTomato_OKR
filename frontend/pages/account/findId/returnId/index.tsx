import { Header } from 'components'
import { AiOutlineRight } from 'react-icons/ai';
import * as F from 'components/account/findAccount';
import * as A from 'components/account'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    return (
        <>
            <Header contents={'findId'} />
            <F.ContentWrap>
                <F.ReturnComment>회원님의 정보와 일치하는 아이디 입니다.</F.ReturnComment>
                <F.ReturnBox>
                    <F.ReturnText>a00298***</F.ReturnText>
                </F.ReturnBox>
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
            </F.ContentWrap>
        </>
    );
};

export default Index;