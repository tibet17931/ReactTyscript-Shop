import layoutReducer from "./layout.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  layoutReducer: layoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
