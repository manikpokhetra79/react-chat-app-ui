import React from 'react';

function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}
const styles = {
  contactText: {
    fontSize: '16px',
    color: 'rgb(233 233 229)',
    marginBottom: '3px',
  },
};
export default ContactName;
