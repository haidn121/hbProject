import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
  notify: {
    isOpen: false,
    message: "",
    type: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_LOGIN:
      return {
        ...state,
        loading: action.payload,
      };
    case types.END_LOGIN:
      return {
        ...state,
        loading: action.payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        error: action.payload.message,
      };
    case types.LOGIN_FAIL:
      console.log({action})
      return {
        ...state,
        data: {},
        error: action.payload,
        notify: {
          isOpen: true,
          message: action.payload,
          type: "error",
        },
      };
    default:
      return state;
  }
};
export default authReducer;
