import * as types from '../constants/ActionTypes';
import reqwest from 'reqwest-without-xhr2';


//FSA request status
const defaultArgs = {
    methed:'post',
    type: 'json',
    contentType: 'application/x-www-form-urlencoded',
}

export function loadLists(args = {}){
    args = Object.assign({}, defaultArgs, args);
    return {
        type: 'LOAD_LISTS',
        payload: {
            promise: reqwest(args),
            list: args
        },
        meta:{
            list: args
        }
    }
}
