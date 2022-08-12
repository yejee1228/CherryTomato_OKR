import React from 'react';
import * as M from 'lib/styles/mainStyles'
import { IoIosArrowDown } from 'react-icons/io';
import { HiPlus } from 'react-icons/hi';

const MainWrap = () => {
    return (
        <>
            <M.MainHeader>
                <M.LeftBox>
                    <img src="" alt="" />
                    <h1>토마토컴퍼니</h1>
                    <div>
                        <span>대표자: 정선모</span>
                        <span>|</span>
                        <span>멤버수: 228명</span>
                    </div>
                </M.LeftBox>
                <M.RightBox>
                    <M.QuarterBox>
                        <div>
                            <h4>2022-2분기</h4>
                            <span>04.01~06.30</span>
                        </div>
                        <IoIosArrowDown />
                    </M.QuarterBox>
                    <M.CreateButton><HiPlus /></M.CreateButton>
                </M.RightBox>
            </M.MainHeader>
        </>
    );
};

export default MainWrap;