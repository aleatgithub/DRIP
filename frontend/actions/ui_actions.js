// import { RECEIVE_LISTING } from "./listing_actions";

export const RECEIVE_CURRENT_LISTINGID = "RECEIVE_CURRENT_LISTINGID";


export const updateCurrentListing = (listingId) => ({
  type: RECEIVE_CURRENT_LISTINGID, 
  listingId
})


