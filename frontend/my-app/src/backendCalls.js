import axios from 'axios'

export const loginCall = async (userAccess, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post("http://localhost:4000/session/login", userAccess)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch(err) {
        dispatch({type: "LOGIN_FAILURE", payload: err})
    }
}