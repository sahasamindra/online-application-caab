import changeFormReducer from "./registrationForm";
import resetPasswordReducer from "./forgetPasswordForm";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeFormReducer,
  resetPasswordReducer,
});

export default rootReducer;
