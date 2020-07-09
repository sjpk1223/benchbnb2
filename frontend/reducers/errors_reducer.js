import { combineReducers } from "redux";s
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
});

export default errorsReducer;