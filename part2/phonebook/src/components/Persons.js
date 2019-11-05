import React from 'react';
import Person from './Person';

const Persons = ({persons, handleDeleteEntry}) => {
  const contacts = () => persons.map(person =>
    <Person key={person.id} {...person} handleDeleteEntry={handleDeleteEntry} />
  );

  return (
    <>
      {contacts()}
    </>
  );
};

export default Persons;