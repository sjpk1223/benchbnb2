import {
    RECEIVE_CURRENT_USER
} from '../actions/session_actions'

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const new_state = Object.assign({}, state, { [action.user.id]: action.user });
            return new_state;
        default:
            return state;
    }
};

export default userReducer;