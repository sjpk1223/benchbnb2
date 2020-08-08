import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';


class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { benches, updateFilter, min_seating, max_seating } = this.props;
        return (
            <div>
                <BenchMap benches={benches} updateFilter={updateFilter} />
                <FilterForm
                    min_seating={min_seating}
                    max_seating={max_seating}
                    updateFilter={updateFilter}
                />
                <BenchIndex benches={benches} /> 
            </div>
        )
    }
}

export default Search;