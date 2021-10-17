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
              m.sender === 'me' ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={'John Doe'}
                  image={
                    'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  }
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
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
