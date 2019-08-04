import { actionTypes } from  './index'
import {  fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mockList: [ ]
});

export const reducerName = (state = defaultState, action) => {
    // switch (action.type) {
    //     case 'ACTION_TYPE':
    //         return 
    //     default:
    //         return state
    // }
    if(action.type === actionTypes.SEARCH_FOCUS ) {
        return state.set("focused", true)
    }
    if(action.type === actionTypes.SEARCH_BLUR ) {
        return state.set("focused", false)
    }
    if(action.type === actionTypes.CHANGE_LIST) {
        return state.set('mockList' , action.data);
    }
    return state
}

export default reducerName
