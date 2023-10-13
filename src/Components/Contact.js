import React from 'react';

function Contact({ email, phone, address }) {
  return (
    <div>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default Contact;