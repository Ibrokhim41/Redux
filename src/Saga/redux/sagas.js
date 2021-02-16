import { takeEvery } from "redux-saga/effects";
import { REQUEST_USERS } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_USERS, sagaWorker);
}

function* sagaWorker() {}
