import React from 'react';
import { Link } from 'react-router-dom'

//constructor and render
class Greetings extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(type) {
        //default action for a button in a form will send post request whcih will cause th page to re-render
        // frontend state & backend state are not the same!
        return (e) => {
            e.preventDefault();
        }
    }

    render(){
        debugger
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <div>
                <p>Hello, {currentUser.username}</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
                <>
                    <button onClick={this.handleSubmit("login")} >
                        Log In
        </button>
                    <button onClick={this.handleSubmit("signup")} >
                        Sign Up
        </button>
                </>
            );
        return (
            <div>
                {display}
            </div>
        );
    }
}

export default Greetings;