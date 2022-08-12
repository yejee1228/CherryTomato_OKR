import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CompanyState {
    company: {
        companyCode: string,
        companyName: string,
        companyAuthCode: string,
    },
    group: {
        groupName: string,
        groupCode: string,
        childGroup: object[]
    }
}

const initialState: CompanyState = {
    company: {
        companyCode: '',
        companyName: '',
        companyAuthCode: '',
    },
    group: {
        groupName: '',
        groupCode: '',
        childGroup: []
    }
}

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        setGroup: (state, action: PayloadAction<CompanyState['group']>) => {
            state.group = action.payload
        },
    }
})

export const {
    setGroup,
} = companySlice.actions

export default companySlice.reducer;