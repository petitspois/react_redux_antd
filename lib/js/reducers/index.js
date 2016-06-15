import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todo';
import visibilityFilter from './filter';
import loadLists from './query'



const todoApp = combineReducers({
    todos,
    visibilityFilter,
    loadLists,
    routing: routerReducer
})

export default todoApp
