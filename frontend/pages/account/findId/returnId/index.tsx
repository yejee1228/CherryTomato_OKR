import React from 'react';
import Link from 'next/link';
import Header from '../../../../components'
import { AiOutlineRight } from "react-icons/ai";
import {
    ContentWrap, SubTitleBox, ReturnComment, ReturnBox, ReturnText,
    RedButton, LinkBox, RedButtonSpan, LinkSpan,
} from '../../../../components/account/findAccount'

const ReturnId = () => {
    return (
        <>
            <Header contents={'findId'} />
            <ContentWrap>
                <SubTitleBox>
                    <ReturnComment>회원님의 정보와 일치하는 아이디 입니다.</ReturnComment>
                </SubTitleBox>
                <ReturnBox>
                    <ReturnText>a00298***</ReturnText>
                </ReturnBox>
                <RedButton>
                    <RedButtonSpan>로그인</RedButtonSpan>
                </RedButton>
                <LinkBox>
                    <Link href="/account/findPassword">
                        <a>
                            <LinkSpan>비밀번호 찾기 &nbsp;<AiOutlineRight /></LinkSpan>
                        </a>
                    </Link>
                </LinkBox>
            </ContentWrap>
        </>
    );
};

export default ReturnId;