import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './js/store/configureStore'

import { initLists } from './js/actions'
import { QUERY_LIST } from './js/constants/api'



const env = process.env.NODE_ENV || 'development';

import GetRoutes from '../root'

const store = configureStore;
const history = syncHistoryWithStore(browserHistory, store)

render(
        <Provider store={store}>
            <Router history={history}>
                {GetRoutes()}
            </Router>
        </Provider>,
    document.getElementById('root')
)
