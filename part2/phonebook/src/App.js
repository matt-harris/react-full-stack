import React, {useState} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const filterPersons = newFilter.length > 0
    ? persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
    : persons;

  const addContact = (event) => {
    event.preventDefault();

    persons.forEach(person => {
      if (person.name === newName) {
        alert(`${newName} is already added to the phonebook`);
      } else {
        const personObject = {
          name: newName,
          number: newNumber,
        };

        setPersons(persons.concat(personObject));
        setNewName('');
        setNewNumber('');
      }
    });
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange} />

      <h3>Add a new contact</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={addContact}
      />

      <h3>Numbers</h3>
      <Persons persons={filterPersons} />
    </>
  );
};

export default App;
