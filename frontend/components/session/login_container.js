import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mdp = dispatch => {
    return {
        processform: formUser => dispatch(login(formUser)),
    }
};

const msp = state => ({
    formtype: "login",
})

export default connect(msp, mdp)(SessionForm);