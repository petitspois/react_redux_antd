import { resolve, reject } from '../middleware/asyncrequestdata';

export default (state={}, action) => {
    switch(action.type){
        case 'INIT_LISTS':
            return Object.assign({}, action.payload)
            break;
        case 'LOAD_LISTS':
            return Object.assign({}, state, { isLoading: true })
            break;
        case resolve('LOAD_LISTS'):
            return Object.assign({}, state, { isLoading: false }, action.payload)
            break;
        case reject('LOAD_LISTS'):
            return Object.assign({}, state, { isLoading: false }, {
                'list': { error: action.payload}
            })
            break;
        default:
            return state
    }
}
