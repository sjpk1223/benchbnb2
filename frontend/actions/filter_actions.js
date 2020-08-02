export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
import {fetchBenches} from './benches_actions';
import uiReducer from '../reducers/ui_reducer';

const changeBounds = (bounds) => {
    return {
        type: UPDATE_BOUNDS,
        bounds 
}
}

export const updateBounds = (bounds) => (dispatch, getState) => {
        dispatch(changeBounds(bounds))
        return fetchBenches(getState().ui.filters)(dispatch);
}
