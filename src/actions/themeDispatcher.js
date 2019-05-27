import { THEMES_CHANGE } from "../constants";

export const themeChange = (selectedTheme) => ({
  type: THEMES_CHANGE,
  payload: { selectedTheme }
});
