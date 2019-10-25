import { RECEIVE_CART, REMOVE_CART_ITEM, CREATE_CART_ITEM, CLEAR_CART } from "../actions/cart_actions";


const CartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CART:
      console.log(action)
      if (action.cartItems) {
        newState.cartItems = action.cartItems
      }
      return newState;
    case CREATE_CART_ITEM:
      return Object.assign({}, state, action.cartItem);
    case REMOVE_CART_ITEM:
      let nextState = Object.assign({}, state);
      delete nextState[action.cartItemId];
      return nextState;
    case CLEAR_CART:
      return {};
    default:
      return state;
  }
};

export default CartItemsReducer;
