import { connect } from 'react-redux';
import { fetchSneaker } from '../../actions/sneaker_actions';
import SneakerShow from './sneaker_show';
import { fetchListing } from '../../actions/listing_actions';
import { updateCurrentListing } from '../../actions/ui_actions';

const  msp = (state, ownProps) => ({
  sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
  listings: Object.values(state.entities.listings),
  showingListings: ownProps.location.pathname.includes('listings')
  // listing: state.ui.currentListingId !== 0 ? state.entities.listings[state.ui.currentListingId] : {}
});

const mdp = (dispatch) => ({
  fetchSneaker: (id) => dispatch(fetchSneaker(id)),
  fetchListing: (sneakerId, listingId) => dispatch(fetchListing(sneakerId, listingId)),
  updateCurrentListing: (listingId) => dispatch(updateCurrentListing(listingId))
});

export default connect(msp, mdp)(SneakerShow);

