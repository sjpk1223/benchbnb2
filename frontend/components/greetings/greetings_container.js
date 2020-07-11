//  Presentational components are concerned with how things look 
// and container components are concerned with how things work.

import { connect } from 'react-redux';
import { createNewUser, login, logout } from '../../session_actions' // action creator
import Greetings from '../greetings'; // presentational component to connect

const mapStateToProps = (state) => ({ // map slice of state to props object
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({ // create action dispatcher
    resetItems: () => dispatch(resetItems());
});

const GreetingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Greetings);

export default ListContainer;