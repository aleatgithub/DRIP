import { connect } from 'react-redux';
import { fetchSneaker } from '../../actions/sneaker_actions';
import SneakerShow from './sneaker_show';
import { fetchListing } from '../../actions/listing_actions';
import { updateCurrentListing } from '../../actions/ui_actions';
import { addToCart } from '../../actions/cart_actions';

const  msp = (state, ownProps) => ({
  sneaker: state.entities.sneakers[ownProps.match.params.sneakerId],
  listings: state.entities.listings,
  currentUser: state.session.id
});

const mdp = (dispatch) => ({
  fetchSneaker: (id) => dispatch(fetchSneaker(id)),
  addToCart: (cartItem) => dispatch(addToCart(cartItem))
});

export default connect(msp, mdp)(SneakerShow);

