const FilterForm = ({nameFilter, onChange}) => {
  return (
    <div>
      filter shown with<input value={nameFilter} onChange={onChange}/>
    </div>
  );
}

export default FilterForm;