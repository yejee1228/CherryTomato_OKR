import React from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { Before, Title, TitleBox } from './header'

const header = ({ contents }) => {
    return (
        <TitleBox>
            <Before><BsChevronLeft /></Before>
            <Title>
                {contents === 'findId' && '아이디 찾기'}
                {contents === 'findPassword' && '비밀번호 찾기'}
            </Title>
        </TitleBox>
    );
};

export default header;