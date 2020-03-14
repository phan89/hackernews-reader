import StoryItem from "components/Stories/StoryItem"

import React, {Component} from "react"
import {connect} from "react-redux"
import actions from "store/story/actions"

export class StoryBatch extends Component {
  render() {
    const {batchStories, bogusLoader} = this.props
    return (
      <React.Fragment>
        {batchStories &&
          batchStories.map(story => (
            <StoryItem key={story.id} story={story} bogusLoader={bogusLoader}></StoryItem>
          ))}
      </React.Fragment>
    )
  }
}

class StoryBatchWrapper extends Component {
  render() {
    const {
      batchStories,
      bogusLoader,
      batchIndex,
      batchStoryIDs,
      fetchedStories,
    } = this.props
    let effectiveStories = batchStories
    if (!effectiveStories || batchStories.length === 0) {
      effectiveStories = []
      if (fetchedStories) {
        effectiveStories = batchStoryIDs
          .filter(storyID => {
            return storyID in fetchedStories
          })
          .map(storyID => {
            return fetchedStories[storyID]
          })
      }
    }

    return (
      <StoryBatch
        batchStories={effectiveStories}
        batchIndex={batchIndex}
        key={batchIndex}
        bogusLoader={bogusLoader}
      ></StoryBatch>
    )
  }

  componentDidMount() {
    const {
      batchStories,
      batchStoryIDs,
      fetchBatchStoriesFromStoryIDs,
      batchIndex,
      pageIndex,
    } = this.props
    if (!batchStories || batchStories.length === 0) {
      fetchBatchStoriesFromStoryIDs(batchStoryIDs, batchIndex, pageIndex)
    }
  }
}

const mapStateToWrapperProps = state => {
  const storyReducer = state.story
  const fetchedStories = storyReducer.fetchedStories
  return {
    theme: state.app.theme,
    fetchedStories: fetchedStories,
  }
}

const mapDispatchToWrapperProps = dispatch => {
  return {
    fetchBatchStoriesFromStoryIDs: (batchStoryIDs, batchIndex, pageIndex) =>
      dispatch(
        actions.fetchBatchStoriesFromStoryIDs({
          batchStoryIDs,
          batchIndex,
          pageIndex,
        })
      ),
  }
}

export default connect(
  mapStateToWrapperProps,
  mapDispatchToWrapperProps
)(StoryBatchWrapper)
