export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
import {fetchBenches} from './benches_actions';

const changeBounds = (bounds, value) => {
    return {
        type: UPDATE_BOUNDS,
        bounds,
        value
}
}

export const updateBounds = (bounds) => (dispatch, getState) => {
        dispatch(changeBounds(bounds))
        return fetchBenches(getState().ui.filters)(dispatch);
}
