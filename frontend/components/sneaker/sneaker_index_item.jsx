import React from 'react';

class SneakerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sneaker-item">
        <li className="sneaker-item-name">
          <div className="sneaker-item-image-container">
            <img src="https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/025/302/850/original/482560_01.jpg.jpeg?1567029656" className="sneaker-item-image" alt="" />
          </div>
          <span>{this.props.sneaker.name}</span>
        </li>
      </div >
    );
  }
}

export default SneakerIndexItem;