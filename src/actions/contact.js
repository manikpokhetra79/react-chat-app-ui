import { FETCH_CONTACTS, ADD_MESSAGE } from './actionTypes';

export function updateContacts(contacts) {
  return {
    type: FETCH_CONTACTS,
    contacts: contacts,
  };
}
