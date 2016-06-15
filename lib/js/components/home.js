import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table, Icon } from 'antd'

import * as API from '../constants/api'
import * as allActions from '../actions'

const columns = [{
  title: '题目名称',
  dataIndex: 'title',
}, {
  title: '难度',
  dataIndex: 'difficulty',
}, {
  title: '题型',
  dataIndex: 'answerType',
},{
    title:'更新时间',
    dataIndex:'gmtModified'
}];



@connect(
    state => ({loadLists: state.loadLists}),
    dispatch => {
        return {
            readyData: ()=> {
                dispatch(allActions.loadLists({
                        url: API.QUERY_LIST,
                        data: {
                            pageSize:20,
                            currentPage:1,
                            typeStr:6,
                            folder:42,
                        }
                }))
            }
        }
    }
)
export default class Home extends Component{
    constructor(props){
        super(props)
        this.props.readyData()
    }
    render(){
        const { loadLists } = this.props;
        var data = [];
        if(!loadLists.isLoading && loadLists.data && loadLists.data.data.files){
            data = loadLists.data.data.files
        };
        return (
            <div>
                <Table rowKey={record => record.id} columns={columns}  dataSource={data} loading={loadLists.isLoading} />
            </div>
        )
    }
}
