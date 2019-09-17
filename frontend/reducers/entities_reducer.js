import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import SneakersReducer from './sneakers_reducer';
import ListingsReducer from "./listings_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  sneakers: SneakersReducer,
  listings: ListingsReducer
});

export default entitiesReducer;