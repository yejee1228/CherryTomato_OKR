const SET_USER = 'user/SET_USER' as const
const SET_SIGNUPSTATE = 'user/SET_SIGNUPSTATE' as const

export type MainAction =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setSignupState>

export interface MainState {
    user: {
        email: string,
        memberName: string,
        password: string,
        phone: string,
        group: string
    },
    signupState: boolean
}

export const setUser = (user: MainState['user']) => ({ type: SET_USER, payload: user })
export const setSignupState = (signupState: MainState['signupState']) => ({ type: SET_SIGNUPSTATE, payload: signupState })


const initialState: MainState = {
    user: {
        email: '',
        memberName: '',
        password: '',
        phone: '',
        group: ''
    },
    signupState: false
}

const reducer = (state: MainState = initialState, action: MainAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user: action.payload
            }
        case SET_SIGNUPSTATE:
            return {
                ...state, signupState: action.payload
            }


        default: return state
    }
}

export default reducer;