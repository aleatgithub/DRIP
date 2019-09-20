import * as CartItemsApiUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
// export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';

export const receiveCartItems = cartItems => ({
  type: RECEIVE_CART_ITEMS,
  cartItems
});

export const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem
});

export const deleteCartItem = cartItemId => ({
  type: REMOVE_CART_ITEM,
  cartItemId
})

export const selectAllCartItems = (allCartItems) => {
  return Object.keys(allCartItems).map(id => allCartItems[id]);
}

export const fetchCartItems = () => dispatch => (
  CartItemsApiUtil.fetchCartItems().then(cartItems => (
    dispatch(receiveCartItems(cartItems))
  ))
);

export const addToCart = cartItem => dispatch => {
  return CartItemsApiUtil.addToCart(cartItem).then(cartItem => {
    return dispatch(receiveCartItem(cartItem))
  })
};


export const removeCartItem = cartItemId => dispatch => (
  CartItemsApiUtil.removeCartItem(cartItemId)
    .then(() => dispatch(deleteCartItem(cartItemId)))
);

