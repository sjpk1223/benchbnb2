import React from 'react';
import { Link } from 'react-router-dom';
import BenchIndexItem from './bench_index_item';
import bench_index_container from './bench_index_container';

class BenchIndex extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        // }
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        return (
            <>
            <div>
        
            </div>
            </>
        )
    }
}

export default BenchIndex;