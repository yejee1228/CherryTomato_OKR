import { $CombinedState, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user, { MainState } from './user.module';

const reducer = combineReducers({
    user,
});

const persistConfig = {
    key: "root",
    storage,
}

export type RootState = {
    readonly [$CombinedState]?: undefined;
} & {
    user: MainState;
}

export default persistReducer(persistConfig, reducer);