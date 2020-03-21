import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { compose, applyMiddleware } from 'redux';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

const isProd = process.env.NODE_ENV === 'production';
const middlewares = [];

middlewares.push(thunk.withExtraArgument(getFirebase, getFirestore));

if (!isProd) {
  middlewares.push(createLogger());
}

const middleware = compose(applyMiddleware(...middlewares));

export default middleware;
