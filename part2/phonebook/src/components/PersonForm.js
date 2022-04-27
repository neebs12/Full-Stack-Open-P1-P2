const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name: <input 
          value={props.newName}
          onChange={props.onChangeNewName}
        /><br />
        number: <input 
          value={props.newNumber}
          onChange={props.onChangeNewNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>    
  );  
}

export default PersonForm;