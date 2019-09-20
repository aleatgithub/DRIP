import { connect } from 'react-redux';
import { fetchSneaker } from '../../actions/sneaker_actions';
import { fetchListing } from '../../actions/listing_actions'
import { withRouter } from 'react-router-dom';
import ListingShow from './listing_show';

const msp = (state, ownProps) => ({
  listing: state.ui.currentListingId !== 0 ? state.entities.listings[state.ui.currentListingId] : {},
  sneaker: state.entities.sneakers[ownProps.match.params.sneakerId]
});

const mdp = (dispatch) => ({
  fetchListing: (sneakerId, listingId) => dispatch(fetchListing(sneakerId, listingId)),
  fetchSneaker: (id) => dispatch(fetchSneaker(id))
});

export default withRouter(connect(msp, mdp)(ListingShow));

  