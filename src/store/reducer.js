import { combineReducers } from 'redux';

import app from 'store/app/reducer';
import story from 'store/story/reducer';
import auth from 'store/auth/reducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  app,
  story,
  auth,
  firebase: firebaseReducer,
});

export default rootReducer;
