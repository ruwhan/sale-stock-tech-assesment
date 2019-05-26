import { routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  compose,
  createStore
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(preloadedState.history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(preloadedState.history), thunk, logger)
    )
  );

  return store;
}

export default configureStore;
