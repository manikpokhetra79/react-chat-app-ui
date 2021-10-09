import { FETCH_CONTACTS } from '../actions/actionTypes';

export default function contacts(state = [], action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return action.contacts;

    default:
      return state;
  }
}
