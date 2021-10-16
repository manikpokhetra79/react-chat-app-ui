import React, { useEffect, useState } from 'react';
import LeftChatBubble from './LeftChatBubble';
import RightChatBubble from './RightChatBubble';
import MessageInput from './MessageInput';
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  useEffect(() => {
    setChat(props.user.chatlog);
  }, [props]);
  console.log(chat);
  return (
    <>
      <div className="message-box">
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender == 'me' ? (
                <RightChatBubble message={m} key={index} name={'John Doe'} />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                />
              )
            )}
          </div>
        )}

        <MessageInput />
      </div>
    </>
  );
}

export default MessageBox;
