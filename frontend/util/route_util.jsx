import React from 'react';
import {connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const mapStateToProps = state => {
    debugger
    return { loggedIn: Boolean(state.session.currentUser) };
};

const Protected = ({ loggedIn, path, component: Component }) => {
    <Route 
    path={path}
    render={props => {
        loggedIn ? <Component {...props} /> : <Redirect to="signup"/> 

    }}
    />
}
// withRouter gives access to location, history and match?
export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

export const ProtectedRoute = withRouter(
    connect(
        (mapStateToProps)(Protected)
    )
);