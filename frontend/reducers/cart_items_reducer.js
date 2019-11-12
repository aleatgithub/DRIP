import { RECEIVE_CART, REMOVE_CART_ITEM, CREATE_CART_ITEM, CLEAR_CART } from "../actions/cart_actions";


const CartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CART:

      if (action.cartItems) {
        // newState.cartItems = action.cartItems
        return Object.assign({}, state, action.cartItems)
      }
      return newState;
    case CREATE_CART_ITEM:
      return Object.assign({}, state, action.cartItem);
    case REMOVE_CART_ITEM:
      // let nextState = Object.assign({}, state);
      delete state[action.cartItemId];
      return state;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
};

export default CartItemsReducer;
