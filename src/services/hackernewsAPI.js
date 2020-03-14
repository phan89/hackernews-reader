import ApiService from "./API"

const BASE_URL = "https://hacker-news.firebaseio.com/v0"
const API_POST_FIX = ".json?print=pretty"

const PAGE_LIMIT = 20
const API_CLIENT = new ApiService({baseURL: BASE_URL})

export const PAGE_STATUS = {
  TO_FETCH: "toFetch",
  FETCHING: "fetching",
  FETCHED: "fetched",
}

const hackerNewsApi = {
  fetchTopStoriesIDs: () => {
    return API_CLIENT.get(`${BASE_URL}/topstories${API_POST_FIX}`)
  },

  fetchStory: id => {
    return API_CLIENT.get(`${BASE_URL}/item/${id}/${API_POST_FIX}`)
  },

  getPageStoryIDs: (ids, page) => {
    const {start, end} = hackerNewsApi.getPageRange(PAGE_LIMIT, page)
    const pageIDs = hackerNewsApi.getPageItems(ids, start, end)
    return pageIDs
  },

  fetchStoriesByPage: (ids, page) => {
    const pageIDs = hackerNewsApi.getPageStoryIDs(ids, page)
    if (pageIDs) {
      const storyPromises = pageIDs.map(id => hackerNewsApi.fetchStory(id))
      return Promise.all(storyPromises)
    } else {
      return Promise.resolve([])
    }
  },

  fetchStoriesIdsAsync: storyIDs => {
    const storyPromises = storyIDs.map(id => hackerNewsApi.fetchStory(id))
    return storyPromises
  },

  splitStoryIDsIntoPages: (storyIDs, chunkSize) => {
    const pageSize = chunkSize || PAGE_LIMIT
    const pages = storyIDs
      .map((item, idx) =>
        idx % pageSize === 0 ? storyIDs.slice(idx, idx + pageSize) : null
      )
      .filter(e => e)
      .map((pageStoryIDs, pageIndex) => {
        return {
          index: pageIndex,
          storyIDs: pageStoryIDs,
          status: PAGE_STATUS.TO_FETCH,
        }
      })
    return pages
  },

  getPageRange: (limit, page = 0) => {
    return {start: limit * page, end: limit * (page + 1)}
  },

  getPageItems: (items, start, end) => {
    return items.slice(start, end)
  },

  getUserDetailLink: userID => {
    return `https://news.ycombinator.com/user?id=${userID}`
  },

  getStoryCommentURL: storyID => {
    return `https://news.ycombinator.com/item?id=${storyID}`
  },
}

export default hackerNewsApi
