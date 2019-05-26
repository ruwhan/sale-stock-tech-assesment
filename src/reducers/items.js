import {
  ITEMS_LOADING,
  ITEMS_LOAD_FAIL,
  ITEMS_LOAD_SUCCESS
} from "../constants";
import { createReducer } from "./utils";

const initialState = {
  isLoading: false,
  entities: {
    byId: {},
    ids: [],
  }
}

const itemsLoading = (state, action) => {
  return Object.assign({}, state, {
    isLoading: true,
  });
}

const itemsLoadSuccess = (state, action) => {
  const { byId, ids } = state.entities;
  const { items } = action.payload;

  items.forEach((item) => {
    byId[item.id] = item;
    ids.push(item.id);
  });

  return Object.assign({}, state, {
    isLoading: false,
    entities: {
      byId,
      ids
    }
  });
}

const itemsLoadFail = (state, action) => {
  return Object.assign({}, state, {
    isLoading: false,
  });
}

export default createReducer(initialState, {
  [ITEMS_LOADING]: itemsLoading,
  [ITEMS_LOAD_SUCCESS]: itemsLoadSuccess,
  [ITEMS_LOAD_FAIL]: itemsLoadFail
})
