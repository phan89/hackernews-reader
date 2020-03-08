import { actionTypes } from './actions'
import { PAGE_STATUS } from 'services/hackernewsAPI'

const initialState = () => ({
    storyIDs: [],
    pages: [],
    error: '',
    isFetching: false,
    pagesFetched: false,
});

const story = (state=initialState(), { type, payload })  => {
    switch (type) {
        case actionTypes.FETCH_TOP_STORY_IDS_REQUEST:
            {
                return {
                    ...state,
                    isFetching: true
                }
            }
        case actionTypes.FETCH_PAGE_STORIES_BATCH_REQUEST:
        case actionTypes.FETCH_PAGE_STORIES_REQUEST:
            {
                const {pageIndex} = payload;
                state.pages[pageIndex].status = PAGE_STATUS.FETCHING;
                return {
                    ...state,
                    isFetching: true
                }
            }
        case actionTypes.FETCH_TOP_STORY_IDS_SUCCESS:
            const { pages } = payload;
            const pagesFetched = typeof pages !== 'undefined' && pages.length !== 0

            return {
                ...state,
                ...payload,
                isFetching: false,
                pagesFetched: pagesFetched,
            }
            
        case actionTypes.FETCH_PAGE_STORIES_BATCH_SUCCESS:
        case actionTypes.FETCH_PAGE_STORIES_SUCCESS:
            const {stories, pageIndex} = payload;
            state.pages[pageIndex].stories = stories;
            state.pages[pageIndex].status = PAGE_STATUS.FETCHED;
            if (stories && stories.length > 0) {
                return {
                    ...state,
                    isFetching: false,
                }
            } else {
                return {
                    ...state,
                    isFetching: false,
                }
            }
            
        default:
            return state;
    }
}

export default story;