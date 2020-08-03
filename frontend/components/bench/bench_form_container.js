import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { postBench } from '../../actions/benches_actions';

const msp = (state) => ({
    // description: state.,
    // seating:,
    // lat:,
    // lng:
})

const mdp = (dispatch) => ({
    postBench: bench => dispatch(postBench(bench))
})

export default connect(msp,mdp)(BenchForm);
