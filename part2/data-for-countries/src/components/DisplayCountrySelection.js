import DisplayCountry from "./DisplayCountry";

const DisplayCountrySelection = ({ 
  selectedCountry, 
  handleOnClick, 
  countries 
}) => {

  if (!selectedCountry) {
    return (
      <div>
        {countries.map(country => {
          let name = country.name.common
          return (
            <span key={name}>
              {name}
              <button type="button" onClick={handleOnClick}>show</button><br />
            </span>
          );
        })}
      </div>
    );
  } else {
    // get specific country based on name
    let country = countries.filter(country => 
      country.name.common === selectedCountry
    )[0];
    return <DisplayCountry profile={country} />
  }
}

export default DisplayCountrySelection;