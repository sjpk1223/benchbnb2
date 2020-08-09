import React from 'react';
import BenchMap from '../bench_map/bench_map';
import { fetchBench } from '../../util/bench_api_util';

class BenchShow extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchBench(this.props.match.params.benchId)
        
    }

    render() {
        const bench = this.props ? this.props.bench : null ;
        const description = bench ? bench.description : null;
        const seating = bench ? bench.seating : null;

        
        // the first time it renders it will throw error so 
    
        return (
            <div>
                <BenchMap bench={bench} singleBench={true} fetchBench={fetchBench}/>
                <br />
                <p> Description: {description} </p>
                <p> Seating: {seating} </p>

            </div>
        )
    }
}

export default BenchShow;