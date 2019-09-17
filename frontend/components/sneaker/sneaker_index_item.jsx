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
          <span className="sneaker-item-name">{this.props.sneaker.name}</span>
          </div>
      </div>
    );
  }
}

export default SneakerIndexItem;