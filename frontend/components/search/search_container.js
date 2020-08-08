import { connect } from 'react-redux';
import { fetchBenches, updateFilter } from '../../actions/benches_actions';
import  Search  from './search';

// const msp = (state) => ({
//     // benches: state.entities.benches
//     min_seating: state,
//     max_seating: state,
//     benches: Object.values(state.entities.benches)
// });

const msp = (state) => {
    // benches: state.entities.benches
    
    return {
    min_seating: state.ui.filters.max_seating,
    max_seating: state.ui.filters.min_seating,
    benches: Object.values(state.entities.benches)}
};

const mdp = (dispatch) => ({
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    // updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter,value))
});

export default connect(msp,mdp)(Search);