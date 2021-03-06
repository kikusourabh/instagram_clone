import { USER_AUTH_SING_IN, USER_AUTH_SING_OUT } from "../types/AuthTypes";

const initialstate = {
    token: null
}

const AuthReducer = (state = initialstate, action) => {
    switch (action.type) {
        case USER_AUTH_SING_IN:
            console.log("USER_AUTH_SING_IN");
            console.log("REDUCER-TOKEN: " + action.payload.token);
            return {
                ...state,
                token: action.payload.token,
            }
        case USER_AUTH_SING_OUT:
            console.log("USER_AUTH_SING_OUT");
            return {
                ...state,
                token: null,
            }

        default:
            console.log("default");
            return state;
    }
}

export default AuthReducer;