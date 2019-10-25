import React from 'react';
import { Link } from 'react-router-dom';

const ListingShow = ({ props, sneaker, listings, currentUser, addToCart }) => { 
  const listing = listings[props.match.params.listingId];
  
  const thisListing = {
    user_id: currentUser,
    listing_id: listing.id
  }

  const loginToBuy = currentUser ? (
    <Link to ="/cart_items"> 
      <button className="add-to-cart-button" onClick={() => addToCart(thisListing)}>Add to Cart</button>
    </Link>
  ) : (
    <Link to="/login"> 
    <button className="login-redirect-button">Login to Purchase</button>
    </Link>
  )

    return (
      <div className="listing-show-container">
        <div className="listing-price-box">
          <div className="price-and-icon">
            <span className="square-box">
              <i className="fas fa-square-full"></i> 
            </span>
            <span className="munny">${listing.price}.00</span>
          </div>
            <div className="lowest-price"><span>Lowest Price</span></div>
        </div>  
      
        <div className="listing-props-table">
          <div className="listing-prop">
            <span className="prop-key">Size</span>
            <span className="prop-value">{listing.size} W</span>
          </div>
          <div className="listing-prop">
            <span className="prop-key">Condition</span>
            <span className="prop-value">New</span>
          </div>
          <div className="listing-prop">
            <span className="prop-key">Box</span>
            <span className="prop-value">Good Condition</span>
          </div>
        </div>

        <Link to={`/sneakers/${sneaker.id}`}>
          <button className="back-to-listings-button">
            Cancel
          </button>
        </Link>
        {loginToBuy}
      </div>
     )
  }

export default ListingShow;

