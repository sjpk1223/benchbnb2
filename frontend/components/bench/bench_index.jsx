import React from 'react';
import { Link } from 'react-router-dom';
import BenchIndexItem from './bench_index_item';


class BenchIndex extends React.Component {
    constructor(props){
        super(props);


    }
    // componentDidMount() {
    //     this.props.updateBounds();
    // }

    render() {
    
        const benchCount = Object.keys(this.props.benches).length;
        // const benches  = this.props.benches;
        // saved LI array form to display between UL tag 
        // so it makes it into bullet point format
        const benches = Object.keys(this.props.benches).map(benchId => (
            <BenchIndexItem
                bench={this.props.benches[benchId]}
                key={benchId}
            />
        ))
        const display = benchCount > 0 ? (
            <div>
                <h1>Benches: </h1>
                <ul>{benches}</ul>
            </div>
        ) : (
            <h1>No benches</h1>
        );
  
        return (
            <>
            {display}
            </>
        );
    }
}

export default BenchIndex;