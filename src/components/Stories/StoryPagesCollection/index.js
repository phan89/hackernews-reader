import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StoryPagesCollectionWrapper } from './styles'
import Loader from 'components/Loader'

import actions from 'store/story/actions'
import Utils from 'store/story//utils'

import { hasMorePagesSelector } from 'store/story/selectors'

import InfiniteScroll from 'react-infinite-scroll-component';
import StoryPage from '../StoryPage'


class StoryPagesCollection extends Component {

    constructor() {
        super();
        this.fetchNextPage = this.fetchNextPage.bind(this);
    }

    // override zones
    componentDidMount() {
        const { pagesFetched, fetchStoryPages } = this.props;
        if (!pagesFetched) {
            fetchStoryPages();
        }
    }

    componentDidUpdate() {

    }

    fetchNextPage(evt) {
        const { nextPageToFetch, fetchStoriesForPage, storyIDs } = this.props;
        if (nextPageToFetch >= 0) {
            fetchStoriesForPage(storyIDs, nextPageToFetch);
        }           
    } 

    render() {
        const { pagedStoriesFetched, hasMorePages } = this.props;
        return (     
            <InfiniteScroll
                dataLength={pagedStoriesFetched.length}
                next={this.fetchNextPage}
                hasMore={hasMorePages}
                loader={<Loader />}
                style={{height: '100%',overflow: 'visible',}}
            >
                <StoryPagesCollectionWrapper>
                    { pagedStoriesFetched && pagedStoriesFetched.map(page => {                            
                        return <StoryPage  key={page.index} page={page}/>
                    })}
                       
                </StoryPagesCollectionWrapper>
            </InfiniteScroll>          
        )
    }
}


const mapStateToProps = (state) => {
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStoriesForPage: (storyIDs, pageIndex) =>  dispatch(actions.fetchStoriesForPage({storyIDs, pageIndex})),    
        fetchStoryPages: () => dispatch(actions.fetchStoryPages({fetchFirstPage: true})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPagesCollection)
