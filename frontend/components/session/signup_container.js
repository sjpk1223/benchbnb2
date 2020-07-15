import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form'


const mapDispatchToProps = dispatch => ({
    processform: formUser => dispatch(createNewUser(formUser)),
});

const msp = state => ({
    formtype: 'createNewUser',
})

export default connect(msp, mapDispatchToProps)(SessionForm);