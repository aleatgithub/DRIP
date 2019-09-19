import React from 'react';



const ListingShow = ({listing, hideOneListing}) =>  {
  
    return (
      <div className="listing-show-container">

        <div className="listing-price-box">
          <div className="price-and-icon">
            <span className="square-box">
              <i class="fas fa-square-full"></i> 
            </span>
            <span className="munny">$100</span>
          </div>
            <div className="lowest-price"><span>Lowest Price</span></div>
        </div>  
      
        <div className="listing-props-table">
          <div className="listing-prop">
            <span className="prop-key">Sneaker</span>
            <span className="prop-value">{}</span>
          </div>
          <div className="listing-prop">
            <span className="prop-key">Size</span>
            <span className="prop-value">{}</span>
          </div>
          <div className="listing-prop">
            <span className="prop-key">Condition</span>
            <span className="prop-value">{}</span>
          </div>
          <div className="listing-prop">
            <span className="prop-key">Box</span>
            <span className="prop-value">Good Condition</span>
          </div>
        </div>

        <button className="back-to-listings-button" onClick={hideOneListing}>
          Back
        </button>
        <button className="add-to-cart-button">
          Add To Cart
        </button>
      </div>
    )
}


export default ListingShow;

