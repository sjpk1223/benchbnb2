import React from 'react';
import { Link } from 'react-router-dom'

//constructor and render
class Greetings extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { currentUser } = this.props;
        return (
            <div>
                <h1>Hi!</h1>
            </div>
        );
    }
}

export default Greetings;