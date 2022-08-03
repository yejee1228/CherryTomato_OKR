import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Header } from 'components/account';
import * as A from 'styles/accountStyle';

const Index = () => {
    const [passWordType, setPassWordType] = useState('password')
    const [passwd, setPasswd] = useState('')
    const [checkPasswd, setCheckPasswd] = useState('')

    const changePwType = () => {
        passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')

    }

    return (
        <>
            <Header contents={'findPassword'} />
            <A.ContentWrap>
                <A.SubTitleBox>
                    <A.SubTitleCommentRed>
                        인증되었습니다.<br />
                        비밀번호를 재설정하여 주시기 바랍니다.
                    </A.SubTitleCommentRed>
                </A.SubTitleBox>
                <A.InputWrapMT>
                    <A.InputBox>
                        <A.Input type={passWordType} name='passwd' value={passwd} placeholder='영문/숫자/특수문자 중 2가지 이상 조합, 6~12자' />
                        {passWordType === 'password' ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                    </A.InputBox>
                    <A.InputBox>
                        <A.Input type={passWordType} name='checkPasswd' value={checkPasswd} placeholder='새 비밀번호 확인' />
                        {passWordType === 'password' ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                    </A.InputBox>
                </A.InputWrapMT>
                <A.RedButton>
                    <A.RedButtonSpan>
                        확인
                    </A.RedButtonSpan>
                </A.RedButton>
            </A.ContentWrap>
        </>
    );
};

export default Index;