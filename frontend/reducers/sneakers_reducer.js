import { RECEIVE_SNEAKERS, RECEIVE_SNEAKER } from '../actions/sneaker_actions';

const SneakersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNEAKERS:
      return action.sneakers;
    case RECEIVE_SNEAKER:
      const sneaker = action.payload.sneaker;
      return Object.assign({}, state, { [sneaker.id]: sneaker });
    default:
      return state;
  }
};


export default SneakersReducer;

