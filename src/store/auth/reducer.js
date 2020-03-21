import { actionTypes } from './actions';

const initialState = () => ({
  loginModalOpen: false,
});

const auth = (state = initialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_AUTH_STATE: {
      const { user } = payload;
      return {
        ...state,
        user: user,
      };
    }

    case actionTypes.CLOSE_LOGIN_MODAL: {
      return {
        ...state,
        loginModalOpen: false,
      };
    }

    case actionTypes.OPEN_LOGIN_MODAL: {
      return {
        ...state,
        loginModalOpen: true,
      };
    }

    default:
      return state;
  }
};

export default auth;
