import styled from 'styled-components';

export const SubTitleBox = styled.div`
`
export const SubTitle = styled.p`
margin-bottom:4px;
font-family: NotoSans;
font-size: 18px;
font-weight: bold;
line-height: 1.33;
letter-spacing: -0.45px;
color: #222;
`
export const SubTitleComment = styled.span`
font-family: NotoSans;
font-size: 15px;
font-weight: bold;
line-height: 1.33;
letter-spacing: -0.38px;
color: #222;
`
export const InputWrap = styled.div`
margin: 40px 0 24.5px; 
position: relative;
`
export const InputBox = styled.div`
position: relative;
`
export const Input = styled.input`
width: 100%;
height: 48px;
margin: 0 0 8px;
padding: 15px 12px;
border-radius: 6px;
border: solid 1px #ababab;
`
export const InputIcon = styled.div`
width: 18px;
height: 18px;
position: absolute;
color: #cccccc;
right: 12px;
top: 15px;
`
export const TransAuthButton = styled.button`
position: absolute;
width: 100px;
height: 36px;
top:63px;
right:7px;
border-radius: 6px;
border:none;
background-color: #ffe2e2;
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
color: #787878;
`
export const AlertBox = styled.div`
text-align: left;
width:320px;
padding: 0 4px;
`
export const AlertText = styled.p<{ AlertType: string }>`
font-family: NotoSans;
font-size: 12px;
color: ${({ AlertType }) => AlertType === 'error' ? '#ff0000' : '#2a78ff'};
`
export const LinkBox = styled.div`
height: 17px;
margin: 4px;
font-family: NotoSans;
font-size: 12px;
letter-spacing: -0.3px;
color: #707070;
`
export const GreenSpan = styled.span`
color:#39a114;
`
export const LinkSpan = styled.span`
font-family: NotoSans;
font-size: 12px;
line-height: 1.42;
letter-spacing: -0.3px;
text-align: left;
color: #707070;
vertical-align: middle;
`
export const RedButton = styled.div`
width: 320px;
height: 48px;
margin-bottom: 18px;
padding: 14px 0;
border-radius: 25px;
background-color: #f92626;
text-align: center;
`
export const RedButtonSpan = styled.span`
color: #ffffff;
font-size: 16px;
`