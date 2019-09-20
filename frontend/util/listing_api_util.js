export const fetchListings = (sneakerId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/sneakers/${sneakerId}/listings`,
  });
};


export const fetchListing = (sneakerId, listingId) => {
  return $.ajax({
    method: 'GET', 
    url: `/api/sneakers/${sneakerId}/listings/${listingId}`,
  });
}

