
import { connect } from 'react-redux';
import ListingIndex from './listing_index';

const msp = (state, ownProps) => ({
  listings: Object.values(state.entities.listings)
});

const mdp = (dispatch) => ({
  fetchSneaker: (id) => dispatch(fetchSneaker(id)),
  fetchListings: (sneakerId) => dispatch(fetchListings(sneakerId))
});

export default connect(msp, mdp)(ListingIndex);