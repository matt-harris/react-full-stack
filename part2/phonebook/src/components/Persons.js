import React from 'react';
import Person from './Person';

const Persons = ({persons}) => {
  const contacts = () => persons.map(person =>
    <Person key={person.name} {...person} />
  );

  return (
    <>
      {contacts()}
    </>
  );
};

export default Persons;