import React from 'react';

function Education({ school, intermediate, Btech }) {
  return (
    <div>
      <p>School: {school}</p>
      <p>Intermediate: {intermediate}</p>
      <p>Btech: {Btech}</p>
    </div>
  );
}

export default Education;