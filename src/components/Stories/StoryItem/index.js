import React, { Component } from 'react'
import { connect } from 'react-redux'

import timeago from 'epoch-timeago';

import { ExternalLink, Title, StoryListItem, SimpleLink, BoxScore, Host, CommentLink, Description, HotBox, ContentBox, ChatBox } from './styles'
import { getHostFromURL } from 'utils/Utils'
import hackernewsAPI from 'services/hackernewsAPI'


class StoryItem extends Component {
    render() {
        const {story, bogusLoader} = this.props;
        const postedTime = story.time*1000;
        const domainHost = getHostFromURL(story.url);
        const commentURL = hackernewsAPI.getStoryCommentURL(story.id);
        return (
            <StoryListItem  bogusLoader={bogusLoader}>
                <ExternalLink href={commentURL}>
                <HotBox>
                    <BoxScore href={commentURL} rel="nofollow noreferrer noopener" target="_blank">{story.score}</BoxScore>
                    <ChatBox>
                        <CommentLink href={commentURL} rel="nofollow noreferrer noopener" target="_blank">{' '}
                            {story.descendants}
                        </CommentLink>
                    </ChatBox>
                   
                </HotBox>
                </ExternalLink>
                <ContentBox>
                    <ExternalLink href={story.url} rel="nofollow noreferrer noopener" target="_blank">
                        <Title>
                            {story.title} 
                        </Title>
                        
                    </ExternalLink>
                    <Description>                 

                        <SimpleLink href={hackernewsAPI.getUserDetailLink(story.by)} rel="nofollow noreferrer noopener" target="_blank">
                        {story.by} {' | '}
                        </SimpleLink>
                        <time dateTime={new Date(postedTime).toISOString()}>{timeago(postedTime)}</time>   
                        {domainHost && <Host>{' | '} {domainHost}</Host> }                   
                    </Description>
                </ContentBox>
                
                
            </StoryListItem>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryItem)

