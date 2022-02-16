import * as types from '../actions';

const initialState = {
    isTest : true
}
const app = (state = initialState, action) => {
    switch(action.type){
        case types.APP_ACTION_TEST:
            return{
                ...state,
                isTest: action.data
            }
        default :
            return state;
    }
};

export default app;