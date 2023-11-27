/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, fork, put, take } from "redux-saga/effects";
import { LogginPayload, authActions } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../app/apis/auth.api";
import { IAuth, IUser } from "models";

function* handleLogin(payload: LogginPayload) {
  try {
    console.log(`payload ${JSON.stringify(payload)}`)
    const user: IAuth & IUser = yield call(authApi.login, payload)
    // console.log(`user ${JSON.stringify(user)}`)
    yield put(authActions.loginSuccess(user))
  } catch (error: any) {
    console.log(1)
    yield put(authActions.loginFailure(error?.response?.data?.errors))
    console.log(2)
  }
}

function* handleLogout() {

}

function* watchLoginFlow() {
  const action: PayloadAction<LogginPayload> = yield take(authActions.login.type)
  yield fork(handleLogin, action.payload)
  yield take(authActions.logout.type)
  yield fork(handleLogout)
}

export function* authSaga() {
  yield fork(watchLoginFlow)
}