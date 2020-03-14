const NS = "@hsReader/app"

export const LOCAL_STORAGE_PREFERENCE_THEME = "preferences.theme"

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`,
}

const actions = {
  setTheme: (payload = {}) => {
    const {theme} = payload
    localStorage.setItem(LOCAL_STORAGE_PREFERENCE_THEME, theme.name)
    return {type: actionTypes.SET_THEME, payload}
  },
}

export default actions
