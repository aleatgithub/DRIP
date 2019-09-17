
import React from 'react';


const SneakerPropsTable = ({ props }) => {
  let { sneaker } = props;
  
  return (
    <div className="sneaker-props-table">
      <div className="prop">
        <span className="prop-key">Release Date</span>
        <span className="prop-value">{sneaker.release_date}</span>
      </div>
      <div className="prop">
        <span className="prop-key">Colorway</span>
        <span className="prop-value">{sneaker.colorway}</span>
      </div>
      <div className="prop">
        <span className="prop-key">Brand</span>
        <span className="prop-value">{sneaker.brand}</span>
      </div>
      <div className="prop">
        <span className="prop-key">Silhouette</span>
        <span className="prop-value">{sneaker.silhouette}</span>
      </div>
      <div className="prop">
        <span className="prop-key">Designer</span>
        <span className="prop-value">{sneaker.designer}</span>
      </div>
      <div className="prop">
        <span className="prop-key">Technology</span>
        <span className="prop-value">{sneaker.technology}</span>
      </div>
    </div>
  )
};

export default SneakerPropsTable;