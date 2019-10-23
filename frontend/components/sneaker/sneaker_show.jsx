import React from 'react';
import ListingIndex from '../listing/listing_index';
import { Switch, Route, Link } from 'react-router-dom';
import SneakerProfile from './sneaker_profile';
import ListingShow from '../listing/listing_show';


class SneakerShow extends React.Component {
  constructor (props) {
    super(props); 
  
  }

  componentDidMount() {
    this.props.fetchSneaker(this.props.match.params.sneakerId)
    window.scrollTo(0, 0);
   }

  lowestPrice() {
    if (!Object.values(this.props.listings).length) return null;

    const sneakerListings = Object.values(this.props.listings);
    return sneakerListings.reduce((min, nextListing) => nextListing.price < min ? nextListing.price : min, sneakerListings[0].price);
  }
 
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchSneaker(this.props.match.params.sneakerId);
    }
  }
  
  render () {
    let { sneaker } = this.props;
    if (this.props.sneaker === undefined) return null;
    let listingsArr = Object.values(this.props.listings);


    return (
      <section className="sneaker-show-main">
          <div className="sneaker-show-container">

            <div className="sneaker-image-container">
              <img src={sneaker.photoUrl} alt="" className="sneaker-image" />
              <div className="sneaker-deets-path">
               <span id="sneaker-deets">{ `${sneaker.brand} / ${sneaker.silhouette} / ${sneaker.model}` }</span>
              </div>
            </div>
              <div className="sneaker-deets-container">
                <Switch>
                  <Route path="/sneakers/:sneakerId/listings/:listingId"
                   render={(props) => <ListingShow props={props} sneaker={this.props.sneaker} listings={this.props.listings} currentUser={this.props.currentUser} />}
                  />
                  <Route path="/sneakers/:sneakerId/listings"
                    render={() => <ListingIndex listings={listingsArr}  sneaker={this.props.sneaker}/>} 
                  />
                  <Route
                    path="/sneakers/:sneakerId"
                    render={() => <SneakerProfile props={this.props} lowestPrice={this.lowestPrice()} />}
                  />
                </Switch>
              </div>
            </div>

          <article className="sneaker-description-container">
            <button className="sneaker-description-button"> 
              <span> Details </span>
                <i className="fas fa-angle-down"></i>
            </button>
            <div className="sneaker-description-title">
              {sneaker.model}
            </div>
            <div className="sneaker-description">
              {sneaker.description}
            </div>
          </article>

        <div className="sneaker-props-table">
          <div className="sneaker-prop">
            <span className="prop-key">Release Date</span>
            <span className="prop-value">{sneaker.releaseDate}</span>
          </div>
          <div className="sneaker-prop">
            <span className="prop-key">Colorway</span>
            <span className="prop-value">{sneaker.colorway}</span>
          </div>
          <div className="sneaker-prop">
            <span className="prop-key">Brand</span>
            <span className="prop-value">{sneaker.brand}</span>
          </div>
          <div className="sneaker-prop">
            <span className="prop-key">Silhouette</span>
            <span className="prop-value">{sneaker.silhouette}</span>
          </div>
          <div className="sneaker-prop">
            <span className="prop-key">Designer</span>
            <span className="prop-value">{sneaker.designer}</span>
          </div>
          <div className="sneaker-prop">
            <span className="prop-key">Technology</span>
            <span className="prop-value">{sneaker.technology}</span>
          </div>
        </div>
      </section>
    )
  }
}


export default SneakerShow;



// .then(() => {
//   this.props.fetchListing((this.props.match.params.sneakerId), (this.props.listing.id))
// })