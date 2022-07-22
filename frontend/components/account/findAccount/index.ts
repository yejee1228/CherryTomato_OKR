import styled from 'styled-components'

export const ContentWrap = styled.div`
width:320px; 
text-align: center; 
position:absolute;  
left: 50%; 
transform: translateX(-50%);
`
export const SubTitleCommentRed = styled.span`
font-family: NotoSans;
font-size: 12px;
line-height: 1.5;
letter-spacing: -0.3px;
text-align: left;
color: #f00;
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
export const LayerBackground = styled.div`
width: 100%;
height: 100%;
position:absolute;
top:0;
left:0;
background-color: rgba(0, 0, 0, 0.7);
}
`
export const LayerPopup = styled.div`
width: 320px;
height: 120px;
position: absolute;
top: calc(50% - 60px);
left: calc(50% - 160px);
text-align: center;
background: #ffffff;
border-radius: 6px;
`
export const LayerContent = styled.p`
height: 20px;
margin: 30px auto;
font-family: NotoSans;
font-size: 15px;
font-weight: bold;
line-height: 1.33;
letter-spacing: -0.38px;
color: #240c0c;
`
export const LayerButton = styled.div`
width: 320px;
height: 40px;
padding: 11px 146px;
background-color: #f92626;
border-radius: 0 0 6px 6px;
`
export const LayerButtonSpan = styled.span`
font-family: NotoSans;
font-size: 14px;
line-height: 1.36;
letter-spacing: -0.35px;
color: #fff;
`