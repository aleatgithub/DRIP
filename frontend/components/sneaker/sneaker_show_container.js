import { connect } from 'react-redux';
import { fetchSneaker } from '../../actions/sneaker_actions';
import SneakerShow from './sneaker_show';
import { fetchListing } from '../../actions/listing_actions';
import { updateCurrentListing } from '../../actions/ui_actions';

const  msp = (state, ownProps) => ({
  sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
  listings: state.entities.listings
});

const mdp = (dispatch) => ({
  fetchSneaker: (id) => dispatch(fetchSneaker(id)),
  // fetchListing: (sneakerId, listingId) => dispatch(fetchListing(sneakerId, listingId)),
  // updateCurrentListing: (listingId) => dispatch(updateCurrentListing(listingId))
});

export default connect(msp, mdp)(SneakerShow);

