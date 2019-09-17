export const fetchListings = (sneakerId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/sneakers/${sneakerId}/listings`,
  });
};

