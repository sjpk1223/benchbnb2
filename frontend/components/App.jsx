import React from "react";
import GreetingsContainer from "./greetings/greetings_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import {Route, Switch, Link } from 'react-router-dom';
import {AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from "./bench/search_container";
import BenchFormContainer from './bench/bench_form_container';
import BenchShowContainer from './bench/bench_show_container';

const App = () => (
    <div>
   

        <header>
            <Link to='/'>
            <h1>BenchBnB</h1>
            </Link>
            <GreetingsContainer/>
        </header>
        <Switch>
            <AuthRoute path='/signup' component={SignupContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <Route exact path='/' component={SearchContainer} />
            <ProtectedRoute exact path='/benches/new' component={BenchFormContainer}/>
            <Route path='/benches/:benchId' component={BenchShowContainer} />
        </Switch>
        
    </div>
    // when using switch function whichever component it hits first it will render so 
    // order of routes matter!
);

export default App;