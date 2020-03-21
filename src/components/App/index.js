import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Wrapper } from './style.js';
import NavBar from 'components/Navigation';
import StoryPagesCollection from 'components/Stories/StoryPagesCollection';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';

import firebase from 'config/firebase';
import Loader from '../Loader/index.js';

class App extends Component {
  render() {
    const { theme, firebaseReducer } = this.props;
    const firebaseAuth = firebaseReducer.auth;
    const isAuthLoaded = firebaseAuth.isLoaded;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <Wrapper>
              <NavBar firebaseAuth={firebaseAuth} />
              <Switch>
                <Route exact path='/' component={StoryPagesCollection} />
              </Switch>
            </Wrapper>
            {isAuthLoaded && <Loader />}
          </ModalProvider>
        </ThemeProvider>
      </BrowserRouter>
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
