import { connect } from 'react-redux';
import { fetchSneaker } from '../../actions/sneaker_actions';
import SneakerShow from './sneaker_show';

const  msp = (state, ownProps) => ({
  sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
  listings: Object.values(state.entities.listings)
  // showingListings: ownProps.location.pathname.includes('listings')
});

const mdp = (dispatch) => ({
  fetchSneaker: (id) => dispatch(fetchSneaker(id))
});

export default connect(msp, mdp)(SneakerShow);

