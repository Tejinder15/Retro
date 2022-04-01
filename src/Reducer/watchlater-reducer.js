const WatchLaterReducer = (state,action) => {
    switch(action.type){
        case "GET_WATCHLATER":
            return {...state,watchlater:action.payload};
        case "ADD_TO_WATCHLATER":
            return {...state,watchlater:action.payload};
        case "REMOVE_FROM_WATCHLATER":
            return {...state,watchlater:action.payload};
        case "EMPTY_WATCHLATER":
            return {...state,watchlater:[]};
        default:
            return state;
    }
}

export  {WatchLaterReducer};