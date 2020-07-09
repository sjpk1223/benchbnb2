import React from "react";
import ReactDOM from "react-dom";

const store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB!</h1>, root);
});

