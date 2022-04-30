import DisplayCountry from "./DisplayCountry";
import DisplayCountrySelection from "./DisplayCountrySelection";

const DisplayMatches = ({ 
    keywordFilter, 
    countries, 
    selectedCountry, 
    handleSelectedCountryOnClick 
  }) => {
  if (!keywordFilter) return; 

  // do filter operations
  let regex = new RegExp(`${keywordFilter}`, 'i');
  let filteredCountries = countries.filter(country => {
    return regex.test(country.name.common)
  })
  
  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filteredCountries.length > 1) {
    return (
      <DisplayCountrySelection 
        selectedCountry={selectedCountry}
        handleOnClick={handleSelectedCountryOnClick}
        countries={filteredCountries}
      />
    );
  } else if (filteredCountries.length === 1) {
    return (<DisplayCountry profile={filteredCountries[0]}/>);
  } else {
    return <p>No matches, specify another filter</p>    
  }
}

export default DisplayMatches;