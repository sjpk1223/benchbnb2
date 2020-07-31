import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { logout } from './actions/session_actions';
import { fetchBenches } from './util/bench_api_util';
// action file functions always return function that should be dispatched so it cant run a promise
//which is why we import from util not actions
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
    window.fetchBenches = fetchBenches;
    
    ReactDOM.render(<Root store={store} /> , root);
});

