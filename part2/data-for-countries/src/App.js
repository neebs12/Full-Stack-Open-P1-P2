import { useState, useEffect } from 'react'; 
// import axios from 'axios'; // will be using fetch api

import DisplaySearchBar from './components/DisplaySearchBar';
import DisplayMatches from './components/DisplayMatches';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const hook = () => {
    fetch('https://restcountries.com/v3.1/all', {method: 'GET'})
      .then(result => result.json())
      .then(result => setCountries(result));
  }

  // dep-arry [] for single execution
  useEffect(hook, []);

  // this handler modifies the state of the countryFilter
  const handleSearchBarOnChange = (event) => {
    let val = event.target.value;

    setCountryFilter(val);
    setSelectedCountry(''); // update to be empty
  }

  const handleSelectedCountryOnClick = (event) => {
    // event.target is the button
    let button = event.target;
    let countryName = button
      .parentElement.textContent.replace(button.textContent, '');
    setSelectedCountry(countryName);
  }

  return (
    <div>
      <DisplaySearchBar 
        value={countryFilter}
        onChange={handleSearchBarOnChange}
      />
      <DisplayMatches 
        keywordFilter={countryFilter}
        countries={countries}
        selectedCountry={selectedCountry}
        handleSelectedCountryOnClick={handleSelectedCountryOnClick}
      />
    </div>
  );
}

export default App;
