const DisplaySearchBar = (props) => {
  return (
    <div>
      <label>find countries</label>
      <input type="text"
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default DisplaySearchBar;