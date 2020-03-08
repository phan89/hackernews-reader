import React, { Component } from 'react'
import { StoryPageWrapper } from './styles'
import StoryBatch from '../StoryBatch';
import Utils from 'store/story/utils'

class StoryPage extends Component {

    render() {
        const { page, bogusLoader } = this.props;
        const batches = Utils.getPageBatches(page);
        return (     
          <StoryPageWrapper bogusLoader={bogusLoader}>
              { batches && batches.map(batch => (
                    <StoryBatch stories={batch.batchStories} key={batch.index} bogusLoader={bogusLoader}>
                    </StoryBatch>
               ))}
          </StoryPageWrapper> 
        )
    }
}

export default StoryPage;