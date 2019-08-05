import { actionTypes } from  './index'
import {  fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mockList: [ ]
});

export const reducerName = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set("focused", true);
        case actionTypes.SEARCH_BLUR:
            return state.set("focused", false);
        case actionTypes.CHANGE_LIST:
            return state.set('mockList' , action.data);
        default:
            return state
    }
}

export default reducerName
