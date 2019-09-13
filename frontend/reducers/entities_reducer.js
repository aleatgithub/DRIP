import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import SneakersReducer from './sneakers_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  sneakers: SneakersReducer
});

export default entitiesReducer;