import { $CombinedState, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user, { UserState } from './user.module';
import company, { CompanyState } from './company.module'

const reducer = combineReducers({
    user,
    company,
});

const persistConfig = {
    key: "root",
    storage,
}

export type RootState = { readonly [$CombinedState]?: undefined; }
    & { user: UserState; }
    & { company: CompanyState; }

export default persistReducer(persistConfig, reducer);