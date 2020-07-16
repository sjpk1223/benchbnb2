import React from 'react';

class SessionForm extends React.Component{
    constructor(props) {
        super(props);// before we define our state
        this.state = { // pojo
            username: '',
            email: '',
            password: '', //default
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); // put in scope
        
    }

    handleInput(type) {
        return (e) => { //square bracket means it will be evaluated before set to key
            this.setState({ [type]: e.target.value }); // submitting info as ajax
        };
    }

    //submitting our info to our back end
    handleSubmit(e) {
        e.preventDefault(); //prevent page from rerendering
        this.props.processform(this.state)
        .then(() => this.props.history.push('/'))
        // can use promise or redirect user auth route
    }



render (){
    const { formtype } = this.props;
    let display = "";
    if (formtype === "login") {
        display = (<>
            <h2>Log In</h2>
            <form>
                <label>
                    Username:
                <input
                        type="text"
                        // if we want prefilled value of information
                        value={this.state.username}
                        // jsx/react method, whenever we change value it will call handleinput
                        // we can think of it as a listener, listens for changes even single char in input field
                        onChange={this.handleInput("username")}
                    />
                </label>
                <label>
                    Password:
                <input
                        type="password"
                        // value={this.state.password}
                        // jsx/react method, whenever we change value it will call handleinput
                        onChange={this.handleInput("password")}
                    />
                </label>
                <button
                    onClick={this.handleSubmit}
                >
                    Log in
              </button>
                </form>
        </>)
    }  else {
        display = (
            <div className="session-form">
                <h2>Sign Up</h2>
                <form>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        //whenever we change value of this component we call 
                        />
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        //whenever we change value of this component we call 
                        />
                    </label>
                    <label>Password:
                        <input
                            type="text"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        //whenever we change value of this component we call 
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    };
    return (
        display
    );
};
}

export default SessionForm;
