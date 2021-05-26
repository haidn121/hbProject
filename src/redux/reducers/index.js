import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listRequestReducer from "./listRequestReducer";

const rootReducer = combineReducers({
  listRequest: listRequestReducer,
  authReducer: authReducer,
});
export default rootReducer;
