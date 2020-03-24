import hackerNewsApi from 'services/hackernewsAPI';

const NS = `@hnReader/Story`;
export const actionTypes = {
  FETCH_TOP_STORY_IDS_REQUEST: `${NS}/FETCH_TOP_STORY_IDS_REQUEST`,
  FETCH_TOP_STORY_IDS_SUCCESS: `${NS}/FETCH_TOP_STORY_IDS_SUCCESS`,
  FETCH_TOP_STORY_IDS_FAILURE: `${NS}/FETCH_TOP_STORY_IDS_FAILURE`,

  FETCH_PAGE_BATCH_STORY_IDS_REQUEST: `${NS}/FETCH_PAGE_BATCH_STORY_IDS_REQUEST`,
  FETCH_PAGE_BATCH_STORY_IDS_SUCCESS: `${NS}/FETCH_PAGE_BATCH_STORY_IDS_SUCCESS`,
  FETCH_PAGE_BATCH_STORY_IDS_FAILURE: `${NS}/FETCH_PAGE_BATCH_STORY_IDS_FAILURE`,

  FETCH_PAGE_BATCHES_REQUEST: `${NS}/FETCH_PAGE_BATCHES_REQUEST`,
  FETCH_PAGE_BATCHES_SUCCESS: `${NS}/FETCH_PAGE_BATCHES_SUCCESS`,
  FETCH_PAGE_BATCHES_FAILURE: `${NS}/FETCH_PAGE_BATCHES_FAILURE`,

  FETCH_PAGE_BATCH_STORIES_REQUEST: `${NS}/FETCH_PAGE_BATCH_STORIES_REQUEST`,
  FETCH_PAGE_BATCH_STORIES_SUCCESS: `${NS}/FETCH_PAGE_BATCH_STORIES_SUCCESS`,

  RELOAD_STORIES: `${NS}/RELOAD_STORIES`,

  ADD_STORY_FAVORITE_SUCCESS: `${NS}/ADD_STORY_FAVORITE_SUCCESS`,
  ADD_STORY_FAVORITE_FAILURE: `${NS}/ADD_STORY_FAVORITE_FAILURE`,

  REMOVE_STORY_FAVORITE_SUCCESS: `${NS}/REMOVE_STORY_FAVORITE_SUCCESS`,
  REMOVE_STORY_FAVORITE_FAILURE: `${NS}/REMOVE_STORY_FAVORITE_FAILURE`,

  FETCH_STORIES_BOOKMARK_REQUEST: `${NS}/FETCH_STORIES_BOOKMARK_REQUEST`,
  FETCH_STORIES_BOOKMARK_SUCCESS: `${NS}/FETCH_STORIES_BOOKMARK_SUCCESS`,
  FETCH_STORIES_BOOKMARK_FAILURE: `${NS}/FETCH_STORIES_BOOKMARK_FAILURE`,

  LOAD_BOOKMARK_STORIES_SUCCESS: `${NS}/LOAD_BOOKMARK_STORIES_SUCCESS`,
  LOAD_BOOKMARK_STORIES_FAILURE: `${NS}/LOAD_BOOKMARK_STORIES_FAILURE`,
  LOAD_BOOKMARK_STORIES_REQUEST: `${NS}/LOAD_BOOKMARK_STORIES_REQUEST`,
};

const defaultAction = (type, payload) => ({ type, payload });
export const BATCH_SIZE = 5;

export const storyActions = {
  reloadStories: (payload = {}) => {
    return dispatch => {
      dispatch(defaultAction(actionTypes.RELOAD_STORIES, payload));
    };
  },

  fetchStoryPages: (payload = {}) => {
    const fetchFirstPage = { payload };
    return dispatch => {
      dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_REQUEST, payload));
      return hackerNewsApi
        .fetchTopStoriesIDs()
        .then(storyIDs => {
          const pages = hackerNewsApi.splitStoryIDsIntoPages(storyIDs);
          dispatch(
            defaultAction(actionTypes.FETCH_TOP_STORY_IDS_SUCCESS, {
              storyIDs,
              pages,
            })
          );
          if (fetchFirstPage) {
            dispatch(storyActions.fetchBatchesForPage({ storyIDs, pageIndex: 0 }));
          }
        })
        .catch(err => {
          dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_FAILURE, err));
        });
    };
  },

  fetchBatchStoriesFromStoryIDs: (payload = {}) => {
    return dispatch => {
      const { batchStoryIDs, pageIndex } = payload;
      dispatch(
        defaultAction(actionTypes.FETCH_PAGE_BATCH_STORIES_REQUEST, {
          ...payload,
          pageIndex,
          batchStoryIDs,
        })
      );
      const batchStoryPromises = batchStoryIDs.map(id => hackerNewsApi.fetchStory(id));
      return Promise.all(batchStoryPromises).then(batchStories => {
        const successPayload = { ...payload, batchStories: batchStories };
        dispatch(
          defaultAction(actionTypes.FETCH_PAGE_BATCH_STORIES_SUCCESS, successPayload)
        );
      });
    };
  },

  fetchBatchesForPage: (payload = {}) => {
    return dispatch => {
      dispatch(defaultAction(actionTypes.FETCH_PAGE_BATCHES_REQUEST, payload));

      const { storyIDs, pageIndex } = payload;
      const pageStoryIDs = hackerNewsApi.getPageStoryIDs(storyIDs, pageIndex);

      dispatch(
        defaultAction(actionTypes.FETCH_PAGE_BATCHES_SUCCESS, {
          ...payload,
          pageStoryIDs,
        })
      );
    };
  },

  // personalization
  getFirestoreBookmark: (state, firestore) => {
    const currentUserUID = state.firebase.auth.uid;
    return firestore
      .collection('vault')
      .doc(currentUserUID)
      .collection('favourites');
  },

  // load the stories from bookmark stories
  loadBookmarkStories: (payload = {}) => {
    return (dispatch, getState) => {
      dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_REQUEST, payload));
      const state = getState();
      const storyIDs = Object.keys(state.story.favStories || {});
      if (storyIDs !== null) {
        const pages = hackerNewsApi.splitStoryIDsIntoPages(storyIDs);
        dispatch(
          defaultAction(actionTypes.FETCH_TOP_STORY_IDS_SUCCESS, {
            storyIDs,
            pages,
          })
        );
        dispatch(storyActions.fetchBatchesForPage({ storyIDs, pageIndex: 0 }));
      }
      dispatch(defaultAction(actionTypes.LOAD_BOOKMARK_STORIES_REQUEST, payload));
    };
  },

  // fetch the bookmark stories
  fetchStoriesBookmark: (payload = {}) => {
    return (dispatch, getState, { getFirestore }) => {
      dispatch(defaultAction(actionTypes.FETCH_STORIES_BOOKMARK_REQUEST, payload));
      const state = getState();
      const firestore = getFirestore();
      storyActions
        .getFirestoreBookmark(state, firestore)
        .get()
        .then(querySnapshot => {
          const fetchedData = querySnapshot.docs.map(doc => doc.data());
          dispatch(
            defaultAction(actionTypes.FETCH_STORIES_BOOKMARK_SUCCESS, {
              ...payload,
              fetchedFavStories: fetchedData,
            })
          );
        })
        .catch(err => {
          dispatch(
            defaultAction(actionTypes.FETCH_STORIES_BOOKMARK_FAILURE, {
              ...payload,
            })
          );
        });
    };
  },

  // remove bookmark story
  removeBookmarkStory: (payload = {}) => {
    return (dispatch, getState, { getFirestore }) => {
      const { story } = payload;
      const state = getState();
      const firestore = getFirestore();
      const selectedDoc = storyActions
        .getFirestoreBookmark(state, firestore)
        .doc(story.id.toString());

      selectedDoc
        .delete()
        .then(() => {
          dispatch(
            defaultAction(actionTypes.REMOVE_STORY_FAVORITE_SUCCESS, {
              ...payload,
            })
          );
        })
        .catch(err => {
          dispatch(
            defaultAction(actionTypes.REMOVE_STORY_FAVORITE_FAILURE, {
              ...payload,
            })
          );
        });
    };
  },

  // bookmark the story to the list of favourites
  addBookmarkStory: (payload = {}) => {
    return (dispatch, getState, { getFirestore }) => {
      const { story } = payload;
      const state = getState();
      const currentUserUID = state.firebase.auth.uid;
      const firestore = getFirestore();
      storyActions
        .getFirestoreBookmark(state, firestore)
        .doc(story.id.toString())
        .set({
          id: story.id,
          userUID: currentUserUID,
          added: new Date(),
        })
        .then(() => {
          dispatch(
            defaultAction(actionTypes.ADD_STORY_FAVORITE_SUCCESS, {
              ...payload,
            })
          );
        })
        .catch(err => {
          dispatch(
            defaultAction(actionTypes.ADD_STORY_FAVORITE_FAILURE, {
              ...payload,
            })
          );
        });
    };
  },
};
