/* eslint-disable @typescript-eslint/no-explicit-any */
import { debounce, fork, put } from "redux-saga/effects";
import { SearchOptions, userActions } from "./userSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleSearchUser(action: PayloadAction<SearchOptions>) {
  try {
    yield put(userActions.setSearchOptions(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* debounceAutocomplete() {
  yield debounce(1500, "DEBOUNCE_INPUTSEARCH", handleSearchUser);
}

export function* userSaga() {
  yield fork(debounceAutocomplete);
}
