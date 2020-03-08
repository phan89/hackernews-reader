import React, { Component } from 'react'

import StoryItem from 'components/Stories/StoryItem'


class StoryBatch extends Component {
    render() {
        const { stories, bogusLoader } = this.props;
        return (       
            <React.Fragment>
                {stories && stories.map(story => (
                    <StoryItem key={story.id} story={story} bogusLoader={bogusLoader}></StoryItem>
                ))}
            </React.Fragment>
        )
    }
}

export default StoryBatch