import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownMenuItem, Action, ActionLabel } from './styles';

import { GoSignOut, GoPerson, GoBookmark, GoSync } from 'react-icons/go';
import { CommonSettings } from './commonSettings';
import firebase from 'config/firebase';
import { storyActions } from 'store/story/actions';
import { appActions } from 'store/app/actions';

class SignedInSettingsComponent extends Component {
  constructor() {
    super();
    this.signUserOut = this.signUserOut.bind(this);
    this.fetchBookmarkStories = this.fetchBookmarkStories.bind(this);
    this.fetchTopStories = this.fetchTopStories.bind(this);
    this.toggleSettingsMenu = this.toggleSettingsMenu.bind(this);

    this.state = {
      savedStoriesLoaded: false,
    };
  }

  toggleSettingsMenu() {
    const { mainMenuVisible } = this.props;
    this.props.setSettingsMenuVisibility(!mainMenuVisible);
  }

  signUserOut(evt) {
    firebase.auth().signOut();
  }

  fetchBookmarkStories(evt) {
    const { loadBookmarkStories, reloadStories } = this.props;
    reloadStories(true);
    loadBookmarkStories();
    this.setState({
      savedStoriesLoaded: true,
    });
    this.toggleSettingsMenu();
  }

  fetchTopStories(evt) {
    const { fetchStoryPages, reloadStories } = this.props;
    reloadStories(false);
    fetchStoryPages();

    this.setState({
      savedStoriesLoaded: false,
    });

    this.toggleSettingsMenu();
  }

  render() {
    const { firebaseAuth, isFetching } = this.props;
    const { savedStoriesLoaded } = this.state;
    return (
      <React.Fragment>
        <DropdownMenuItem>
          <Action>
            <React.Fragment>
              <ActionLabel>{firebaseAuth.displayName}</ActionLabel>
              <GoPerson />
            </React.Fragment>
          </Action>
        </DropdownMenuItem>
        {!savedStoriesLoaded ? (
          <DropdownMenuItem disabled={isFetching} onClick={this.fetchBookmarkStories}>
            <Action>
              <React.Fragment>
                <ActionLabel>Saved stories</ActionLabel>
                <GoBookmark />
              </React.Fragment>
            </Action>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem disabled={isFetching} onClick={this.fetchTopStories}>
            <Action>
              <React.Fragment>
                <ActionLabel>Top stories</ActionLabel>
                <GoSync />
              </React.Fragment>
            </Action>
          </DropdownMenuItem>
        )}
        <CommonSettings />
        <DropdownMenuItem>
          <Action onClick={this.signUserOut}>
            <React.Fragment>
              <ActionLabel>Sign-out</ActionLabel>
              <GoSignOut />
            </React.Fragment>
          </Action>
        </DropdownMenuItem>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const storyReducer = state.story;
  return {
    firebaseAuth: state.firebase.auth,
    isFetching: storyReducer.isFetching,
    mainMenuVisible: state.app.mainMenuVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadBookmarkStories: () => dispatch(storyActions.loadBookmarkStories({})),
    fetchStoryPages: () =>
      dispatch(storyActions.fetchStoryPages({ fetchFirstPage: true })),
    reloadStories: keepBookmark =>
      dispatch(storyActions.reloadStories({ keepBookmark: keepBookmark })),
    setSettingsMenuVisibility: visible =>
      dispatch(appActions.setSettingsMenuVisibility({ visible: visible })),
  };
};

export const SignedInSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInSettingsComponent);
