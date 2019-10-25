import * as CartItemsApiUtil from '../util/cart_items_api_util';

export const RECEIVE_CART = 'RECEIVE_CART';
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CREATE_CART_ITEM = 'CREATE_CART_ITEM';

export const clearCart = () => ({
  type: CLEAR_CART
});

const receiveCart = ( cart_items ) => ({
  type: RECEIVE_CART,
  cartItems: cart_items
});

const createCartItem = (cart_item) => ({
  type: CREATE_CART_ITEM,
  cartItem: cart_item 
});

const deleteCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  cartItemId: id
});

export const fetchCart = () => dispatch => (
  CartItemsApiUtil.fetchCart().then(payload => {
    console.log(payload)
    return dispatch(receiveCart(payload))
  })
);

export const removeCartItem = (id) => dispatch => (
  CartItemsApiUtil.removeFromCart(id).then((id) => dispatch(deleteCartItem(id)))
);

export const addToCart = (cartItem) => dispatch => (
   CartItemsApiUtil.addToCart(cartItem).then((cartItem) => dispatch(createCartItem(cartItem)))
);
