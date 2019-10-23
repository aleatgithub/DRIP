import { connect } from 'react-redux';
import ListingIndex from './listing_index';

mapStateToProps = (state, ownProps) => ({
  listings: Object.values(state.entities.listings)
});

mapDispatchToProps = (dispatch) => ({
  fetchSneaker: id => dispatch(fetchSneaker(id)),
  fetchListings: sneakerId => dispatch(fetchListings(sneakerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);
