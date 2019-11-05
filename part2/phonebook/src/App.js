import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/Person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const handleDeleteEntry = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .deleteEntry(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        });
    }
  }

  const updatePhonebook = (name) => {
    const p = persons.find(person => person.name === name);
    const msg = `${name} is already added to the phonebook, replace the old number with the new one?`;

    if (!p) return;

    if (window.confirm(msg)) {
      personService
        .update(p.id, {...p, number: newNumber})
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson));
          setNewName('');
          setNewNumber('');
        })
    }
    return true;
  }

  const filterPersons = newFilter.length > 0
    ? persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
    : persons;

  const addContact = (event) => {
    event.preventDefault();

    if (updatePhonebook(newName)) return;

    const personObject = {
      name: newName,
      number: newNumber,
    };

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
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
      <Persons persons={filterPersons} handleDeleteEntry={handleDeleteEntry} />
    </>
  );
};

export default App;
