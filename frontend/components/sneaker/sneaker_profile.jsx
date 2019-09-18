import React from 'react';
import { Link, Route} from 'react-router-dom';
import ListingIndex from '../listing/listing_index'


const SneakerProfile = ({ props }) => {
  
  return (
    <div className="sneaker-profile-container">
      <div className="sneaker-profile">
        {props.sneaker.model}
      </div>
    </div>
  )
};

export default SneakerProfile;

