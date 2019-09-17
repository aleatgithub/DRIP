import React from 'react';
import { Link } from 'react-router-dom';

const SneakerProfile = ({ props }) => {
  return (
    <div className="sneaker-profile-container">
      <div className="sneaker-profile">
        {props.sneaker.name}
      </div>
      <button className="buy-new-button">
        <Link to={`/sneakers/${props.sneaker.id}/listings`}>
          Buy New
        </Link>
      </button>

      <button className="buy-used-button">
        Buy Used - Sold Out
      </button>
    </div>
  )
};

export default SneakerProfile;
