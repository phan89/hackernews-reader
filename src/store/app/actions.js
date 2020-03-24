const NS = '@hsReader/app';

export const LOCAL_STORAGE_PREFERENCE_THEME = 'preferences.theme';

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`,
  SHOW_MAIN_SETTINGS: `${NS}/SHOW_MAIN_SETTINGS`,
  SET_ACTIVE_STORY_SETTINGS: `${NS}/SET_ACTIVE_STORY_SETTINGS`,
  SET_PENDING_ACTIONS: `${NS}/SET_PENDING_ACTIONS`,
};

export const appActions = {
  setTheme: (payload = {}) => {
    const { theme } = payload;
    localStorage.setItem(LOCAL_STORAGE_PREFERENCE_THEME, theme.name);
    return { type: actionTypes.SET_THEME, payload };
  },

  setSettingsMenuVisibility: (payload = {}) => {
    return { type: actionTypes.SHOW_MAIN_SETTINGS, payload };
  },

  setActiveStorySettings: (payload = {}) => {
    return { type: actionTypes.SET_ACTIVE_STORY_SETTINGS, payload };
  },

  setPendingActions: (payload = {}) => {
    return { type: actionTypes.SET_PENDING_ACTIONS, payload };
  },
};

export default appActions;
