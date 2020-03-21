import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Wrapper } from './style.js';
import NavBar from 'components/Navigation';
import StoryPagesCollection from 'components/Stories/StoryPagesCollection';
import { ModalProvider } from 'styled-react-modal';

import Loader from '../Loader/index.js';

class App extends Component {
  render() {
    const { theme, firebaseReducer } = this.props;
    const firebaseAuth = firebaseReducer.auth;
    const isAuthLoaded = firebaseAuth.isLoaded;
    return (
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Wrapper>
            <NavBar firebaseAuth={firebaseAuth} />
            <StoryPagesCollection />
          </Wrapper>
          {isAuthLoaded && <Loader />}
        </ModalProvider>
      </ThemeProvider>
    );
  }

  componentDidMount() {
    this.setBodyBackgroundColor();
  }

  componentDidUpdate() {
    this.setBodyBackgroundColor();
  }

  setBodyBackgroundColor() {
    document.body.style = `background-color: ${this.props.theme.background.primary};`;
  }
}

const mapStateToProps = state => {
  return {
    theme: state.app.theme,
    firebaseReducer: state.firebase,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
