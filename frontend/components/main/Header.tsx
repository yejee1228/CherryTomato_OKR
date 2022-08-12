import React from 'react';
import * as M from 'lib/styles/mainStyles';
import { useSelector } from 'react-redux';
import { RootState } from 'lib/store/modules';

const Header = () => {
    const name = useSelector((state: RootState) => state.user.user.name)
    return (
        <M.HeaderWrap>
            <M.LogoBox>
                <M.LogoImage src='' />
            </M.LogoBox>
            <M.Profile>
                <img src="" alt="" />
                <span>{name}</span>
            </M.Profile>
        </M.HeaderWrap>
    );
};

export default Header;