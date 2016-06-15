import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, UPDATE_ITEMS, DELETE_ITEMS} from '../constants/ActionTypes';
import {SERVER_UPDATE} from '../constants/api';


export default (state=[], action) => {
    switch(action.type){
        case ADD_ITEM: //添加 item，放在数组第一个位置
            return [createItem(action.text), ...state]
        case DELETE_ITEM: //删除 item 就是根据 id 过滤掉
            return state.filter(item => item.id !== action.id)
        case UPDATE_ITEM: //更新item 由 updateItem helper 函数执行
            return updateItem(action.data, state)
        case UPDATE_ITEMS: //更新所有 item，就是每个就合并 action.data
            return state.map(item => Object.assign({}, item, action.data))
        case DELETE_ITEMS: //删除 item，过滤掉符合 action.query 对象描述的 item
            return filterItems(action.query, state)
        case SERVER_UPDATE: //服务端推送 action，整个替换掉 todos
            return action.state.todos
        default: //其他没匹配到的 action，返回原 state
            return state
    }
}
