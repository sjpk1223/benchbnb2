import React from "react";
import GreetingsContainer from "./greetings/greetings_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute } from '../util/route_util';
import bench_index_container from "./bench/bench_index_container";

const App = () => (
    <div>
        <header>
            <Route path='/' component={GreetingsContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <Route path='/benches' component={bench_index_container} />
        </header>
    </div>
);

export default App;