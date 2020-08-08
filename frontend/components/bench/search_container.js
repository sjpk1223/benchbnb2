import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/benches_actions';
import { updateFilter } from '../../actions/filter_actions';

import  Search  from './search';

const msp = (state) => ({
    // benches: state.entities.benches
    benches: Object.values(state.entities.benches)
});

const mdp = (dispatch) => ({
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    updateFilter: (bounds) => dispatch(updateFilter(bounds))
});

export default connect(msp,mdp)(Search);