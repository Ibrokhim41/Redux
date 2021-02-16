import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbidden = ["spam", "php"];

export function spamWords({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((w) => action.payload.title.include(w));
        if (found.length) {
          return dispatch(showAlert("You are spammer"));
        }
      }
      return next(action);
    };
  };
}
