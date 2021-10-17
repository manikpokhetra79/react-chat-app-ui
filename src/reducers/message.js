import { ADD_MESSAGE } from '../actions/actionTypes';

export default function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];

    default:
      return state;
  }
}
