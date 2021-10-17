import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState('');
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    newMessageHandler(message);
    setMessage('');
  };
  return (
    <>
      <Row className="message-input">
        <Col xs={5} lg={5}>
          <input
            type="text"
            placeholder="Send message"
            value={message}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={3} lg={4}>
          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;
