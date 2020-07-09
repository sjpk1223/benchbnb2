import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';
import errorsReducer from './errors';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;