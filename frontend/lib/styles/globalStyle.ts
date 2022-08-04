import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box; margin:0; padding: 0;
  }
  *{margin:0; padding: 0;}
  input{
    caret-color: #f96726; background-color: #ffffff
  }
  select{
    color: #ababab;
    appearance: none;
    background: url(/images/dropdown_arrow.svg) right no-repeat;
    background-origin: content-box;
  }
  input:focus, select:focus {
    outline-color: #f96726;
  }
  input::placeholder{
    color: #ababab; 
    font-family: NotoSans; 
    font-size: 13px; 
    font-weight: normal; 
    font-stretch: normal; 
    font-style: normal; 
    line-height: 1.38; 
    letter-spacing: -0.33px; 
    text-align: left;
  }
  button{
    
  }

`

export default GlobalStyle