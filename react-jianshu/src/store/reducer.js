const defaultState = {
    focused: false
};

export const reducerName = (state = defaultState, action) => {
    // switch (action.type) {
    //     case 'ACTION_TYPE':
    //         return 
    //     default:
    //         return state
    // }
    if(action.type === "SEARCH_FOCUS" ) {
        return {
            focused: true
        }
    }
    if(action.type === "SEARCH_BLUR" ) {
        return {
            focused: false
        }
    }
    return state
}

export default reducerName
