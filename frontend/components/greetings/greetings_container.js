import { connect } from 'react-redux';
import { logout, login, createNewUser } from '../../actions/session_actions';
import Greetings from './greetings';

const mapStateToProps = ( state ) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
    // redirect: (type) => dispatch(redirect(type))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greetings);
