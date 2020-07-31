import { UPDATE_BOUNDS } from '../actions/filter_actions';

// const defaultFilters = Object.freeze({
//     bounds: {}
// });
const filtersReducer = ( state = { bounds : {} }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case UPDATE_BOUNDS:
            const new_state = Object.assign({}, state, { [action.filter]: action.value });
            return new_state;
            default:
                return state;
    }
};

export default filtersReducer;