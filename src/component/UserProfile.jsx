import React from 'react';

function UserProfile() {
  return (
    <div>
      <h1>Mark</h1>
      <img
        src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Mark"
        className="user-profile-pic"
      />
      <h2>Hobbies</h2>
      <ul>
        <li>Badminton</li>
        <li>Chess</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
}

export default UserProfile;
