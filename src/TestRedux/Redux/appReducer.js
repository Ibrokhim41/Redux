import { SHOWHIDE_LOADER, SHOW_ALERT } from "./types";

const initialState = {
  loading: false,
  alert: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWHIDE_LOADER:
      return { ...state, loading: action.payload };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
};
