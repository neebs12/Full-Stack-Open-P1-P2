import { useState, useEffect } from 'react'

import FilterForm from './components/FilterForm';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  // use effect hook
  const getAll = () => {
    phonebookService.getAll()
      .then(result => setPersons(result));
  }

  // dependecy array to [], non changing - thus run once
  useEffect(getAll, []);

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleNameFilterChange = event => setNameFilter(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    // if the name already exists, then we do not send 
    // -- information to the server

    let names = persons.map(person => person.name);
    let confirmMsg = `${newName} is already added to the phonebook, replace the old number with the new one?`;
    if (names.includes(newName) && window.confirm(confirmMsg)) {
      // add new person here
      let personObject = persons.filter(p => p.name === newName)[0];
      // sufficient copy & non-mutating change!
      personObject = {...personObject, number: newNumber}; 
      phonebookService
        .updateNumber(personObject)
        .then(result => {
          // we want to reflect visually what has occured
          // for consistency, use the result object for updating persons
          setPersons(persons.map(p => 
            p.id === result.id ? result : p
          )); 

          setNewName(''); // then clear inputs
          setNewNumber('');  
          setMessage(`Updated ${result.name}!`);
          setTimeout(() => setMessage(null), 3000);  
        });
      // return alert(`${newName} is already added to phonebook`);
    } else if (!names.includes(newName)) {
      let newPerson = {
        name: newName,
        number: newNumber,
      }
  
      phonebookService
        .addNumber(newPerson)
        .then(result => { // change various states
          setPersons(persons.concat([result]));
          setNewName('');
          setNewNumber(''); 
          setMessage(`Added ${result.name}!`);
          setTimeout(() => setMessage(null), 3000);
        });
    }
  };

  const handleDeleteNumber = (event) => {
    let name = event.target
      .previousSibling
      .previousSibling
      .previousSibling
      .nodeValue; // gets name relative to position of button in DOM

    if (!window.confirm(`Delete ${name}?`)) return;
    let id = persons.filter(person => person.name === name)[0].id;

    phonebookService.deleteNumber(id)
      .then(_ => {
        setPersons(persons.filter(person => {
          // filter-true for all except for matching id
          return person.id !== id; 
        }))
      })
      .catch(reason => {
        console.log(reason); // logging reason directly to the console
        // removal of rogue persons in our persons state to make consistent with server information
        setPersons(persons.filter(person => person.id !== id));
        // then we update the isError state
        setIsError(true);
        setMessage(`Information for ${name} has already been removed from server`);
        setTimeout(() => {
          setMessage(null);
          setIsError(false); // revert state
        }, 3000)
      });
  };

  // display the numbers below
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} isError={isError}/>
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
        <Persons 
          nameFilter={nameFilter} 
          persons={persons}
          onClickDeleteNumber={handleDeleteNumber}
        />
    </div>
  )
}

export default App;