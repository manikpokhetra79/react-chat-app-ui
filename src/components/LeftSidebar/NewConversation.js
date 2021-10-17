import React from 'react';

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo" onClick={handleClick}>
      <p>New Conversation</p>
      <i className="fas fa-2x fa-user-plus"></i>
    </div>
  );
}

export default NewConversation;
