import React from 'react';
import { Link, Route} from 'react-router-dom';
import ListingIndex from '../listing/listing_index'


const SneakerProfile = ({ props, lowestPrice }) => {
  
  return (
    <div className="sneaker-profile-container">
      <div className="sneaker-profile">
        {props.sneaker.model}
      </div>
      <Link to={`/sneakers/${props.sneaker.id}/listings`}>  
        <button className="buy-new-button">
          Buy New
        </button> 
       </Link>
      <button className="buy-used-button">
        Buy Used - Sold Out
      </button>
    </div>
  )
};

export default SneakerProfile;

