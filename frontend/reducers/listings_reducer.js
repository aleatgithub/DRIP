import { RECEIVE_SNEAKER } from '../actions/sneaker_actions';


const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKER:
      // const listings = action.payload.listings
      // return Object.assign({}, state, listings)
      return action.listings
    // case RECEIVE_LISTING: 
    //   const listing = action.listing
    //     return Object.assign({}, state, listing)
    default:
      return state;
  }
};


export default ListingsReducer;

