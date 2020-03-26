import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoryActionItem, ExternalLink, StoryActionItemLabel } from '../styles';

import { FaBookmark } from 'react-icons/fa';
import { storyActions } from 'store/story/actions';

class BookmarkStoryComponent extends Component {
  constructor() {
    super();
    this.addStoryBookmarkItem = this.addStoryBookmarkItem.bind(this);
    this.removeStoryBookmarkItem = this.removeStoryBookmarkItem.bind(this);
  }

  addStoryBookmarkItem(evt) {
    evt.preventDefault();
    const { story, addBookmarkStory } = this.props;
    addBookmarkStory(story);
  }

  removeStoryBookmarkItem(evt) {
    evt.preventDefault();
    const { story, removeBookmarkStory } = this.props;
    removeBookmarkStory(story);
  }

  render() {
    const { isFavouriteStory } = this.props;
    return (
      <StoryActionItem>
        {!isFavouriteStory ? (
          <ExternalLink href='#' onClick={this.addStoryBookmarkItem}>
            <StoryActionItemLabel>Save story</StoryActionItemLabel>
            <FaBookmark color='white'></FaBookmark>
          </ExternalLink>
        ) : (
          <ExternalLink href='#' onClick={this.removeStoryBookmarkItem}>
            <StoryActionItemLabel>Unsave story</StoryActionItemLabel>
            <FaBookmark color='#ef4056'></FaBookmark>
          </ExternalLink>
        )}
      </StoryActionItem>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const storyReducer = state.story;
  const { story } = ownProps;
  const isFavouriteLoaded = storyReducer.favStories !== null;
  const isFavouriteStory = story.id in (storyReducer.favStories || {});

  return {
    isFavouriteStory: isFavouriteStory,
    isFavouriteLoaded: isFavouriteLoaded,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBookmarkStory: story => dispatch(storyActions.addBookmarkStory({ story })),
    removeBookmarkStory: story => dispatch(storyActions.removeBookmarkStory({ story })),
  };
};

export const BookmarkStoryAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkStoryComponent);
