import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN } from "../../constants/type";
import authApi from "../../services/api/authApi";
import { saveToken } from "../../utils/LocalStorageHandler";
import * as actions from "../actions/auth";

function* auth(data) {
  try {
    yield put(actions.startLogin(true));
    const dataAuth = yield call(authApi.login, data.payload);
    if (dataAuth) {
      yield put(actions.loginSuccess(dataAuth));
      console.log(dataAuth);
      if (dataAuth.message) {
        yield put(actions.loginFail(dataAuth.message));
      } else {
        saveToken(dataAuth.data.access_token);
        window.location = "/";
      }
    } else {
      yield put(
        actions.loginFail({
          cod: 404,
          message: "NOT FOUND",
        })
      );
    }
    yield put(actions.endLogin(false));
  } catch (error) {
    yield put(actions.loginFail(error));
  }
}

export default function* watchAuth() {
  yield takeEvery(LOGIN, auth);
}
