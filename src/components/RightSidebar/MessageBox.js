import React, { useEffect, useState } from 'react';
import LeftChatBubble from './LeftChatBubble';
import { useDispatch } from 'react-redux';
import RightChatBubble from './RightChatBubble';
import MessageInput from './MessageInput';
import { addNewMessage } from '../../actions/contact';
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);
  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: '12:00',
      sender: 'me',
      message_id: length + 1,
    };
    dispatch(addNewMessage(object, props.user.id));
    // updatelength
    setLength(object.message_id);

    setChat([...chat, object]);
  };

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

        <MessageInput newMessageHandler={updateMesssages} />
      </div>
    </>
  );
}

export default MessageBox;
