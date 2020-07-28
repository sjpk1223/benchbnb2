import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';


class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { fetchBenches, benches } = this.props;
        return (
            <div>
                
                <BenchMap />
                <BenchIndex fetchBenches={fetchBenches} benches={benches} /> 
            </div>
        )
    }
}

export default Search;