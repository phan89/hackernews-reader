import hackerNewsApi from "services/hackernewsAPI"

const NS = `@hnReader/Story`
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
}

const defaultAction = (type, payload) => ({type, payload})
export const BATCH_SIZE = 5

const actions = {
  reloadStories: (payload = {}) => {
    return dispatch => {
      dispatch(defaultAction(actionTypes.RELOAD_STORIES, payload))
    }
  },

  fetchStoryPages: (payload = {}) => {
    const fetchFirstPage = {payload}
    return dispatch => {
      dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_REQUEST, payload))
      return hackerNewsApi
        .fetchTopStoriesIDs()
        .then(storyIDs => {
          const pages = hackerNewsApi.splitStoryIDsIntoPages(storyIDs)
          dispatch(
            defaultAction(actionTypes.FETCH_TOP_STORY_IDS_SUCCESS, {
              storyIDs,
              pages,
            })
          )
          if (fetchFirstPage) {
            dispatch(actions.fetchBatchesForPage({storyIDs, pageIndex: 0}))
          }
        })
        .catch(err => {
          dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_FAILURE, err))
        })
    }
  },

  fetchBatchStoriesFromStoryIDs: (payload = {}) => {
    return dispatch => {
      const {batchStoryIDs, pageIndex} = payload
      dispatch(
        defaultAction(actionTypes.FETCH_PAGE_BATCH_STORIES_REQUEST, {
          ...payload,
          pageIndex,
          batchStoryIDs,
        })
      )
      const batchStoryPromises = batchStoryIDs.map(id => hackerNewsApi.fetchStory(id))
      return Promise.all(batchStoryPromises).then(batchStories => {
        const successPayload = {...payload, batchStories: batchStories}
        dispatch(
          defaultAction(actionTypes.FETCH_PAGE_BATCH_STORIES_SUCCESS, successPayload)
        )
      })
    }
  },

  fetchBatchesForPage: (payload = {}) => {
    return dispatch => {
      dispatch(defaultAction(actionTypes.FETCH_PAGE_BATCHES_REQUEST, payload))

      const {storyIDs, pageIndex} = payload
      const pageStoryIDs = hackerNewsApi.getPageStoryIDs(storyIDs, pageIndex)

      dispatch(
        defaultAction(actionTypes.FETCH_PAGE_BATCHES_SUCCESS, {
          ...payload,
          pageStoryIDs,
        })
      )
    }
  },
}

export default actions
