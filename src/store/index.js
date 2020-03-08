import { createStore } from "redux"
import middleware from './middleware'
import reducer from './reducer'

const configureStore = initialState => {
    const store = createStore(reducer, initialState, middleware);
    return store;
}

export default configureStore;