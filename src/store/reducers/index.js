import { numberReducer } from './number';
import { userReducer } from './user';


export function reducer(state, action) {

    console.log('action#', action);
    console.log('state#', state);

    let newState = numberReducer(state,action);
    return userReducer(newState, action);

}
