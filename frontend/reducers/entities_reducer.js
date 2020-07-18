import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import benchesReducer from './benches_reducer';

const entitiesReducer = combineReducers({
    user: userReducer,
    benches: benchesReducer
});

export default entitiesReducer;