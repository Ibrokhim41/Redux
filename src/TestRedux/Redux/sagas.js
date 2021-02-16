import { call, put, takeEvery } from "redux-saga/effects";
import { changeLoading } from "./actions";
import { FETCH_POST, REQUEST_POSTS, SHOWHIDE_LOADER } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(changeLoading(true));
    const payload = yield call(fetchImgs);
    yield put({ type: FETCH_POST, payload });
    yield put(changeLoading(false));
  } catch (e) {
    yield put(changeLoading(false));
    yield put(alert(true));
  }
}

async function fetchImgs() {
  const res = await fetch(
    "https://api.unsplash.com/photos/?client_id=ChprKPwDRGdBEnLyf6YR8n0tAe1PsUnFfAd2oAQ19xE"
  );
  return await res.json();
  // try {
  //     dispatch(changeLoading(true));
  //     dispatch(alert(false));
  //     const res = await fetch(
  //       "https://api.unsplash.com/photos/?client_id=ChprKPwDRGdBEnLyf6YR8n0tAe1PsUnFfAd2oAQ19xE"
  //     );
  //     const json = await res.json();
  //     dispatch(changeLoading(false));
  //     dispatch({
  //       type: FETCH_POST,
  //       payload: json,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(changeLoading(false));
  //     return dispatch(alert(true));
  //   }
}
