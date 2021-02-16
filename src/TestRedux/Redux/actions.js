import {
  CREATE_POST,
  FETCH_POST,
  REQUEST_POSTS,
  SHOWHIDE_LOADER,
  SHOW_ALERT,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchImgs() {
  return {
    type: REQUEST_POSTS,
  };

  // return async (dispatch) => {
  //   try {
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
  // };
}

export function changeLoading(loadingStatus) {
  return {
    type: SHOWHIDE_LOADER,
    payload: loadingStatus,
  };
}

export function alert(alertStatus) {
  return {
    type: SHOW_ALERT,
    payload: alertStatus,
  };
}
