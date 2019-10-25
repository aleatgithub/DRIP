import React from 'react';
import { Link } from 'react-router-dom';
// import CartItem from './cart_item';

class CartItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.fetchCart();
  }

  cartTotal(cartItems) {
    this.orderTotal = 0
    cartItems.forEach(cartItem => {
      this.orderTotal += cartItem.price;
    });
  }

  render() {
    return (
         <div>
        <p> PLACEHOLDER FOR CART</p>
      </div>
    )
  }
}

export default CartItemsIndex;