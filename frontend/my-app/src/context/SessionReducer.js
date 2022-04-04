const SessionReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return { 
                user: null,
                fetching: true,
                error: false
            } 
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                fetching: false,
                error: false
            }  
        case "LOGIN_FAILURE":
            return {
                user: null,
                fetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default SessionReducer