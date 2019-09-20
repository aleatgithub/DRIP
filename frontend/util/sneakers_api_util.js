export const fetchSneakers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/sneakers/',
  });
};

export const fetchSneaker = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/sneakers/${id}`
  });
};


// export const searchSneakers = (query, page) => {
//   return $.ajax({
//     method: 'GET',
//     url: '/api/sneakers/search',
//     remove: false,
//     data: { query, page }
//   });
// };

