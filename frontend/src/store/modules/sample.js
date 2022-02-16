//액션생성
const TOMATO = 'color/TOMATO'//Action Name 구분을 위해 파일명을 붙여준다.
const YELLOW = 'color/YELLOW'
const LIME = 'color/LIME'

//Action 내보내기

export const tomato = () => ({type:TOMATO}) //함수 ()로 내보낸다.
export const yellow = () => ({type:YELLOW})
export const lime = () => ({type:LIME})

//dispatch({type: 액션명}) -> dispatch( 액션을 내보내는 함수() )
//dispatch({type: AAA , 값}) -> dispatch( aaa(값) )

//초기값 셋팅
const initialState = { color : 'pink' } //정해진 변수명은 아니나 범용적으로 사용

//reducer 파일 생성
const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOMATO : return {
            color: 'tomato'
        }
        case YELLOW : return {
            color: 'yellow'
        }
        case LIME : return {
            color: 'lime'
        }
        default: return state
    }
}
export default reducer;