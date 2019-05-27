import { THEMES_CHANGE } from "../constants";
import { createReducer } from "./utils";

const initialState = {
  selectedTheme: 'default'
}

const themesChange = (state, action) => {
  const { selectedTheme } = action.payload;

  return Object.assign({}, state, {
    selectedTheme,
  });
}

export default createReducer(initialState, {
  [THEMES_CHANGE]: themesChange,
})
