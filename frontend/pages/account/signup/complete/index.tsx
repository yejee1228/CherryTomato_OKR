import { Header } from 'components/account';
import * as A from 'lib/styles/accountStyle';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store/modules';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSignupState, setUser } from 'lib/store/modules/user.module';

const Index = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.user)
    if (!user) {
        router.push('./common')
    }
    const complete = () => {
        //데이터를 서버에 보낸 후 then()
        router.push('/')
        dispatch(setUser({
            email: '',
            memberName: '',
            password: '',
            phone: '',
            group: ''
        }))
        dispatch(setSignupState(false))
    }
    return (
        <>
            <Header contents={'signup_admin'} />
            <A.SignupWrap>
                <A.SubTitleBoxCenter>
                    <A.SubTitle>
                        <A.SubTitleComment>
                            입력한 정보를 확인해 주세요.
                        </A.SubTitleComment>
                    </A.SubTitle>
                </A.SubTitleBoxCenter>
                <A.CompleteGrid>
                    <A.CompleteGridTh>이메일주소</A.CompleteGridTh>
                    <A.CompleteGridTd>{user.email}</A.CompleteGridTd>
                    <A.CompleteGridTh>이름</A.CompleteGridTh>
                    <A.CompleteGridTd>{user.memberName}</A.CompleteGridTd>
                    <A.CompleteGridTh>휴대폰번호</A.CompleteGridTh>
                    <A.CompleteGridTd>{user.phone}</A.CompleteGridTd>
                    {user.group !== null &&
                        <>
                            <A.CompleteGridTh>소속</A.CompleteGridTh>
                            <A.CompleteGridTd>{user.group}</A.CompleteGridTd>
                        </>
                    }
                </A.CompleteGrid>

                <A.WhiteButton onClick={() => router.back()}>
                    <A.WhiteButtonSpan>수정</A.WhiteButtonSpan>
                </A.WhiteButton>
                <A.RedButton onClick={complete}>
                    <A.RedButtonSpan>회원가입 완료</A.RedButtonSpan>
                </A.RedButton>
            </A.SignupWrap>
        </>
    );
};

export default Index;