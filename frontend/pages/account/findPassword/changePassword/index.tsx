import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Header } from 'components'
import * as F from 'components/account/findAccount'
import * as A from 'components/account'

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
            <F.ContentWrap>
                <A.SubTitleBox style={{ textAlign: 'left' }}>
                    <F.SubTitleCommentRed>
                        인증되었습니다.<br />
                        비밀번호를 재설정하여 주시기 바랍니다.
                    </F.SubTitleCommentRed>
                </A.SubTitleBox>
                <A.InputWrap style={{ marginTop: '9px' }}>
                    <A.InputBox>
                        <A.Input type={passWordType} name='passwd' value={passwd} placeholder='영문/숫자/특수문자 중 2가지 이상 조합, 6~12자'
                        />
                        {passWordType === 'password' ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                    </A.InputBox>
                    <A.InputBox>
                        <A.Input type={passWordType} name='checkPasswd' value={checkPasswd} placeholder='새 비밀번호 확인'
                        />
                        {passWordType === 'password' ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                    </A.InputBox>
                </A.InputWrap>
                <A.RedButton>
                    <A.RedButtonSpan>
                        확인
                    </A.RedButtonSpan>
                </A.RedButton>
            </F.ContentWrap>
        </>
    );
};

export default Index;