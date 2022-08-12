import styled from 'styled-components';

/* header */
export const HeaderWrap = styled.div`
width: 100%;
height: 80px;
box-shadow: 0 2px 34px 0 rgba(0, 0, 0, 0.18);
position: relative;
`
export const LogoBox = styled.div`
width: 207.6px;
height: 46px;
position: absolute;
top: 17px;
left: 20px;
`
export const LogoImage = styled.img<{ src: string }>`
src: ${({ src }) => src} 
`
export const Profile = styled.div`
width: 100px;
height: 46px;
position: absolute;
top: 17px;
right: 33px;
display: flex;
align-items: center;
    img{
        width: 46px;
        height: 46px;
    }
    span{
        font-family: NotoSans;
        font-size: 18px;
    }
`
/*mainWrap*/
export const MainWrap = styled.div`
width: 100%;
height: calc(100% - 80px);
display: flex;
`
export const MainHeader = styled.div`
width: 100%;
height: 173px;
padding: 68px 61px 31px 62px;
box-shadow: 0 2px 15px 0 rgba(94, 94, 94, 0.18);
display: flex;
justify-content: space-between;
`
export const LeftBox = styled.div`
width: auto;
height: 77px;
    img{
        width: 47px;
        height: 50px;
        margin-rignt: 4px;
    }
    h1{
        font-size: 42px;
        font-weight: bold;
        color: #222;
        display: inline-block;
        vertical-align: bottom;
    }
    div{
        margin-top:4px;
        span{
            padding-right: 16.5px;
            font-family: NotoSans;
            font-size: 12px;
            font-weight: normal;
            text-align: left;
            color: #707070;
            &:last-child{
                padding: 0
            }
        }
    }
`
export const RightBox = styled.div`
width: 306px;
height: 57px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const QuarterBox = styled.div`
width: 176px;
height: 57px;
display: flex;
justify-content: space-between;
align-items: center;
    div{
        h4{
            font-size: 24px;
            font-weight: bold;
        }
        span{
            font-size: 18px;
            font-weight: normal;
            line-height: 1.33;
            color: #ababab;
        }
    }
    svg{
        font-size: 30px;
    }
`
export const CreateButton = styled.div`
width: 50px;
height: 50px;
border-radius:50px;
background: #f96726;
font-size: 30px;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
`