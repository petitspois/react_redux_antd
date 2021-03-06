import { isFSA } from 'flux-standard-action'

function isPromise(val){
    return val && typeof val.then === 'function';
}

let [RESOLVED_NAME, REJECTED_NAME] = ['_RESOLVED', '_REJECTED'];

export function resolve(actionName) {
  return actionName + RESOLVED_NAME;
}

export function reject(actionName) {
  return actionName + REJECTED_NAME;
}

export default function promiseMiddleware(resolvedName, rejectedName){

    [RESOLVED_NAME, REJECTED_NAME] = [resolvedName || RESOLVED_NAME, rejectedName || REJECTED_NAME];

    return ({ dispatch }) => next => action => {

        //FSA标准，payload属性，isPromise
        if(!isFSA(action) || !action.payload || !isPromise(action.payload.promise)){
            return next(action)
        }


        // Clone original action
        let newAction = {
            type: action.type,
            payload: {
                ...action.payload
            }
        };

        if (Object.keys(newAction.payload).length === 1) {
          // No arguments beside promise, remove all payload
          delete newAction.payload;
        } else {
          // Other arguments, delete promise only
          delete newAction.payload.promise;
        }

        dispatch(newAction);

        return action.payload.promise.then(
            (result) => {
                dispatch({
                  type: resolve(action.type, resolvedName),
                  payload: result,
                  meta: newAction.payload
                });
                return result;
            },
            (error) => {
                dispatch({
                  type: reject(action.type, rejectedName),
                  payload: error,
                  meta: newAction.payload
                });
                return error;
            }
        )
    }

}
