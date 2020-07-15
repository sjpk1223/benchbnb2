import React from 'react';
// simply view element
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // type is key of state, depending on key we will handle the input
    handleInput(type) {
        // we want to take in our event object
        return (e) => {
            // setState is a built-in method to change slice of state
            this.setState({ [type]: e.target.value })
        };
    }
    // takes in event
    handleSubmit(e) {
        //default action for a button in a form will send post request whcih will cause th page to re-render
        // frontend state & backend state are not the same!
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        return (
            <div className="session-form">
                <h2 className="modal-title">Log In</h2>
                <form className="modal-form">
                    <label className="modal-textbox-label">
                        Username:
                <input
                            type="text"
                            className="modal-textbox"
                            // if we want prefilled value of information
                            value={this.state.username}
                            // jsx/react method, whenever we change value it will call handleinput
                            // we can think of it as a listener, listens for changes even single char in input field
                            onChange={this.handleInput("username")}
                        />
                    </label>
                    <label className="modal-textbox-label">
                        Password:
                <input
                            className="modal-textbox"
                            type="password"
                            // value={this.state.password}
                            // jsx/react method, whenever we change value it will call handleinput
                            onChange={this.handleInput("password")}
                        />
                    </label>
                    <button
                        className="modal-submit-button"
                        onClick={this.handleSubmit}
                    >
                        Log in
              </button>
                </form>
            </div>
        );
    }
}

export default Login;