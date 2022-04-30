const DisplayCountry = ({ profile }) => {
  return (
    <div>
      <h1>{profile.name.common}</h1>
      <p>
        capital {profile.capital[0]} <br />
        area {profile.area}
      </p>
      <h2>languages:</h2>
      <ul>
        {Object.values(profile.languages).map(lang => 
          <li key={`${profile.name.common}:${lang}`}>{lang}</li>)
        }
      </ul>
      <img src={profile.flags.png}></img>
    </div>
  );
}

export default DisplayCountry;