import React from 'react';

function ContactLastMessage(props) {
  return (
    <div>
      <p style={styles.contactText}> {props.chatlog.text}</p>
    </div>
  );
}
const styles = {
  contactText: {
    fontSize: '14px',
    color: '#2F2F2F',
  },
};
export default ContactLastMessage;
