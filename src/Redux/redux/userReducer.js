import { CREATE_POST } from "./types";
import axios from "axios";

const initialState = {
  users: [],
  fetchedUsers: [],
};

const userReducer = (state = initialState, action) => {
  // const url = "https://course-api.com/react-tours-project";
  // axios.get(url).then((res) => console.log(res));
  switch (action.type) {
    case CREATE_POST:
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export default userReducer;
