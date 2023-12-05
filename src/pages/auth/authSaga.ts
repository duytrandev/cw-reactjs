/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, fork, put, take } from "redux-saga/effects";
import { LogginPayload, authActions } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../app/apis/auth.api";
import { IAuth, IUser } from "../../models";

function* handleLogin(payload: LogginPayload) {
  try {
    const {accessToken, expiresIn, refreshToken, ...user}: IAuth & IUser = yield call(authApi.login, payload)
    yield put(authActions.loginSuccess(user))
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('auth', JSON.stringify({accessToken, expiresIn, refreshToken}))
  } catch (error: any) {
    yield put(authActions.loginFailure(error?.response?.data?.errors))
  }
}


function* watchLoginFlow() {
  while(true){
    const action: PayloadAction<LogginPayload> = yield take(authActions.login)
    yield call(handleLogin, action.payload)
  }
  // yield take(authActions.logout.type)
  // yield fork(handleLogout)
}

export function* authSaga() {
  yield fork(watchLoginFlow)
}