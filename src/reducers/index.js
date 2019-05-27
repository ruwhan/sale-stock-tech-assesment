import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import itemsReducer from "./items";
import themesReducer from "./themes";

export default (history) => combineReducers({
  router: connectRouter(history),
  itemsReducer,
  themesReducer,
});
