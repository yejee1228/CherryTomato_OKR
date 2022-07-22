import styled from 'styled-components';

export const SubTitleBox = styled.div`
text-align: left;
`
export const SubTitleBoxPw = styled(SubTitleBox)`
margin-bottom: 24px;
text-align: center;
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
export const InputWrapMT = styled(InputWrap)`
margin-top: 9px
`
export const InputWrapMB = styled(InputWrap)`
margin-bottom: 29px;
`
export const InputBox = styled.div`
position: relative;
margin: 0 0 8px;
`
export const Input = styled.input`
width: 100%;
height: 48px;
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
export const AuthInput = styled.input`
width: 224px;
height: 34.5px;
margin-right: 15px;
border: none;
border-bottom: solid 1px #ababab;
border-radius: 0;
padding: 10.5px 4.5px 4.5px;
font-size: 13px;
font-weight: bold;
color:#222;
`
export const AuthTime = styled.span`
position:absolute;
top:124px;
right:97px;
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
color: #f92626;
`
export const AuthButton = styled.button`
width: 76px;
height: 34px;
padding: 9px 13px 8px 12px;
border-radius: 6px;
border:none;
background-color: #ffe2e2;
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
color: #787878;
`
export const AuthButtonSpan = styled.span<{ authYn: boolean }>`
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
text-align: left;
color: ${({ authYn }) => authYn ? '#9e9e9e' : '#787878'};
`
export const TransButton = styled.button`
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
export const AlertText = styled.p<{ alertType: string }>`
font-family: NotoSans;
font-size: 12px;
color: ${({ alertType }) => alertType === 'error' ? '#ff0000' : '#2a78ff'};
text-align: left;
margin:4px 4px 0;
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
export const GrayButton = styled(RedButton)`
background-color: #eee;
`