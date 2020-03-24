import { createSelector } from 'reselect';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const isAuthLoadedSelector = state => {
  return isLoaded(state.firebase.auth);
};

const hasAuthSelector = state => {
  return !isEmpty(state.firebase.auth);
};

export const authenticatedSelector = createSelector(
  isAuthLoadedSelector,
  hasAuthSelector,
  (isAutLoaded, hasAuth) => {
    return isAutLoaded && hasAuth;
  }
);

export const authLoadedSelector = createSelector(isAuthLoadedSelector, isAutLoaded => {
  return isAutLoaded;
});
