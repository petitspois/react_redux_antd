import { QUERY_LIST } from '../constants/api'
import * as allActions from '../actions'


export default function initState(store){
    //初始化loadlists
    store.dispatch(allActions.loadLists({
            url: QUERY_LIST,
            data: {
                pageSize:20,
                currentPage:1,
                typeStr:6,
                folder:42
            }
    }))

    return store

}
