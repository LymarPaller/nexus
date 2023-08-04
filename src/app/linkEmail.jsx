import React from 'react';

const EmailLink = ({ recipient }) => {
 
  const mailtoLink = `mailto:${recipient}`;

  return (
    <div>
      <a href={mailtoLink} className="email-link">{recipient}</a>
    </div>
  );
};

export default EmailLink;