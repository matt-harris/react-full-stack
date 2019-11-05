import React from 'react';

const Notification = ({message}) => {
  if (message.content === '') {
    return null;
  }

  const notificationStyle = {
    color: message.type === 'error' ? 'red' : 'green',
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    borderWidth: 4,
    borderStyle: 'solid',
  }

  return (
    <div style={notificationStyle}>
      {message.content}
    </div>
  );
};

export default Notification;