import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Header } from 'components'
import { ContentWrap, RedButton, RedButtonSpan, SubTitleBox, SubTitleCommentRed } from 'components/account/findAccount'
import { EyeIcon, Input, InputBox, InputWrap, } from 'components/common'

const index = () => {
    const [passWordType, setPassWordType] = useState('password')
    const [passwd, setPasswd] = useState('')
    const [checkPasswd, setCheckPasswd] = useState('')

    const changePwType = () => {
        passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')

    }

    return (
        <>
            <Header contents={'findPassword'} />
            <ContentWrap>
                <SubTitleBox style={{ textAlign: 'left' }}>
                    <SubTitleCommentRed>
                        인증되었습니다.<br />
                        비밀번호를 재설정하여 주시기 바랍니다.
                    </SubTitleCommentRed>
                </SubTitleBox>
                <InputWrap style={{ marginTop: '9px' }}>
                    <InputBox>
                        <Input type={passWordType} name="passwd" value={passwd} placeholder="영문/숫자/특수문자 중 2가지 이상 조합, 6~12자"
                        />
                        {passWordType === "password" ? <EyeIcon onClick={changePwType}><AiFillEyeInvisible /></EyeIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                    </InputBox>
                    <InputBox>
                        <Input type={passWordType} name="checkPasswd" value={checkPasswd} placeholder="새 비밀번호 확인"
                        />
                        {passWordType === "password" ? <EyeIcon onClick={changePwType}><AiFillEyeInvisible /></EyeIcon> : <div onClick={changePwType}><AiFillEye /></div>}
                    </InputBox>
                </InputWrap>
                <RedButton>
                    <RedButtonSpan>
                        확인
                    </RedButtonSpan>
                </RedButton>
            </ContentWrap>
        </>
    );
};

export default index;