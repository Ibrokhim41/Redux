import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function create_post(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch("https://course-api.com/react-tours-project");
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
    dispatch(hideLoader());
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
