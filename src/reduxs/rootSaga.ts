import { authSaga } from "../pages/auth/authSage";
import { all } from "redux-saga/effects";

// eslint-disable-next-line require-yield
export default function* rootSaga() {
    yield all([authSaga()])
}