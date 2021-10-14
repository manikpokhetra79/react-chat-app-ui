import React from 'react';
import ContactTab from './ContactTab';
import '../stylesheets/ContactList.css';

function ContactList({ contacts }) {
  // need contact tab component
  return (
    <>
      <div style={styles.contactList} className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
const styles = {
  contactList: {
    overflowY: 'scroll',
    height: '85vh',
    zIndex: '2',
    backgroundColor: '#131C21',
  },
};
export default ContactList;
