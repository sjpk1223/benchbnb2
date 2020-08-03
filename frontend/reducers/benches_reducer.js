import { RECEIVE_BENCHES, RECEIVE_BENCH } from "../actions/benches_actions";
import merge from 'lodash.merge'; // need to install loadash to use merge! npm i --save lodash.merge
const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches; // receiving the entire index of benches
        case RECEIVE_BENCH:
                                 // action.bench.id needs to be in an array 
                                 
            return merge({}, state, { [action.bench.id]: action.bench } ) // can only merge objects
            // merge(needs to be imported) is deep dup , object.create is shallow dup
            //first argument(object) decides what the objects id is going to be
            // we need to change that or react will not update the state
        default:
            return state;
    }
};

export default benchesReducer;