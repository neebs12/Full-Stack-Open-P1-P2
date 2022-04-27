import { useState } from 'react'

import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleNameFilterChange = event => setNameFilter(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    // if the name already exists, then we do not invoke the setPersons state changing function

    let names = persons.map(person => person.name);
    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    // capture
    setPersons(persons.concat([{
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }]));

    // reset relevant states
    setNewName('');
    setNewNumber('');
  };

  // display the numbers below
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm 
        nameFilter={nameFilter}
        onChange={handleNameFilterChange} 
      />
      <h2>add a new</h2>
      <PersonForm 
        onSubmit={handleFormSubmit}
        newName={newName}
        onChangeNewName={handleNameChange}
        newNumber={newNumber}
        onChangeNewNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
        <Persons nameFilter={nameFilter} persons={persons}/>
    </div>
  )
}

export default App