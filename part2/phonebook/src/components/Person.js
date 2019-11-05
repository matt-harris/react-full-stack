import React from 'react';
import Button from './Button';

const Person = ({name, number, id, handleDeleteEntry}) => {
  return (
    <>
      <p>{name} {number} <Button text="Delete" onClick={() => handleDeleteEntry(id, name)} /></p>
    </>
  )
};

export default Person;