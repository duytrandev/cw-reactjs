import { fork, take } from "redux-saga/effects";
import { LogginPayload, authActions } from "./authSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(payload: LogginPayload) {
  console.log('loggin', payload)
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