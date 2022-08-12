import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'lib/types'

export interface UserState {
    user: User,
    signupState: boolean
}

const initialState: UserState = {
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
        setUser: (state, action: PayloadAction<UserState['user']>) => {
            state.user = action.payload
        },
        setSignupState: (state, action: PayloadAction<UserState['signupState']>) => {
            state.signupState = action.payload
        }
    }
})

export const {
    setUser,
    setSignupState,
} = userSlice.actions

export default userSlice.reducer;