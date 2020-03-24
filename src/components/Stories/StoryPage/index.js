import React, { Component } from 'react';
import { StoryPageWrapper } from './styles';
import StoryBatchWrapper from '../StoryBatch';
import Utils from 'store/story/utils';

class StoryPage extends Component {
  render() {
    const { page, bogusLoader } = this.props;
    const batches = Utils.getPageBatches(page);

    let baseKey = {};
    if (batches) {
      baseKey = batches.map(batch => {
        return batch.batchStoryIDs.reduce((a, b) => a + b, 0);
      });
    }
    return (
      <StoryPageWrapper bogusLoader={bogusLoader}>
        {batches &&
          batches.map(batch => (
            <StoryBatchWrapper
              batchStoryIDs={batch.batchStoryIDs}
              pageIndex={page.index}
              batchStories={batch.batchStories}
              batchIndex={batch.index}
              key={batch.index + baseKey[batch.index]}
              bogusLoader={bogusLoader}
            ></StoryBatchWrapper>
          ))}
      </StoryPageWrapper>
    );
  }
}

export default StoryPage;
