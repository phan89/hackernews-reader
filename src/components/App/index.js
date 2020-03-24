import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Wrapper, LoaderWrapper, LoaderSize } from './style.js';
import NavBar from 'components/Navigation';
import StoryPagesCollection from 'components/Stories/StoryPagesCollection';
import { ModalProvider } from 'styled-react-modal';

import { authenticatedSelector } from 'store/auth/selectors';
import { storyActions } from 'store/story/actions';
import { DoubleBounceLoader } from 'components/Loader';

class App extends Component {
  render() {
    const { theme, firebaseReducer, pendingActions } = this.props;
    const firebaseAuth = firebaseReducer.auth;
    const isAuthLoaded = firebaseAuth.isLoaded;
    const isLoading = !isAuthLoaded || pendingActions;
    return (
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Wrapper>
            <NavBar firebaseAuth={firebaseAuth} />

            {isLoading && (
              <LoaderWrapper>
                <DoubleBounceLoader color={theme.text.primary} size={LoaderSize} />
              </LoaderWrapper>
            )}

            <StoryPagesCollection />
          </Wrapper>
        </ModalProvider>
      </ThemeProvider>
    );
  }

  componentDidMount() {
    this.setBodyBackgroundColor();
  }

  componentDidUpdate() {
    this.setBodyBackgroundColor();

    const { isAuthenticated, fetchStoriesBookmark, fetchingBookmark } = this.props;

    // authenticated, fetch the favourite stories
    if (isAuthenticated && fetchingBookmark === null) {
      fetchStoriesBookmark();
    }
  }

  setBodyBackgroundColor() {
    document.body.style = `background-color: ${this.props.theme.background.primary};`;
  }
}

const mapStateToProps = state => {
  return {
    theme: state.app.theme,
    firebaseReducer: state.firebase,
    pendingActions: state.app.pendingActions,
    isAuthenticated: authenticatedSelector(state),
    fetchingBookmark: state.story.fetchingBookmark,
    neverFetchedBookmark: state.story.favStories !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoriesBookmark: () => dispatch(storyActions.fetchStoriesBookmark({})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
