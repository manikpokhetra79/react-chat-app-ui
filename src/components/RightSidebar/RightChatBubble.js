import React from 'react';

function RightChatBubble({ message, name }) {
  return (
    <>
      <div className="right-bubble ">
        <div className="text-message">
          <p className="name">{name}</p>
          <p className="message">{message.text}</p>
          <span className="message-timestamp">{message.timestamp}</span>
        </div>
        <div className="bubble-arrow bubble-arrow-alt"></div>
      </div>
    </>
  );
}

export default RightChatBubble;
