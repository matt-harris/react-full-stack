import React from 'react';

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 16,
  }

  return (
    <div style={footerStyle}>
      <em>Note app, Department of Computer Science, University of Helsinki 2019</em>
    </div>
  );
};

export default Footer;