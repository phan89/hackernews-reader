import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownMenuItem, Action, ActionLabel } from './styles';

import { GoSignIn } from 'react-icons/go';
import { CommonSettings } from './commonSettings';
import { authActions } from 'store/auth/actions';

class SignedOutSettingsComponent extends Component {
  constructor() {
    super();
    this.openLoginPrompt = this.openLoginPrompt.bind(this);
  }

  openLoginPrompt() {
    this.props.openLoginModal();
  }

  render() {
    return (
      <React.Fragment>
        <DropdownMenuItem>
          <Action onClick={this.openLoginPrompt}>
            <React.Fragment>
              <GoSignIn />
              <ActionLabel>Login with Google</ActionLabel>
            </React.Fragment>
          </Action>
        </DropdownMenuItem>
        <CommonSettings />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginModalOpen: state.auth.loginModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openLoginModal: () => dispatch(authActions.openLoginModal({})),
  };
};

export const SignedOutSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedOutSettingsComponent);
