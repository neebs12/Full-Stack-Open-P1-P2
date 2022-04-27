import DisplayNameNumber from './DisplayNameNumber';

const Persons = ({nameFilter, persons}) => {
  const filterPersons = () => {
    // based on nameFilter, use test regex prot method
    if (nameFilter === '') {
      return persons
    } else {
      return persons.filter(person => 
        (new RegExp(nameFilter, 'i')).test(person.name)
      );
    }
  }

  return (
    <>
      {filterPersons().map(person => {
        return <DisplayNameNumber 
          key={person.id}
          name={person.name} 
          number={person.number}/>
      })}
    </>
  );
}

export default Persons;