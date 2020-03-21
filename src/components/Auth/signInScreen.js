import React, { Component } from 'react';
import { authLoadedSelector, authenticatedSelector } from 'store/auth/selectors';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';
import firebase from 'config/firebase';
import { authActions } from 'store/auth/actions';
import { SignInModal } from './styles';

class SignInScreen extends Component {
  constructor() {
    super();
    this.openLoginPrompt = this.openLoginPrompt.bind(this);
    this.closeLoginPrompt = this.closeLoginPrompt.bind(this);
  }

  closeLoginPrompt() {
    this.props.closeLoginModal();
  }

  openLoginPrompt() {
    this.props.openLoginModal();
  }

  render() {
    const { loginModalOpen } = this.props;

    // // Configure FirebaseUI.
    const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google as auth providers.
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => {
          this.closeLoginPrompt();
          return false;
        },
      },
    };

    return (
      <SignInModal
        isOpen={loginModalOpen}
        onBackgroundClick={this.closeLoginPrompt}
        onEscapeKeydown={this.closeLoginPrompt}
        allowScroll={true}
      >
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </SignInModal>
    );
  }

  componentDidMount() {
    const { onAuthChanged } = this.props;
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(onAuthChanged);
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
}

const mapStateToProps = state => {
  return {
    theme: state.app.theme,
    isAuthenticated: authenticatedSelector(state),
    isAuthLoaded: authLoadedSelector(state),
    firebaseReducer: state.firebase,
    loginModalOpen: state.auth.loginModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthChanged: user => dispatch(authActions.updateAuthState({ user })),
    openLoginModal: () => dispatch(authActions.openLoginModal({})),
    closeLoginModal: () => dispatch(authActions.closeLoginModal({})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
