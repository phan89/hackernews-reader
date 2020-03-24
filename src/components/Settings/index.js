import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  DropdownMenuOuterWrapper,
  DropdownMenuInnerWrapper,
  DropdownMenu,
} from './styles';
import { SignedInSettings } from './signedInSettings';
import { SignedOutSettings } from './signedOutSettings';

import SignInScreen from 'components/Auth/signInScreen';
import { appActions } from 'store/app/actions';
import { Loader } from 'components/Loader';

class MainSettingsMenuComponent extends Component {
  constructor() {
    super();
    this.showSettingsMenu = this.showSettingsMenu.bind(this);
    this.hideSettingsMenu = this.hideSettingsMenu.bind(this);
  }

  hideSettingsMenu() {
    this.props.setSettingsMenuVisibility(false);
  }

  showSettingsMenu() {
    this.props.setSettingsMenuVisibility(true);
  }

  render() {
    const { firebaseAuth, mainMenuVisible } = this.props;
    const { isLoaded, isEmpty } = firebaseAuth;
    const isSignedIn = isLoaded && !isEmpty;
    const isSignedOut = isLoaded && isEmpty;

    return (
      <React.Fragment>
        <DropdownMenuOuterWrapper mainMenuVisible={mainMenuVisible}>
          <DropdownMenuInnerWrapper
            onMouseEnter={this.showSettingsMenu}
            onMouseLeave={this.hideSettingsMenu}
          >
            {isLoaded ? (
              <DropdownMenu>
                {isSignedIn && <SignedInSettings />}
                {isSignedOut && <SignedOutSettings />}
              </DropdownMenu>
            ) : (
              <Loader />
            )}
          </DropdownMenuInnerWrapper>
        </DropdownMenuOuterWrapper>

        <SignInScreen />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.app.theme,
    mainMenuVisible: state.app.mainMenuVisible,
    firebaseAuth: state.firebase.auth,
    firebaseProfile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTheme: theme => dispatch(appActions.setTheme({ theme })),
    setSettingsMenuVisibility: visible =>
      dispatch(appActions.setSettingsMenuVisibility({ visible: visible })),
  };
};

export const MainSettingsMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSettingsMenuComponent);
