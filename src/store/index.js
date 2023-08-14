import { combineReducers } from "redux";
import toggleAsideReducer from "./toggleAsideReducer";


const rootReducer = combineReducers({
  toggle: toggleAsideReducer,
});

export default rootReducer;
