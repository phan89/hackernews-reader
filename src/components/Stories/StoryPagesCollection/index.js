import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'components/Loader';

import { storyActions } from 'store/story/actions';
import Utils from 'store/story//utils';

import { hasMorePagesSelector } from 'store/story/selectors';

import InfiniteScroll from 'react-infinite-scroll-component-v2';
import StoryPage from '../StoryPage';

class StoryPagesCollection extends Component {
  constructor() {
    super();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.refreshData = this.refreshData.bind(this);
  }

  // override zones
  componentDidMount() {
    const { pagesFetched, fetchStoryPages } = this.props;
    if (!pagesFetched) {
      fetchStoryPages();
    }
  }

  componentDidUpdate() {}

  fetchNextPage(evt) {
    const { nextPageToFetch, fetchBatchesForPage, storyIDs } = this.props;
    if (nextPageToFetch >= 0) {
      fetchBatchesForPage(storyIDs, nextPageToFetch);
    }
  }

  refreshData() {
    const { fetchStoryPages, reloadStories } = this.props;
    reloadStories();
    fetchStoryPages();
  }

  render() {
    const { pagedStoriesFetched, hasMorePages, nextPageToFetch } = this.props;
    return (
      <InfiniteScroll
        dataLength={pagedStoriesFetched.length}
        next={this.fetchNextPage}
        hasMore={hasMorePages}
        loader={<Loader />}
        refreshFunction={this.refreshData}
        pullDownToRefresh={true}
        style={{ height: '100%', overflow: 'visible' }}
        forcedStyle={{ overflow: 'visible' }}
      >
        {pagedStoriesFetched &&
          pagedStoriesFetched.map(page => {
            return <StoryPage key={page.index} page={page} />;
          })}

        {pagedStoriesFetched && nextPageToFetch > 1 && hasMorePages && <Loader />}
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => {
  const storyReducer = state.story;

  const { pages } = storyReducer;
  return {
    theme: state.app.theme,
    storyIDs: storyReducer.storyIDs,
    hasMorePages: hasMorePagesSelector(state),
    isFetching: storyReducer.isFetching,
    pagedStoriesFetched: Utils.getFetchedPages(pages),
    nextPageToFetch: Utils.getNextPageToFetch(pages),
    pagesFetched: storyReducer.pagesFetched,
    pages: storyReducer.pages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBatchesForPage: (storyIDs, pageIndex) =>
      dispatch(storyActions.fetchBatchesForPage({ storyIDs, pageIndex })),
    fetchStoryPages: () =>
      dispatch(storyActions.fetchStoryPages({ fetchFirstPage: true })),
    reloadStories: () => dispatch(storyActions.reloadStories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryPagesCollection);
