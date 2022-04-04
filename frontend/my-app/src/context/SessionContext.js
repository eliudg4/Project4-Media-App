import { createContext, useReducer } from "react";
import SessionReducer from "./SessionReducer";

const INITIAL_STATE = {
    user: {
        _id: "624a2b84b57d3a958f0caaa5",
        admin: false,
        email: "test2@gmail.com",
        username: "test2",
        password: "$2b$10$.IpgmU2YlgjPEJVCEgyzg.AedqY7LBqfIo1a2KmR609ZfH5C7bUJS",
        profilePic: "",
        friends: [],
        __v: 0
    },
    fetching: false,
    error: false
}

export const SessionContext = createContext(INITIAL_STATE)
export const SessionContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SessionReducer, INITIAL_STATE)

    return (
        <SessionContext.Provider value={{user: state.user, fetching: state.fetching, error: state.error, dispatch
        }}>

            {children}
        </SessionContext.Provider>
    )
}