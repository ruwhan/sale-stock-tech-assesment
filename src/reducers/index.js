import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import itemsReducer from "./items";

export default (history) => combineReducers({
  router: connectRouter(history),
  itemsReducer,
});
