import { RECEIVE_SNEAKER, RECEIVE_LISTING } from '../actions/sneaker_actions';


const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKER:
      return action.listings;
    case RECEIVE_LISTING: 
      const listing = action.listing
        return Object.assign({}, state, listing)
    default:
      return state;
  }
};


export default ListingsReducer;

