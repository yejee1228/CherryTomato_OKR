import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MainState {
    user: {
        email: string,
        name: string,
        password: string,
        phone: string,
        groupString: string,
    },
    signupState: boolean
}

const initialState: MainState = {
    user: {
        email: '',
        name: '',
        password: '',
        phone: '',
        groupString: '',
    },
    signupState: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<MainState['user']>) => {
            state.user = action.payload
        },
        setSignupState: (state, action: PayloadAction<MainState['signupState']>) => {
            state.signupState = action.payload
        }
    }
})

export const {
    setUser,
    setSignupState,
} = userSlice.actions

export default userSlice.reducer;