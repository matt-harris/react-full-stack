import React from 'react';

const PersonForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        Name: <input value={name} onChange={onNameChange} />
      </div>
      <div>
        Number: <input value={number} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;