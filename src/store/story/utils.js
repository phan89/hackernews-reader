import { PAGE_STATUS } from 'services/hackernewsAPI';

import { BATCH_SIZE } from 'store/story/actions';

export default class Utils {
  static getNextPageToFetch(pages) {
    const toFetchPage = pages.find(page => page.status !== PAGE_STATUS.FETCHED);
    if (toFetchPage) {
      return toFetchPage.index;
    } else {
      return -1;
    }
  }

  static getFetchedPages(pages) {
    return pages.filter(page => page.status === PAGE_STATUS.FETCHED);
  }

  static getPageBatches(page) {
    const stories = page.stories || [];
    const batches = page.storyIDs
      .map((item, idx) =>
        idx % BATCH_SIZE === 0 ? page.storyIDs.slice(idx, idx + BATCH_SIZE) : null
      )
      .filter(e => e)
      .map((batchStoryIDs, batchIndex) => {
        return {
          index: page.index * BATCH_SIZE + batchIndex,
          batchStoryIDs: batchStoryIDs,
          batchStories: stories.slice(page.index, page.index + BATCH_SIZE),
        };
      });
    return batches;
  }
}
