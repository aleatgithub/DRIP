// import { RECEIVE_LISTINGS } from '../actions/listing_actions';
import { RECEIVE_SNEAKER } from '../actions/sneaker_actions';
// import { RECEIVE_LISTING } from '../actions/listing_actions'

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKER:
      const listings = action.payload.listings
      return Object.assign({}, state, listings)
    // case RECEIVE_LISTING: 
    //   const listing = action.listing
    //     return Object.assign({}, state, listing)
    default:
      return state;
  }
};


export default ListingsReducer;

