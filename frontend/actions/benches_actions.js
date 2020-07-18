import {
    fetchBenches
} from '../util/bench_api_util'

export const RECEIVE_BENCHES = "RECEIVE_BENCHES"

const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches: benches
})

export const fetchBenches = () => dispatch => fetchBenches(benchId)
.then(bench => dispatch(receiveBenches(bench)));