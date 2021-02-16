const initialState = {
  users: ["name"],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { users: [...state.users, action.payload] };
    default:
      return state;
  }
};
