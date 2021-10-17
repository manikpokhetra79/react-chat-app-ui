import { combineReducers } from 'redux';
import contacts from './contact';
import messages from './message';
import user from './user';
export default combineReducers({ contacts, messages, user });
