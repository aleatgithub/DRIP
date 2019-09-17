import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndex = ({ listings }) => {
  return (
    <div className="listing-index-container" >
      <div className="listing-header-container">
        <h3 id="buy-new">Buy New</h3>
        <h2 id="us-sizes">US Sizes</h2>
      </div>
      {
        listings.map((listing, idx) => {
          return (
            <Link to="/#" className="listing-index-item">
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