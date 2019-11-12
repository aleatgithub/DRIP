import { connect } from "react-redux";
import { fetchCart, clearCart, removeCartItem } from '../../actions/cart_actions'
import CartItems from "./cart_items";

const mapStateToProps = state => ({
  cartItems: Object.values(state.entities.cart)
});

const mapDispatchToProps = dispatch => ({
  fetchCart:  () => dispatch(fetchCart()),
  clearCart: () => dispatch(clearCart()),
  removeCartItem: (id) => dispatch(removeCartItem(id))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);