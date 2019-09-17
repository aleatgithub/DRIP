import React from 'react';
import ListingIndex from '../listing/listing_index';
import SneakerPropsTable from './sneaker_props_table'
import { Link } from 'react-router-dom';

class SneakerShow extends React.Component {
  constructor (props) {
    super(props); 
    this.state = {
      showingListings: this.props.showingListings
    }
  }

  componentDidMount() {
    this.props.fetchSneaker(this.props.match.params.sneakerId);
  }

  //showListings will help us check if we're in the listings index container. 

  componentDidUpdate(previousProps) {
    
    if (previousProps.location.pathname !== this.props.location.pathname){
      this.setState({
        showingListings: true
      });
    }
  }

  render () {
    let { sneaker } = this.props;
   <section>
      <div className="sneaker-show-container"> 

        <div className="sneaker-image-container">
            <div className="sneaker-deets-path">
              {sneaker.brand} / {sneaker.silhouette} / {sneaker.name}
            </div>
           </div>

           <div className="sneaker-deets-container">
             { this.state.showListings ? <ListingIndex listings={this.props.listings}/> : <SneakerProfile/> }
           </div>
      </div>

      <div className="sneaker-description-container">
        <p>{this.props.description}</p>
      </div>

      
      <SneakerPropsTable/>
   </section>
  }
}

export default SneakerShow;