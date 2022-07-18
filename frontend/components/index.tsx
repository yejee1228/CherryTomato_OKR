import React from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { Before, Title, TitleBox } from './header'

export const Header = ({ contents }) => {
    return (
        <TitleBox>
            <Before><BsChevronLeft /></Before>
            <Title>
                {contents === 'signup_admin' && '관리자 회원가입'}
                {contents === 'findId' && '아이디 찾기'}
                {contents === 'findPassword' && '비밀번호 찾기'}
            </Title>
        </TitleBox>
    );
};
