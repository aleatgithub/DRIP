import * as ListingUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";


const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings
});

const receiveListing = (listing) => ({
  type: RECEIVE_LISTING, 
  listing
})

export const fetchListings = (sneakerId) => dispatch => (
  ListingUtil.fetchListings(sneakerId)
  .then((listings) => dispatch(receiveListings(listings)))
);


export const fetchListing = (sneakerId, listingId) => dispatch => (
  ListingUtil.fetchListing(sneakerId, listingId)
  .then((listing) => dispatch(receiveListing(listing)))
)



