const SET_USER = 'user/SET_USER' as const

export type MainAction =
    | ReturnType<typeof setUser>

export interface MainState {
    user: {
        email: string,
        memberName: string,
        password: string,
        phone: string
    },
}

export const setUser = (user: MainState['user']) => ({ type: SET_USER, payload: user })


const initialState: MainState = {
    user: {
        email: '',
        memberName: '',
        password: '',
        phone: '',
    },
}

const reducer = (state: MainState = initialState, action: MainAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, user: action.payload
            }


        default: return state
    }
}

export default reducer;