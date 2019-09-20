import React from 'react';
import { Link, Route } from 'react-router-dom';
// import ListingShow from './listing_show';

const ListingIndex = ( {listings, hideListings, showOneListing, setSelectedListingId} ) => {

  return (
    <div className="listing-index-container">
      <button id="exit-listings-button" onClick={hideListings}>X</button>

      <div className="listing-header-container">
        <h3 id="buy-new">Buy New</h3>
        <h2 id="us-sizes">US Sizes</h2>
      </div>
      <div className="listing-index-items-container">

      {
        listings.map((listing) => {
          return (
            <button className="listing-index-item" onClick={() => { 
              showOneListing(listing.id); 
              setSelectedListingId(listing.id)}
            }>
              <div className="listing-size">
                <span>{listing.size}W</span>
              </div>
              <div className="listing-price">
                <span>${listing.price}</span>
              </div>
            </button>
          )
        })
      }
      </div>
    </div>
  )
}

export default ListingIndex;

// () => (showOneListing(listing.id))