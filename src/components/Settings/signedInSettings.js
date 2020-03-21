import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownMenuItem, Action, ActionLabel } from './styles';

import { GoSignOut, GoPerson } from 'react-icons/go';
import { CommonSettings } from './commonSettings';
import firebase from 'config/firebase';

class SignedInSettingsComponent extends Component {
  constructor() {
    super();
    this.signUserOut = this.signUserOut.bind(this);
  }

  signUserOut(evt) {
    firebase.auth().signOut();
  }

  render() {
    const { firebaseAuth } = this.props;
    return (
      <React.Fragment>
        <DropdownMenuItem>
          <Action>
            <React.Fragment>
              <GoPerson />
              <ActionLabel>{firebaseAuth.displayName}</ActionLabel>
            </React.Fragment>
          </Action>
        </DropdownMenuItem>
        <CommonSettings />
        <DropdownMenuItem>
          <Action onClick={this.signUserOut}>
            <React.Fragment>
              <GoSignOut />
              <ActionLabel>Sign-out</ActionLabel>
            </React.Fragment>
          </Action>
        </DropdownMenuItem>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    firebaseAuth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export const SignedInSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInSettingsComponent);
