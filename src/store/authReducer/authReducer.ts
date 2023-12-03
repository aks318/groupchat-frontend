const initialState: authStateType = {
  isLoader: false,
  token: "",
  isLoggedIn: false,
  userDetails: {},
  message: {
    text: "",
    status: "success",
  },
};

const authReduce = (state = initialState, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReduce;
