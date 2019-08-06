import { actionTypes } from  './index'
import {  fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    mockList: [],
    page: 1,
    totalPage: 1
});

export const reducerName = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set("focused", true);
        case actionTypes.SEARCH_BLUR:
            return state.set("focused", false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                mockList: action.data,
                totalPage: action.totalPage
            });
        case actionTypes.HANDEL_MOUSE:
            return state.set("mouseIn", true);
        case actionTypes.HANDLE_LEAVE:
            return state.set("mouseIn", false);
        case actionTypes.CHANGE_PAGE:
            return state.set("page", action.page);
        default:
            return state
    }
}

export default reducerName
