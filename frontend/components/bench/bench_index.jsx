import React from 'react';
import { Link } from 'react-router-dom';
import BenchIndexItem from './bench_index_item';
import bench_index_container from './bench_index_container';

class BenchIndex extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        const { benches } = this.props;
        return (
            <>
            </>
        )
    }
}

export default BenchIndex;