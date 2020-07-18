import {
    FETCH_BENCH
} from '../actions/benches_actions'

const _nullBench = {
    bench: null
};

const benchesReducer = ( state = _nullBench, action) => {
    Object.freeze(state);
    switch (action.type) {
        case FETCH_BENCH:
            return Object.assign({}, { bench: action.bench.id });
            default:
                return state;
    }
}

export default benchesReducer;