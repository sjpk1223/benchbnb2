import { RECEIVE_BENCHES } from "../actions/benches_actions";

const benchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        default:
            return state;
    }
};

export default benchesReducer;