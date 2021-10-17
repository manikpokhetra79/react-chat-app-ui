import React from 'react';
import { useSelector } from 'react-redux';
function ProfileHeader() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="header">
        <img className="avatar" src={user.image} alt="profile-pic" />
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader;
