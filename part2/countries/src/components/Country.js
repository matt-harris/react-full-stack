import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Country = ({name, capital, population, languages, flag}) => {
  const [weather, setWeather] = useState(null);
  const weatherURL = `http://api.weatherstack.com/current?access_key=2947c7cbfad6c0d9e13d339092c77fc1&query=${capital}`;

  useEffect(() => {
    axios
      .get(weatherURL)
      .then(response => {
        setWeather(response.data);
      })
  }, [weatherURL]);

  const showWeather = () => {
    console.log(weather)
    return (
      <>
      <h2>Weather in {capital}</h2>
        <p><strong>Temperature:</strong> {weather.current.temperature} C</p>
        <p><strong>Feels like:</strong> {weather.current.feelslike} C</p>
        <img src={weather.current.weather_icons[0]} alt={`Weather in ${capital}`} />
        <p><strong>Wind:</strong> {weather.current.wind_speed} kph direction {weather.current.wind_dir}</p>
      </>
    )
  };

  return (
    <>
      <h1>{name}</h1>

      <p>Capital: {capital}</p>
      <p>Population: {population}</p>

      <h2>Languages</h2>
      <ul>
      {
        languages.map((lang, index) => {
          return <li key={index}>{lang.name}</li>
        })
      }
      </ul>

      <img src={flag} alt={name + 'flag'} width="160" />

      {
        weather ? showWeather() : null
      }
    </>
  );
};

export default Country;