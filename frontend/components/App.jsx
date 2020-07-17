import React from "react";
import GreetingsContainer from "./greetings/greetings_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => (
    <div>
        <header>
            <Route path='/' component={GreetingsContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
        </header>
    </div>
);

export default App;