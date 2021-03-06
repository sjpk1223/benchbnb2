    import * as benchApiUtil from '../util/bench_api_util';

    export const RECEIVE_BENCHES = "RECEIVE_BENCHES"; // to avoid typos in reducer
    export const RECEIVE_BENCH = "RECEIVE_BENCH";
    export const UPDATE_FILTER = "UPDATE_FILTER";
    export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
    // action creator creates an object that will be dispatched to the reducer

    const receiveBenches = (benches) => ({
        type: RECEIVE_BENCHES,
        benches: benches
    })
    // the return value is an action object

    const receiveBench = (bench) => ({
        type: RECEIVE_BENCH,
        bench: bench
    })

    export const receiveReview = ({ rating, comment, author }) => ({
        type: RECEIVE_BENCH,
        rating,
        comment,
        author
    })

    export const createReview = review => dispatch => (
        APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))
    ))
    );

    // calls an ajax request which returns a promise object 
    export const fetchBenches = (bounds) => dispatch => {
        return benchApiUtil.fetchBenches(bounds)
        .then(benches => dispatch(receiveBenches(benches)));
    }   

    export const fetchBench = (benchId) => dispatch => {
        return benchApiUtil.fetchBench(benchId) // hits our backend and gets the data we need & then we are calling .then on a promise
        .then(bench => dispatch(receiveBench(bench)));
    }

    export const postBench = (bench) => dispatch => {
        return benchApiUtil.postBench(bench)
        .then(bench => dispatch(receiveBench(bench)));
    }

    const changeFilter = (filter, value) => ({
        type: UPDATE_FILTER,
        filter,
        value
    });

    export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().ui.filters)(dispatch);
};