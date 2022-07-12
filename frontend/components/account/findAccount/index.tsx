import styled from 'styled-components'

export const ContentWrap = styled.div`
width:320px; 
text-align: center; 
position:absolute;  
left: 50%; 
transform: translateX(-50%);
`
//findId
export const SubtitleBox = styled.div`
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
export const SubTitleCommentRed = styled.span`
font-family: NotoSans;
font-size: 12px;
line-height: 1.5;
letter-spacing: -0.3px;
text-align: left;
color: #f00;
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
export const EyeIcon = styled.div`
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
export const AuthNumberInput = styled.input`
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
export const AlertBox = styled.div`
text-align: left;
width:320px;
padding: 0 4px;
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
export const AlertText = styled.p<{ AlertType: string }>`
font-family: NotoSans;
font-size: 12px;
color: ${({ AlertType }) => AlertType === 'error' ? '#ff0000' : '#2a78ff'};
`
export const SubTitleBox = styled.div`
`
export const ReturnComment = styled.p`
font-size: 15px;
font-weight: bold;
line-height: 1.33;
letter-spacing: -0.38px;
text-align: center;
color: #240c0c;
`
export const ReturnBox = styled.div`
width: 320px;
height: 48px;
margin: 40px 0 24px;
padding: 14px 0;
border-radius: 6px;
background-color: #efefef;
`
export const ReturnText = styled.span`
font-family: NotoSans;
font-size: 15px;
letter-spacing: -0.38px;
color: #222;
`
export const LinkBox = styled.div`
height: 17px;
margin: 4px;
font-family: NotoSans;
font-size: 12px;
letter-spacing: -0.3px;
color: #222;
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
`
