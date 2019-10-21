import * as SneakerUtil from '../util/sneakers_api_util';
export const RECEIVE_SNEAKERS = "RECEIVE_SNEAKERS";
export const RECEIVE_SNEAKER = "RECEIVE_SNEAKER";
export const RESET_SNEAKERS = "RESET_SNEAKERS";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

const receiveSneakers = (sneakers) => ({
  type: RECEIVE_SNEAKERS,
  sneakers: sneakers,
});

const receiveSneaker = ( {sneaker, listings}) => ({
  type: RECEIVE_SNEAKER,
  sneaker, 
  listings
})

const receiveSearch = ({ sneakers, sneaker_count }) => ({
  type: RECEIVE_SEARCH,
  sneakers: sneakers,
  sneakerCount: sneaker_count
})

export const resetSneakers = () => ({
  type: RESET_SNEAKERS
})

export const fetchSneakers = () => dispatch => SneakerUtil.fetchSneakers()
  .then( sneakers => dispatch(receiveSneakers(sneakers)));

export const fetchSneaker = (id) => dispatch => SneakerUtil.fetchSneaker(id)
  .then(payload => dispatch(receiveSneaker(payload)));

export const searchSneakers = (query, page) => dispatch => SneakerUtil.searchSneakers(query, page)
  .then(payload => dispatch(receiveSearch(payload)));
