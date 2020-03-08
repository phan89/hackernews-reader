
import hackerNewsApi from 'services/hackernewsAPI';

const NS = `@hnReader/Story`
export const actionTypes = {
    FETCH_TOP_STORY_IDS_REQUEST: `${NS}/FETCH_TOP_STORY_IDS_REQUEST`,
    FETCH_TOP_STORY_IDS_SUCCESS: `${NS}/FETCH_TOP_STORY_IDS_SUCCESS`,
    FETCH_TOP_STORY_IDS_FAILURE: `${NS}/FETCH_TOP_STORY_IDS_FAILURE`,

    FETCH_PAGE_STORIES_REQUEST: `${NS}/FETCH_PAGE_STORIES_REQUEST`,
    FETCH_PAGE_STORIES_SUCCESS: `${NS}/FETCH_PAGE_STORIES_SUCCESS`,
    FETCH_PAGE_STORIES_FAILURE: `${NS}/FETCH_PAGE_STORIES_FAILURE`,

    FETCH_PAGE_STORIES_BATCH_REQUEST: `${NS}/FETCH_PAGE_STORIES_BATCH_REQUEST`,
    FETCH_PAGE_STORIES_BATCH_SUCCESS: `${NS}/FETCH_PAGE_STORIES_BATCH_SUCCESS`,
    FETCH_PAGE_STORIES_BATCH_FAILURE: `${NS}/FETCH_PAGE_STORIES_BATCH_FAILURE`,

    RELOAD_STORIES: `${NS}/RELOAD_STORIES`,
}

const defaultAction = (type, payload) => ({type, payload});
export const BATCH_SIZE = 5;

const actions = {

    reloadStories: (payload={}) => {
        return dispatch => {
            dispatch(defaultAction(actionTypes.RELOAD_STORIES, payload));            
        }
    },

    fetchStoryPages: (payload={}) => {
        const fetchFirstPage = {payload}
        return dispatch => {
            dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_REQUEST, payload));
            return hackerNewsApi.fetchTopStoriesIDs()
                .then(storyIDs => {
                    const pages = hackerNewsApi.splitStoryIDsIntoPages(storyIDs);
                    dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_SUCCESS, {storyIDs, pages}));
                    if (fetchFirstPage) {
                        dispatch(actions.fetchStoriesForPage({storyIDs, pageIndex: 0}));
                    }
                })
                .catch(err =>  {
                    dispatch(defaultAction(actionTypes.FETCH_TOP_STORY_IDS_FAILURE, err));
                });
        }
    },

    fetchStoriesForPage: (payload={}) => {
        return dispatch => {
            dispatch(defaultAction(actionTypes.FETCH_PAGE_STORIES_REQUEST, payload));
            const {storyIDs, pageIndex} = payload;            
            const pageIDs = hackerNewsApi.getPageStoryIDs(storyIDs, pageIndex);
            
            const batchSize = 20;
            const storyIDsBatches = pageIDs.map((item, idx) => (idx % batchSize === 0) ? pageIDs.slice(idx, idx + batchSize) : null)
                .filter((e) => e);
            const pageBatchesPromises = storyIDsBatches.map(storyIDS => hackerNewsApi.fetchStoriesIdsAsync(storyIDS));
            dispatch(defaultAction(actionTypes.FETCH_PAGE_STORIES_REQUEST, payload));

            let stories = [];
            return pageBatchesPromises.reduce((promiseChain, currentBatchPromises) => {
                return promiseChain.then(chainResults =>
                    {
                        dispatch(defaultAction(actionTypes.FETCH_PAGE_STORIES_BATCH_REQUEST, payload ));                    
                        return Promise.all(currentBatchPromises).then(currentResult => {
                            stories = [...stories, ...currentResult];
                            dispatch(defaultAction(actionTypes.FETCH_PAGE_STORIES_BATCH_SUCCESS, {...payload, stories: stories} ));    
                        })
                    }                    
                );
            }, Promise.resolve([])).then(arrayOfResults => {
                dispatch(defaultAction(actionTypes.FETCH_PAGE_STORIES_SUCCESS, {...payload, stories: stories} ));    
                return Promise.resolve(stories);
            });
        };
    }
}

export default actions;