import {connect} from 'react-redux';
import { fetchBench } from '../../actions/benches_actions';
import BenchShow from './bench_show';

// we need access to the URL to get the ID
// so we need ownprops(similar to this.props but we access it inside msp)
const msp = (state, oP) => ({
    bench: state.entities.benches[oP.match.params.benchId] // this is the way it is written in our path
});

const mdp = (dispatch) => ({
    fetchBench: (benchId) => dispatch(fetchBench(benchId))
})

export default connect(msp,mdp)(BenchShow);