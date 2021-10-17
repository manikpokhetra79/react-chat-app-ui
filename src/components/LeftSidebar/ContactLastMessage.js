import React from 'react';

function ContactLastMessage(props) {
  return (
    <div className="contactText">
      <p> {props.chatlog.text}</p>
      {/* <p> {props.chatlog.timestamp}</p> */}
    </div>
  );
}

export default ContactLastMessage;
