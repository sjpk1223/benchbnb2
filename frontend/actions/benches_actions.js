    import * as benchApiUtil from '../util/bench_api_util';

    export const RECEIVE_BENCHES = "RECEIVE_BENCHES"

    const receiveBenches = (benches) => ({
        type: RECEIVE_BENCHES,
        benches: benches
    })

    export const fetchBenches = (bounds) => dispatch => {
        return benchApiUtil.fetchBenches(bounds)
        .then(benches => dispatch(receiveBenches(benches)));
    }

