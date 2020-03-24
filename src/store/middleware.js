import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { compose, applyMiddleware } from 'redux';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebase, { rrfConfig } from 'config/firebase';

const isProd = process.env.NODE_ENV === 'production';
const middlewares = [];

middlewares.push(thunk.withExtraArgument({ getFirebase, getFirestore }));

if (!isProd) {
  middlewares.push(createLogger());
}

const middleware = compose(
  applyMiddleware(...middlewares),
  reduxFirestore(firebase, rrfConfig)
);

export default middleware;
