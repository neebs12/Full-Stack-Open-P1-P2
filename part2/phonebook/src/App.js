import { useState } from 'react'

// persons will be the state to store all the existing contacts
// newName will be the state which will capture the name as it is being entered, thus onChange event handler required for input

const DisplayANumber = ({name, number}) => <>{name} {number}<br /></>;

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)

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
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          /><br />
          number: <input 
            value={newNumber}
            onChange={handleNumberChange }
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => {
          return (<DisplayANumber key={person.name} 
            name={person.name}
            number={person.number}
          />)
        })}
    </div>
  )
}

export default App