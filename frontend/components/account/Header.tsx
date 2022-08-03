import { BsChevronLeft } from "react-icons/bs";
import { Before, Title, TitleBox } from 'styles/accountStyle'

const Header = ({ contents }) => {
    return (
        <TitleBox>
            <Before><BsChevronLeft /></Before>
            <Title>
                {contents === 'signup' && '회원가입'}
                {contents === 'signup_admin' && '슈퍼관리자 회원가입'}
                {contents === 'signup_common' && '일반 회원가입'}
                {contents === 'findId' && '아이디 찾기'}
                {contents === 'findPassword' && '비밀번호 찾기'}
            </Title>
        </TitleBox>
    );
};

export default Header;