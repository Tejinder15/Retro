const authReducer = (state,action) => {
    switch(action.type){
        case "SIGNUP":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGIN":
            return {
                ...state,
                user:action.payload.user,
                token:action.payload.token
            };
        case "LOGOUT":
            return {
                ...state,
                user: '',
                token: ''
            };
        case "CHECKUSER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state;
    }
}

export {authReducer}; 