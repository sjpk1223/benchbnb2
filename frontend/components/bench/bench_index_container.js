import { connect } from 'react-redux';
import { getBenches } from '../../actions/benches_actions';
import  BenchIndex  from './bench_index';

const msp = (state) => ({
    benches: state.entities.benches
});

const mdp = (dispatch) => ({
    fetchBenches: () => dispatch(getBenches())
});

export default connect(msp,mdp)(BenchIndex);