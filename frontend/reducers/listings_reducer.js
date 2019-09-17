import { RECEIVE_LISTINGS } from '../actions/listing_actions';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      const listings = action.payload.listings
      return Object.assign({}, state, listings)
    default:
      return state;
  }
};


export default ListingsReducer;

