import { USER_AUTH_SING_IN, USER_AUTH_SING_OUT } from "../types/AuthTypes";

export const userAuthSignIn = (token) => ({
    type: USER_AUTH_SING_IN,
    payload: {
        toaken: token
    }
});
export const userAuthSignOut = () => ({
    type: USER_AUTH_SING_OUT,
});