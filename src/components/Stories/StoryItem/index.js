import React, { Component } from 'react';
import { connect } from 'react-redux';

import timeago from 'epoch-timeago';
import { appActions } from 'store/app/actions';

import {
  ExternalLink,
  Title,
  StoryListItem,
  SimpleLink,
  BoxScore,
  Host,
  CommentLink,
  Description,
  HotBox,
  ContentBox,
  ChatBox,
} from './styles';
import StoryItemActions from './storyActions';
import { getHostFromURL } from 'utils/Utils';
import hackernewsAPI from 'services/hackernewsAPI';

class StoryItem extends Component {
  constructor() {
    super();
    this.hideActiveStorySettings = this.hideActiveStorySettings.bind(this);
  }

  hideActiveStorySettings(evt) {
    const { setActiveStorySettings } = this.props;
    setActiveStorySettings(null);
  }

  render() {
    const { story, bogusLoader } = this.props;
    const postedTime = story.time * 1000;
    const domainHost = getHostFromURL(story.url);
    const commentURL = hackernewsAPI.getStoryCommentURL(story.id);
    const externalURL = story.url || commentURL;

    return (
      <StoryListItem
        bogusLoader={bogusLoader}
        onMouseLeave={this.hideActiveStorySettings}
      >
        <ExternalLink
          href={commentURL}
          href={commentURL}
          rel='nofollow noreferrer noopener'
          target='_blank'
        >
          <HotBox>
            <BoxScore>{story.score}</BoxScore>
            <ChatBox>
              <CommentLink> {story.descendants}</CommentLink>
            </ChatBox>
          </HotBox>
        </ExternalLink>
        <ContentBox>
          <ExternalLink
            href={externalURL}
            rel='nofollow noreferrer noopener'
            target='_blank'
          >
            <Title>{story.title}</Title>
          </ExternalLink>
          <Description>
            <SimpleLink
              href={hackernewsAPI.getUserDetailLink(story.by)}
              rel='nofollow noreferrer noopener'
              target='_blank'
            >
              {story.by} {' | '}
            </SimpleLink>
            <time dateTime={new Date(postedTime).toISOString()}>
              {timeago(postedTime)}
            </time>
            {domainHost && (
              <Host>
                {' | '} {domainHost}
              </Host>
            )}
          </Description>
          <StoryItemActions story={story} />
        </ContentBox>
      </StoryListItem>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    setActiveStorySettings: storyID =>
      dispatch(appActions.setActiveStorySettings({ currentActiveStorySetting: storyID })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryItem);
