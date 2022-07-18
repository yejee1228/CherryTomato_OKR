import styled from 'styled-components';

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
export const CancelIcon = styled.div`
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
export const AlertText = styled.p<{ AlertType: string }>`
font-family: NotoSans;
font-size: 12px;
color: ${({ AlertType }) => AlertType === 'error' ? '#ff0000' : '#2a78ff'};
`