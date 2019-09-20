import React from 'react';


class ListingShow extends React.Component {
    constructor (props) {
      super(props);    
      
      this.state = {
        listing : {
          price: "", 
          size: "", 
          sneakerId: 0,
        },
      }
    }

  componentDidMount() {
   this.props.fetchListing((parseInt(this.props.match.params.sneakerId)), (this.props.listingId)).then(() => (
     this.setState({
      listing: this.props.listing 
    })
   ))
    this.props.fetchSneaker(this.props.listing.sneakerId);
  };

  render () {
    // debugger
   if (this.props.listing === undefined) return null; 
    // let { listing } = this.state; 
    return (
      <div className="listing-show-container">
        <div className="listing-price-box">
          <div className="price-and-icon">
            <span className="square-box">
              <i className="fas fa-square-full"></i> 
            </span>
            <span className="munny">${this.props.listing.price}.00</span>
          </div>
            <div className="lowest-price"><span>Lowest Price</span></div>
        </div>  
      
        <div className="listing-props-table">
          <div className="listing-prop">
            <span className="prop-key">Size</span>
            <span className="prop-value">{this.props.listing.size} W</span>
          </div>
          <div className="listing-prop">
            <span className="prop-key">Condition</span>
            <span className="prop-value">New</span>
          </div>
          <div className="listing-prop">
            <span className="prop-key">Box</span>
            <span className="prop-value">Good Condition</span>
          </div>
        </div>

        <button className="back-to-listings-button" onClick={this.props.hideOneListing}>
          Back
        </button>
        <button className="add-to-cart-button">
          Add To Cart
        </button>
      </div>
    )
  }
}

export default ListingShow;

