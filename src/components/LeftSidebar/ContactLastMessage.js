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
    color: 'rgb(168, 170, 153)',
  },
};
export default ContactLastMessage;
