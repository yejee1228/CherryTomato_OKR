import styled from 'styled-components'

export const SignupWrap = styled.div`
width: 320px;
height: 100%;
position: absolute;
left: 50%;
transform: translateX(-50%);
text-align:center;
`
export const SignSubWrap = styled.div`
width: 100%;
margin: 0 0 29px;
`
export const CompleteGrid = styled.div`
margin: 40px 0 71.5px;
display: grid;
grid-template-columns: 91px 229px;
grid-template-rows: 46px 46px 46px;
border-top: 2px solid #f92626;
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
text-align: left;
color: #222;
`
export const CompleteGridTh = styled.div`
padding: 14px 12px;
display: inline-grid;
background-color: #efefef;
border-bottom: 1px solid #ababab;
`
export const CompleteGridTd = styled.div`
padding: 14px 8px;
display: inline-grid;
font-weight: bold;
border-bottom: 1px solid #ababab;
`
export const ReturnWrap = styled.div`
margin-bottom: 37px;
`
export const ReturnBox = styled.div`
width: 320px;
height: 48px;
margin: 15px 0 0;
padding: 14px 0;
border-radius: 6px;
background-color: #efefef;
text-align: left;
`
export const ReturnText = styled.span`
padding: 10px;
font-family: NotoSans;
font-size: 15px;
font-weight: bold;
letter-spacing: -0.38px;
color: #222;
`
export const SelectBox = styled.select`
width: 100%;
height: 48px;
padding: 15px 10px;
border-radius: 6px;
border: solid 1px #ababab;
option{

}
`
export const InfoIcon = styled.div`
width: 16px;
height: 16px;
position: absolute;
right: 165px;
top: 15px;
background: url('/images/info.png')
`
export const InfoLayer = styled.div`
height: 32px;
padding:8px;
position: absolute;
top: 42px;
left: 46px;
border-radius: 6px;
background-color: #ebebeb;
font-size: 12px;
color: #222;
:after{
    content:"";
    border-top:0px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 9px solid #ebebeb;
    position: absolute;
    top: -8px;
    left: 93px;
}
`