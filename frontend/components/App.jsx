import React from "react";
import GreetingsContainer from "./greetings/greetings_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from "./bench/search_container";

const App = () => (
    <div>
        <header>
            <h1>BenchBnB</h1>
            <Route path='/' component={GreetingsContainer} />
        </header>

            <AuthRoute path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <Route exact path='/' component={SearchContainer} />

    </div>
);

export default App;