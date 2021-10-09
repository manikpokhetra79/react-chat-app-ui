import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact';
import '../App.css';
function App(props) {
  useEffect(() => {
    props.dispatch(fetchContacts());
  });
  const { contacts } = props;
  return (
    <div>
      {contacts.map((contact) => (
        <div>
          <h1>{contact.name}</h1>
          <div>
            {contact.chatlog.length > 0 &&
              contact.chatlog.map((message) => (
                <p className={`${message.sender}-message`}>
                  {' '}
                  {message.text} ,{message.timestamp}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}
export default connect(mapStateToProps)(App);
