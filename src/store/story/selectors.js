import { createSelector } from 'reselect';
import { PAGE_STATUS } from 'services/hackernewsAPI';

const fetchedPagesSelector = state => {
  const { pages } = state.story;

  if (pages) {
    return pages
      .filter(page => page.status === PAGE_STATUS.FETCHED)
      .map(page => page.index);
  } else {
    return 0;
  }
};

const totalPagesSelector = state => {
  const { pages } = state.story;
  if (pages) {
    return pages.map(page => page.index);
  } else {
    return 0;
  }
};

export const hasMorePagesSelector = createSelector(
  totalPagesSelector,
  fetchedPagesSelector,
  (totalPages, fetchedPages) => {
    return totalPages.length > fetchedPages.length;
  }
);
