import React from 'react';
import ContactAvatar from './Left Sidebar Components/ContactAvatar';
import ContactLastMessage from './Left Sidebar Components/ContactLastMessage';
import ContactName from './Left Sidebar Components/ContactName';
function ContactTab(props) {
  const { image, name, chatlog } = props.contact;

  let length = chatlog.length - 1;

  const noMessage = {
    text: 'Conversation not initiated',
  };
  return (
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
