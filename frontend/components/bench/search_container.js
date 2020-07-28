import { connect } from 'react-redux';
import { getBenches } from '../../actions/benches_actions';
import  Search  from './search';

const msp = (state) => ({
    benches: state.entities.benches
});

const mdp = (dispatch) => ({
    fetchBenches: () => dispatch(getBenches())
});

export default connect(msp,mdp)(Search);