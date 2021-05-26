import * as types from "../../constants/type";

export const login = (data) => ({
    type: types.LOGIN,
    payload: data,
});

export const startLogin = (loading) => ({
    type: types.START_LOGIN,
    payload: loading,
});
export const endLogin = (loading) => ({
    type: types.END_LOGIN,
    payload: loading,
});
export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    payload: data,
});
export const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});