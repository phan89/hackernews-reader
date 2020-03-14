import thunk from "redux-thunk"
import {createLogger} from "redux-logger"
import {compose, applyMiddleware} from "redux"

const isProd = process.env.NODE_ENV === "production"
const middlewares = []

middlewares.push(thunk)
if (!isProd) {
  middlewares.push(createLogger())
}

const middleware = compose(applyMiddleware(...middlewares))
export default middleware
