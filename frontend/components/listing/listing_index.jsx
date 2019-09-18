import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndex = ( {listings, hideListings} ) => {


  return (
    <div className="listing-index-container" >
      <div className="listing-header-container">
        <button id="exit-listings-button" onClick={hideListings}> x </button>
        <h3 id="buy-new">Buy New</h3>
        <h2 id="us-sizes">US Sizes</h2>
      </div>
      {
        listings.map((listing) => {
          return (
            <Link to={`/sneakers/${listing.sneaker_id}/listings/`} className="listing-index-item">
              <div className="listing-size">
                <span>{listing.size}W</span>
              </div>
              <div className="listing-price">
                <span>${listing.price}</span>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default ListingIndex;