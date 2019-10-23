import React from 'react';
import Link from 'react-router-dom';

const ListingShow = ({ props, sneaker, listings, currentUser }) => { 
  const listing = listings[props.match.params.listingId];


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

        <Link to={`/sneakers/${listings.sneaker_id}`}>
          <button className="back-to-listings-button">
            Cancel
          </button>
        </Link>

        <button className="add-to-cart-button">
          Add To Cart
        </button>
      </div>
     )
  }

export default ListingShow;

