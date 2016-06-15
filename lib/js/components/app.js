import React, { Component } from 'react'
import {Link} from 'react-router'


import { Menu, Breadcrumb } from 'antd';
import '../../css/index.css'

import SearchInput from './indexsearch'

class App extends Component{
    render(){
        return (
            <div className="ant-layout-top">
              <div className="ant-layout-header">
                <div className="ant-layout-wrapper" style={{position:'relative'}}>
                  <div className="ant-layout-logo"></div>
                  <Menu theme="dark" mode="horizontal"
                    defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
                    <Menu.Item key="1">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/one">one</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/two">two</Link>
                    </Menu.Item>
                  </Menu>
                  <SearchInput onSearch={value => console.log(value)} />
                </div>
                {this.props.children}
              </div>
            </div>
        )
    }
}

export default App
