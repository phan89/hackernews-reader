import { actionTypes, LOCAL_STORAGE_PREFERENCE_THEME } from './actions';

import { themes } from 'styles/palette';

const getInitialState = () => {
  // maybe the one currently store in the local storage?
  const lastSavedTheme = localStorage.getItem(LOCAL_STORAGE_PREFERENCE_THEME);

  if (lastSavedTheme) {
    return { theme: themes[lastSavedTheme], mainMenuVisible: false };
  } else {
    return { theme: themes.dark, mainMenuVisible: false };
  }
};

const app = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_MAIN_SETTINGS: {
      const { visible } = payload;
      return {
        ...state,
        mainMenuVisible: visible,
      };
    }
    case actionTypes.SET_THEME:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default app;
