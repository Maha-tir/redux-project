import * as types from "./actionTypes";
import axios from "axios";

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (token) => ({
  type: types.LOGIN_SUCCESS,
  payload: token,
});
const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    axios
      .post("http://159.223.94.86:3000/auth/login", { email, password })
      .then((res) => {
        console.log("response : ", res);
        dispatch(loginSuccess());
        // localStorage.setItem(
        //   "login",
        //   JSON.stringify({ userLogin: true, token: res.data.jwt_token })
        // );
      })
      .catch((error) => dispatch(loginFail(error)));
  };
};
