export const initialState = {
  response: {},
  screens: 0,
  file: null,
  url: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RESPONSIVE":
      return {
        ...state,
        response: action.payload,
      };
    case "ROTATE_SCREENS":
      return {
        ...state,
        screens: action.payload,
      };
    case "ADD_FILE":
      return {
        ...state,
        file: action.payload,
      };
    case "ADD_URL":
      return {
        ...state,
        url: action.payload,
      };
    default:
      throw new Error("Action not match");
  }
};
export default reducer;
