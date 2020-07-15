import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props); //before we define our state
        this.state = { // pojo
            username: '',
            email: '',
            password: '', // default
        };
        this.handleSubmit = this.handleSubmit.bind(this); // put in scope
    }

    handleInput(type) {
        return () => {//square bracket means it will be evaluated before set to key
            this.setState({ [type]: e.target.value }) // event handler
        }
    }

    //submitting our info to our back end
     handleSubmit(e) {
         e.preventDefault(); //prevent page from rerendering
         this.props.createNewUser(this.state)
         .then(  () => this.props.history.push('/users'))
     }
    render() {
        return (
            <div className="session-form">
                <h2>Sign Up</h2>
                <form>
                    <label>Username:
                        <input
                        type="text"
                        value={this.state.username}
                        onChange={ this.handleInput('username')}
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
    }
};

export default Signup;