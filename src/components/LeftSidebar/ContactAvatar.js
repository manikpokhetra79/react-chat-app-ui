import React from 'react';

function ContactAvatar({ image }) {
  return (
    <div>
      <img src={image} alt="user-avatar" style={styles.avatar} />
    </div>
  );
}
const styles = {
  avatar: {
    width: '49px',
    height: '49px',
    borderRadius: '50%',
    margin: '0 10px',
  },
};
export default ContactAvatar;
