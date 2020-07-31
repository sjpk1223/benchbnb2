import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/benches_actions';

import  Search  from './search';

const msp = (state) => ({
    benches: state.entities.benches
});

const mdp = (dispatch) => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateBounds: () => dispatch(updateBounds())
});

export default connect(msp,mdp)(Search);