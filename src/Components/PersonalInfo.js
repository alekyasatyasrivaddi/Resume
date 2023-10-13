import React from 'react';

function PersonalInfo({ name, email, phone, address }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default PersonalInfo;