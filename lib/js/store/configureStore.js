import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import promiseMiddleware from '../middleware/asyncrequestdata'

const env = process.env.NODE_ENV || 'development';


const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
})

const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware,
    promiseMiddleware('_FULFILLED', '_REJECTED')
)(createStore);

export default createStoreWithMiddleware(rootReducer, (env==='development') && window.devToolsExtension && window.devToolsExtension())
