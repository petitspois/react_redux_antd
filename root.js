import React, { Component } from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './lib/js/components/app'
import Home from './lib/js/components/home'
import one from './lib/js/components/one'
import two from './lib/js/components/two'
import 'antd/dist/antd.css'


export default function GetRoutes(){
        return (
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="one" component={one} />
                <Route path="two" component={two} />
            </Route>
        )
}
