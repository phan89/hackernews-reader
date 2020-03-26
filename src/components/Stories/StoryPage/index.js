import React, { Component } from 'react';
import { StoryPageWrapper } from './styles';
import StoryBatchWrapper from '../StoryBatch';
import Utils from 'store/story/utils';
import { BATCH_SIZE } from 'store/story/actions';

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
          batches.map(batch => {
            const batchKey = batch.index + baseKey[batch.index % BATCH_SIZE];
            return (
              <StoryBatchWrapper
                batchStoryIDs={batch.batchStoryIDs}
                pageIndex={page.index}
                batchStories={batch.batchStories}
                batchIndex={batch.index}
                key={batchKey}
                bogusLoader={bogusLoader}
              />
            );
          })}
      </StoryPageWrapper>
    );
  }
}

export default StoryPage;
