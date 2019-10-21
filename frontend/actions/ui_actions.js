import { searchSneakers } from '../util/sneakers_api_util';

export const RECEIVE_CURRENT_LISTINGID = "RECEIVE_CURRENT_LISTINGID";

export const updateCurrentListing = (listingId) => ({
  type: RECEIVE_CURRENT_LISTINGID, 
  listingId
})

