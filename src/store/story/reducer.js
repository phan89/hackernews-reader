import { actionTypes } from './actions';
import { PAGE_STATUS } from 'services/hackernewsAPI';

const initialState = () => ({
  storyIDs: [],
  pages: [],
  error: '',
  isFetching: false,
  pagesFetched: false,
  fetchedStories: {},

  // bookmark
  favStories: null,
  fetchingBookmark: null,
});

const story = (state = initialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.RELOAD_STORIES: {
      const { keepBookmark } = payload;
      const initState = initialState();
      if (keepBookmark) {
        return {
          ...initState,
          favStories: state.favStories,
        };
      } else {
        return initState;
      }
    }
    case actionTypes.FETCH_TOP_STORY_IDS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case actionTypes.FETCH_PAGE_STORIES_BATCH_REQUEST:
    case actionTypes.FETCH_PAGE_STORIES_REQUEST: {
      const { pageIndex } = payload;
      state.pages[pageIndex].status = PAGE_STATUS.FETCHING;
      return {
        ...state,
        isFetching: true,
      };
    }
    case actionTypes.FETCH_PAGE_BATCH_STORIES_SUCCESS: {
      const { batchStories } = payload;
      batchStories.map(story => {
        state.fetchedStories[story.id] = story;
        return story.id;
      });
      return {
        ...state,
        isFetching: false,
      };
    }
    case actionTypes.FETCH_TOP_STORY_IDS_SUCCESS: {
      const { pages } = payload;
      const pagesFetched = typeof pages !== 'undefined' && pages.length !== 0;

      return {
        ...state,
        ...payload,
        isFetching: false,
        pagesFetched: pagesFetched,
      };
    }

    case actionTypes.FETCH_PAGE_BATCHES_SUCCESS: {
      const { pageStoryIDs, pageIndex } = payload;
      if (pageStoryIDs && state.pages && state.pages[pageIndex]) {
        state.pages[pageIndex].storyIDs = pageStoryIDs;
        state.pages[pageIndex].status = PAGE_STATUS.FETCHED;
      }
      return {
        ...state,
        isFetching: false,
      };
    }

    // bookmark
    case actionTypes.FETCH_STORIES_BOOKMARK_REQUEST: {
      return {
        ...state,
        fetchingBookmark: true,
      };
    }

    case actionTypes.FETCH_STORIES_BOOKMARK_FAILURE: {
      return {
        ...state,
        fetchingBookmark: false,
      };
    }

    case actionTypes.FETCH_STORIES_BOOKMARK_SUCCESS: {
      const { fetchedFavStories } = payload;
      const favStories = state.favStories || {};
      fetchedFavStories.map(favStory => {
        favStories[favStory.id] = true;
        return null;
      });

      return {
        ...state,
        favStories: favStories,
        fetchingBookmark: false,
      };
    }

    case actionTypes.LOAD_BOOKMARK_STORIES_REQUEST: {
      return {
        ...state,
        isFetching: false,
      };
    }

    case actionTypes.ADD_STORY_FAVORITE_SUCCESS: {
      const { story } = payload;
      if (state.favStories === null) {
        state.favStories = {};
      }
      state.favStories[story.id] = true;
      return {
        ...state,
        isFetching: false,
      };
    }

    case actionTypes.REMOVE_STORY_FAVORITE_SUCCESS: {
      const { story } = payload;
      const { favStories } = state;
      const { [story.id]: _, ...updatedFavStories } = favStories;
      return {
        ...state,
        favStories: updatedFavStories,
        isFetching: false,
      };
    }

    default:
      return state;
  }
};

export default story;
