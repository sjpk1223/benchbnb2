import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { logout} from './actions/session_actions';
import { getBenches } from './actions/benches_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser,
            }
        }
    }
    const store = configureStore(preloadedState);
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBenches = getBenches;
    debugger
    ReactDOM.render(<Root store={store} /> , root);
});

