const NS = '@hsReader/auth';

export const actionTypes = {
  UPDATE_AUTH_STATE: `${NS}/UPDATE_AUTH_STATE`,
  CLOSE_LOGIN_MODAL: `${NS}/CLOSE_LOGIN_MODAL`,
  OPEN_LOGIN_MODAL: `${NS}/OPEN_LOGIN_MODAL`,
};

const defaultAction = (type, payload) => ({ type, payload });

export const authActions = {
  updateAuthState: (payload = {}) => {
    return dispatch => {
      dispatch(defaultAction(actionTypes.UPDATE_AUTH_STATE, payload));
    };
  },

  closeLoginModal: (payload = {}) => {
    return dispatch => {
      dispatch(defaultAction(actionTypes.CLOSE_LOGIN_MODAL, payload));
    };
  },

  openLoginModal: (payload = {}) => {
    return dispatch => {
      dispatch(defaultAction(actionTypes.OPEN_LOGIN_MODAL, payload));
    };
  },
};
