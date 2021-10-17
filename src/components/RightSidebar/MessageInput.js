import React from 'react';

function MessageInput() {
  return (
    <div className="message-input">
      <input type="text" placeholder="Send message" />
      <button id="send-button">Send</button>
    </div>
  );
}

export default MessageInput;
