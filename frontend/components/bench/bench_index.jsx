import React from 'react';
import { Link } from 'react-router-dom';

// class BenchIndex extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         const { fetchBenches } = this.props;
//         return (
//             <></>
//         )
//     }
// }

class BenchIndex extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        // }
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        // request benches from your API here
        const benches = this.props.fetchBenches();
        // this.setState 
    }

    render() {
        // const benches = this.props.fetchBenches();
        return (
            <div>
        
            </div>
        )
    }
}

export default BenchIndex;