
import { RECEIVE_CURRENT_LISTINGID, RECEIVE_SEARCH } from '../actions/sneaker_actions';


const defaultState = {
  currentListingId: 0,
  sneakerCount: 0

}

const uiReducer = (state = defaultState, action ) => {

  Object.freeze(state);
  
   switch(action.type) {
     case RECEIVE_CURRENT_LISTINGID:
      const listingId = action.listingId;
      return Object.assign({}, state, { currentListingId: listingId });
      case RECEIVE_SEARCH:
        return { sneakerCount: action.sneakerCount };
     default: 
     return state
   }
}

export default uiReducer;