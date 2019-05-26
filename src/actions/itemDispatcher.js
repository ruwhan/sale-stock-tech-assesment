import { ITEMS_LOADING, ITEMS_LOAD_FAIL, ITEMS_LOAD_SUCCESS } from "../constants";
import Items from "../services/items";

export const itemLoading = () => ({
  type: ITEMS_LOADING
});

export const itemLoadSuccess = (items) => ({
  type: ITEMS_LOAD_SUCCESS,
  payload: { items }
});

export const itemLoadFail = () => ({
  type: ITEMS_LOAD_FAIL
});

export const loadItems = () => {
  return async (dispatch, getState) => {
    const { itemsReducer } = getState();
    let res = {};

    if (itemsReducer.isLoading) {
      return;
    }

    dispatch(itemLoading());

    try {
      res = await Items.get();
      dispatch(itemLoadSuccess(res));
    }
    catch (ex) {
      dispatch(itemLoadFail());
      console.error(ex);
    }
  }
}
