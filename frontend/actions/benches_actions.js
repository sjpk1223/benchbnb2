import {
    fetchBenches
} from '../util/bench_api_util'

export const FETCH_BENCH = "FETCH_BENCH"

const receiveBench = (bench) => ({
    type: FETCH_BENCH,
    bench: bench
})

export const fetchBench = () => dispatch => fetchBenches(benchId)
.then(bench => dispatch(receiveBench(bench)));