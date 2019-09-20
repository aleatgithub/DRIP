import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import SneakersReducer from './sneakers_reducer';
import ListingsReducer from "./listings_reducer";
import CartItemsReducer from "./cart_items_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  sneakers: SneakersReducer,
  listings: ListingsReducer,
  cartItems: CartItemsReducer,
});

export default entitiesReducer;