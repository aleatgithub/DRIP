import React from 'react';

class SneakerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sneaker-item">
          <div className="sneaker-item-image-container">
            <img src={this.props.sneaker.photoUrl} className="sneaker-item-image" alt="" />
            <p className="sneaker-item-name">{this.props.sneaker.model}</p>
          </div>
      </div>
    );
  }
}

export default SneakerIndexItem;