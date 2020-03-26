import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isMobileOrTablet } from 'utils/Utils';

import {
  StoryActionsContainer,
  StoryActionButton,
  StoryActionsPanel,
  StoryActionItemLabel,
  StoryActionItem,
} from './styles';
import { authenticatedSelector } from 'store/auth/selectors';

import { FaTimes } from 'react-icons/fa';
import { GoKebabHorizontal } from 'react-icons/go';
import { SendToPocketAction } from './Actions/sharerPocket';
import { BookmarkStoryAction } from './Actions/bookmarkStory';
import hackernewsAPI from 'services/hackernewsAPI';
import { appActions } from 'store/app/actions';

class StoryItemActions extends Component {
  constructor() {
    super();
    this.toggleStoryActions = this.toggleStoryActions.bind(this);
    this.showStoryActions = this.showStoryActions.bind(this);
    this.hideStoryActions = this.hideStoryActions.bind(this);
  }

  toggleStoryActions() {
    const { setActiveStorySettings, currentActiveStorySetting, story } = this.props;
    const activeSettings =
      currentActiveStorySetting && currentActiveStorySetting === story.id;
    if (!activeSettings) {
      setActiveStorySettings(story.id);
    } else {
      setActiveStorySettings(null);
    }
  }

  showStoryActions() {
    const { setActiveStorySettings, story } = this.props;
    setActiveStorySettings(story.id);
  }

  hideStoryActions() {
    const { setActiveStorySettings } = this.props;
    setActiveStorySettings(null);
  }

  render() {
    const { story, isAuthenticated, currentActiveStorySetting } = this.props;
    const isMobile = isMobileOrTablet();
    const externalURL = story.url || hackernewsAPI.getStoryCommentURL(story.id);

    const activeSettings =
      currentActiveStorySetting && currentActiveStorySetting === story.id;
    return (
      <StoryActionsContainer>
        <StoryActionButton>
          <GoKebabHorizontal
            onClick={isMobile ? this.toggleStoryActions : null}
            onMouseEnter={!isMobile ? this.showStoryActions : null}
          ></GoKebabHorizontal>
        </StoryActionButton>
        {activeSettings && (
          <StoryActionsPanel onMouseLeave={!isMobile ? this.hideStoryActions : null}>
            <StoryActionItem onClick={this.hideStoryActions}>
              <StoryActionItemLabel>Close</StoryActionItemLabel>
              <FaTimes />
            </StoryActionItem>
            {externalURL && <SendToPocketAction url={externalURL} title={story.title} />}
            {isAuthenticated && <BookmarkStoryAction story={story} />}
          </StoryActionsPanel>
        )}
      </StoryActionsContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: authenticatedSelector(state),
    currentActiveStorySetting: state.app.currentActiveStorySetting,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setActiveStorySettings: storyID =>
      dispatch(appActions.setActiveStorySettings({ currentActiveStorySetting: storyID })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryItemActions);
