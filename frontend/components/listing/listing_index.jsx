import React from 'react';
import { Link, Route } from 'react-router-dom';

const ListingIndex = ( {listings } ) => {

  return (
    <div className="listing-index-container">
      <Link to={`sneakers/${listings[0].sneakerId}`}> <button id="exit-listings-button">X</button></Link>
    
      <div className="listing-header-container">
        <h3 id="buy-new">Buy New</h3>
        <h2 id="us-sizes">US Sizes</h2>
      </div>
      <div className="listing-index-items-container">

      {
        listings.map((listing, idx) => {
          return (
            <Link to={`/sneakers/${listing.sneakerId}/listings/${listing.id}`} className="listing-index-item" 
             key={idx}>
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
    </div>
  )
}

export default ListingIndex;

