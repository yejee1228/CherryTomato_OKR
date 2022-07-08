import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';

const header = ({ contents }) => {
  return (
    <div className="title-box">
      <span className="before">
        <BsChevronLeft />
      </span>
      <span className="title">
        {'비밀번호 찾기'}
        {contents === 'findId' && '아이디 찾기'}
        {contents === 'findPassword' && '비밀번호 찾기'}
      </span>
    </div>
  );
};

export default header;
