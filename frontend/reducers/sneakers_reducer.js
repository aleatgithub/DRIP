import { RECEIVE_SNEAKERS, 
  RECEIVE_SNEAKER, 
  RECEIVE_SEARCH, 
  RESET_SNEAKERS 
} from '../actions/sneaker_actions';

  
const sneakersDefault = {};

const SneakersReducer = (state = sneakersDefault, action) => {
  
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKERS:
      return Object.assign({}, state, action.sneakers);
    case RECEIVE_SNEAKER:
      const sneaker = action.sneaker;
      return Object.assign({}, state, { [sneaker.id]: sneaker });
    case RECEIVE_SEARCH:
      return Object.assign({}, state, action.sneakers);
    case RESET_SNEAKERS: 
      return sneakersDefault;
    default:
      return state;
  }
};


export default SneakersReducer;

