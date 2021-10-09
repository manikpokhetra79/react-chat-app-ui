import { FETCH_CONTACTS } from './actionTypes';
import { data } from '../utils/users';

export function updateContacts(contacts) {
  return {
    type: FETCH_CONTACTS,
    contacts: contacts,
  };
}
export function fetchContacts() {
  return (dispatch) => {
    const contacts = data.profile.contacts;

    dispatch(updateContacts(contacts));
  };
}
