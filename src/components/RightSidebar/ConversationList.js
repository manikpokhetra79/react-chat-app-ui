import React from 'react';
import '../stylesheets/rightSidebar.css';
function ConversationList(props) {
  console.log(props);
  const { contacts } = props;
  const { id } = props.match.params;
  const user = contacts.find((contact) => contact.id == id);
  return (
    <div>
      {props.match.params.id}
      {user.name}
    </div>
  );
}

export default ConversationList;
