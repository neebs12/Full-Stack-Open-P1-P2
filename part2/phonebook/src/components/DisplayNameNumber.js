const DisplayNameNumber = ({name, number, onClick}) => 
  <>
    {name} {number} 
    <button type="button" onClick={onClick}>delete</button>
    <br />
  </>;

export default DisplayNameNumber;