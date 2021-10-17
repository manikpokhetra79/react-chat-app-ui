import { ADD_MESSAGE } from './actionTypes';

export function addNewMessage(message) {
  return { type: ADD_MESSAGE, message };
}
