import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';

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
    let { cartItems } = this.props;
    if (!cartItems) return null;
    this.cartTotal(cartItems);

    // let checkoutMsg =  (
    //   <div className="checkout-modal">
    //     Hi! I hope you like what you've seen so far. DRIP is an exercise in 
    //     building full stack web applications with Ruby, Rails, Javascript, and React. I will not be adding 
    //     checkout functionality to it. However: I'm working on a website for a small business and it will 
    //     need a "checkout" feature. If you're interested, you can find this and other projects
    //     on my github. Thank you:)
    //     <a href="https://github.com/aleatgithub"></a>
    //   </div>
    // )
    let cartEmptyMsg = !cartItems.length? (
      <div className="cart-empty-msg">
        No items in your shopping cart.
      </div>
    ) : (
      <div></div>
    )

    return (
      <div className="cart-container">
        <div className="cart-index-container">
           <span className="num-cart-items">{cartItems.length} Items</span>
            <span className="cart-header">Shopping Cart</span>
           <ul className="cart-items-container">
             {
               cartItems.map((cartItem, idx) => {
                 return (
                   <CartItem cartItem={cartItem} key={idx} removeCartItem={this.props.removeCartItem} />
                 )
               })
             }
           </ul>
           {cartEmptyMsg}
        </div>

        <div className="order-summary-container">
          <div className="order-sum-header">
             Order Summary
          </div>
          <div className="order-details-container">
             <ul className="order-total-container"> 
                {/* {myOrderDetails} */}
                <li className="order-total-fact">
                  <span className="order-total-key">Total</span>
                  <span className="order-total-value">${this.orderTotal}</span>
                </li>
             </ul>   
          </div>
          <div className="order-buttons">
          <Link to="/sneakers">
            <button className="cancel-button">
              Shop More
            </button>
          </Link>
          <button className="checkout-button"> 
            Checkout
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItemsIndex;