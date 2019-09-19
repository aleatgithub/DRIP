import React from 'react';
import ListingIndex from '../listing/listing_index';
// import SneakerPropsTable from './sneaker_props_table'
import SneakerProfile from './sneaker_profile';
import ListingShow from '../listing/listing_show'
import { Link } from 'react-router-dom';

class SneakerShow extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      showingListings: false,
      showingOneListing: false
    }
    this.showListings = this.showListings.bind(this);
    this.hideListings = this.hideListings.bind(this);
    this.showOneListing = this.showOneListing.bind(this);
    this.renderSubComponents = this.renderSubComponents.bind(this);
    this.hideOneListing = this.hideOneListing.bind(this);

  }

  componentDidMount() {
    this.props.fetchSneaker(this.props.match.params.sneakerId)
    window.scrollTo(0, 0);
  }

  showListings () {
    this.setState({
      showingListings: true
    })
  }

  hideListings () {
    this.setState({
      showingListings: false
    })
  }

  showOneListing () {
    this.setState({
      showingOneListing: true,
      showingListings: false
    })
  }

  hideOneListing() {
    this.setState({
      showingOneListing: false,
      showingListings: true
    })
  }

  renderSubComponents() {
      if (this.state.showingListings) {
        return <ListingIndex listings={this.props.listings} hideListings={this.hideListings} fetchSneaker={this.props.fetchSneaker} showOneListing={this.showOneListing}/>
      } else if (this.state.showingOneListing) {
        return <ListingShow hideOneListing={this.hideOneListing}/>
      } else {
        return <SneakerProfile props={this.props}/>
      }
    }

  render () {
    let { sneaker } = this.props;

    if (this.props.sneaker === undefined) return null;

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
                {this.renderSubComponents()}
  
                <button className="buy-new-button" onClick={this.showListings}>
                  Buy New
                  </button>
                <button className="buy-used-button">
                  Buy Used - Sold Out
                </button>
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
            <span className="prop-value">{sneaker.release_date}</span>
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



