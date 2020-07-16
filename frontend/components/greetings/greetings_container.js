import { connect } from 'react-redux';
import { logout, login, createNewUser } from '../../actions/session_actions';
import Greetings from './greetings';

const mapStateToProps = ( state ) => {
    debugger
    return ({
        currentUser: state.session.currentUser
    });

}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    createNewUser: (formUser) => dispatch(createNewUser(formUser)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greetings);
