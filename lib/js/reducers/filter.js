import {FILTER_ITEMS, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../constants/FilterTypes';


let hashToFilter = {
    '#/': SHOW_ALL,
    '#/active': SHOW_ACTIVE,
    '#/completed': SHOW_COMPLETED
}

export default (state = SHOW_ALL, action) => {
    switch (action.type) {
        case FILTER_ITEMS: //单纯的模式匹配，默认显示 SHOW_ALL
        return hashToFilter[action.active] || SHOW_ALL
        default:
        return state
    }
}
