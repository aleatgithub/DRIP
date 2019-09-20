import { connect } from "react-redux";
import { fetchCartItems, removeCartItem, selectAllCartItems } from "../../actions/cart_items_actions";
import CartItems from "./cart_items";


const mapStateToProps = state => ({
  allCartItemsArray: selectAllCartItems(state.entities.cartItems)
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);