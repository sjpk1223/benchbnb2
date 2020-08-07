import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { postBench } from '../../actions/benches_actions'

const msp = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get("lat"),
    lng: new URLSearchParams(location.search).get("lng")
});

const mdp = (dispatch) => ({
    createBench: benchForm => dispatch(postBench(benchForm))
})

export default connect(msp,mdp)(BenchForm);
