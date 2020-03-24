import { actionTypes, LOCAL_STORAGE_PREFERENCE_THEME } from './actions';

import { themes } from 'styles/palette';

const getInitialState = () => {
  // maybe the one currently store in the local storage?
  const lastSavedTheme = localStorage.getItem(LOCAL_STORAGE_PREFERENCE_THEME);
  const currentTheme = lastSavedTheme ? themes[lastSavedTheme] : themes.dark;

  return {
    theme: currentTheme,
    mainMenuVisible: false,
    currentActiveStorySetting: null,
    pendingActions: false,
  };
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
    case actionTypes.SET_ACTIVE_STORY_SETTINGS: {
      return { ...state, ...payload };
    }
    case actionTypes.SET_PENDING_ACTIONS: {
      return { ...state, ...payload };
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
