
import { RECEIVE_CURRENT_LISTINGID } from '../actions/ui_actions';

const defaultState = {
  currentListingId: 0
}

const uiReducer = (state = defaultState, action ) => {

  Object.freeze(state);
  
   switch(action.type) {
     case RECEIVE_CURRENT_LISTINGID:
      const listingId = action.listingId;
      return Object.assign({}, state, { currentListingId: listingId });
     default: 
     return state
   }
}

export default uiReducer;