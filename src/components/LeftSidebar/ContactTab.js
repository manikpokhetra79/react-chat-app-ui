import React from 'react';
import ContactAvatar from './ContactAvatar';
import ContactLastMessage from './ContactLastMessage';
import ContactName from './ContactName';
import { Link } from 'react-router-dom';
function ContactTab(props) {
  const { image, name, chatlog, id } = props.contact;

  let length = chatlog.length - 1;

  const noMessage = {
    text: 'Conversation not initiated',
  };
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="Contact-tab" style={styles.contactTab}>
        <div>
          <ContactAvatar image={image} />
        </div>
        <div style={styles.contactText}>
          <ContactName name={name} />
          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length] : noMessage}
          />
        </div>
      </div>
    </Link>
  );
}

const styles = {
  contactTab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderTop: '1px solid #30383d',
    padding: '4px',
  },
  contactText: {
    display: 'flex',
    flexDirection: 'column',
  },
};
export default ContactTab;
