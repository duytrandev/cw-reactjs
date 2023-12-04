import { userSaga } from "../pages/User/userSaga";
import { authSaga } from "../pages/auth/authSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([authSaga(), userSaga()])
}