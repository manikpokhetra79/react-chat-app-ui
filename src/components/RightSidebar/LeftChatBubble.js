import React from 'react';

function LeftChatBubble({ message, name }) {
  return (
    <>
      <div className="left-bubble ">
        <div className="text-message">
          <p className="name">{name}</p>
          <p className="message">{message.text}</p>
          <span className="message-timestamp">{message.timestamp}</span>
        </div>
        <div className="bubble-arrow"></div>
      </div>
    </>
  );
}

export default LeftChatBubble;
