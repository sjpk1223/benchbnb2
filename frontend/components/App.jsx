import React from "react";
import GreetingsContainer from "./greetings/greetings_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import {Route} from 'react-router-dom';
const App = () => (
    <div>
        <header>
            <Route path='/' component={GreetingsContainer} />
            <Route path='/signup' component={SignupContainer} />
            <Route path='/login' component={SignupContainer} />
        </header>
    </div>
);

export default App;