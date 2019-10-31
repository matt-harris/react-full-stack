import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, []);

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
