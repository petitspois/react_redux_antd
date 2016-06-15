import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd';
import classNames from 'classnames'
import * as allActions from '../actions'
import { QUERY_LIST } from '../constants/api'
const InputGroup = Input.Group;

class SearchInput extends Component{
  constructor(props){
      super(props)
      this.state = {
          value: ''
      }
  }

  handleInputChange(e){
      this.state = e.target.value;
  }

  handleSearch(){
      this.props.searchContent(this.state);
  }

  render() {
    const { style, size } = this.props;

    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': false,
    });

    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': false
    });

    const searchWrap = {
        position:'absolute',
        top:20,
        right:60,
        width:200
    }

    return (
      <div className="ant-search-input-wrapper" style={searchWrap}>
        <InputGroup className={searchCls}>
          <Input  placeholder="input search text" onChange={this.handleInputChange.bind(this)} />
          <div className="ant-input-group-wrap" >
            <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch.bind(this)} onPressEnter={this.handleSearch.bind(this)} />
          </div>
        </InputGroup>
      </div>
    )

  }
}

export default connect(state=>({...state}), dispatch => {
    return {
        searchContent(content){
            dispatch(allActions.loadLists({
                    url: QUERY_LIST,
                    data: {
                        pageSize:20,
                        currentPage:1,
                        typeStr:6,
                        folder:42,
                        search: content || ''
                    }
            }))
        }
    }
})(SearchInput)
