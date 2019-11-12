import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removeCartItem(this.props.cartItem.id);
    window.location.reload();
  }

  render() {
    return (
      <li className="cart-item-container">
        <Link to={`/sneakers/${this.props.cartItem.sneakerId}`}>
          <div className="cart-item-image-container">
            <img src={this.props.cartItem.photoUrl} className="cart-item-image" alt="" />
          </div>
        </Link>

        <ul className="cart-item-info-container">
          <Link to={`/sneakers/${this.props.cartItem.sneakerId}`}>
            <li className="cart-item-title">
              {this.props.cartItem.sneakerModel}
            </li>
          </Link>
          <li className="cart-item-subtitle">
            Sku {this.props.cartItem.sku}
          </li>
          <li className="cart-item-subtitle">
            Size {this.props.cartItem.size}
          </li>
          <li className="cart-item-subtitle">
            ${this.props.cartItem.price}
          </li>
          <li>
            <button className="remove-item-button" onClick={this.handleClick}>
              Remove
            </button>
          </li>
        </ul>
      </li>
    );
  }
}

export default CartItem;