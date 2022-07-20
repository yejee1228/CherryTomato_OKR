import { Header } from 'components';
import { } from 'components/account/findAccount';
import * as S from 'components/account/signup';
import * as A from 'components/account';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';

const Index = () => {
    const user = useSelector((state: RootState) => state.user.user)
    return (
        <>
            <Header contents={'signup_admin'} />
            <S.SignupWrap>
                <A.SubTitleBox>
                    <A.SubTitle>
                        <A.SubTitleComment>
                            입력한 정보를 확인해 주세요.
                        </A.SubTitleComment>
                    </A.SubTitle>
                </A.SubTitleBox>
                <S.CompleteGrid>
                    <S.CompleteGridTh>이메일주소</S.CompleteGridTh>
                    <S.CompleteGridTd>{user.email}</S.CompleteGridTd>
                    <S.CompleteGridTh>이름</S.CompleteGridTh>
                    <S.CompleteGridTd>{user.memberName}</S.CompleteGridTd>
                    <S.CompleteGridTh>휴대폰번호</S.CompleteGridTh>
                    <S.CompleteGridTd>{user.phone}</S.CompleteGridTd>
                </S.CompleteGrid>
                <S.ReturnWrap>
                    <A.SubTitleBox>
                        <A.SubTitle>
                            <A.SubTitleComment>
                                회사코드를 복사하여 사원들과 공유해 주세요.
                            </A.SubTitleComment>
                        </A.SubTitle>
                    </A.SubTitleBox>
                    <S.ReturnBox>
                        <S.ReturnText>
                            토마토컴퍼니 코드
                        </S.ReturnText>
                        <S.ReturnText>
                            AbCdEfG1234
                        </S.ReturnText>
                    </S.ReturnBox>
                </S.ReturnWrap>
                <A.RedButton>
                    <A.RedButtonSpan>회원가입 완료</A.RedButtonSpan>
                </A.RedButton>
            </S.SignupWrap>
        </>
    );
};

export default Index;