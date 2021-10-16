import React from 'react';
import '../stylesheets/rightSidebar.css';
import MessageBox from './MessageBox';
function ConversationList(props) {
  console.log(props);
  const { contacts } = props;
  const { id } = props.match.params;
  const user = contacts.find((contact) => contact.id == id);

  return <>{user && <MessageBox user={user} />}</>;
}

export default ConversationList;
