import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const filterCountries = newFilter.length > 0
  ? countries.filter(country => country.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
  : countries;

  return (
    <>
      <Filter value={newFilter} onChange={handleFilterChange} />

      {
        newFilter
          ? <Countries countries={filterCountries} onChangeFilter={setNewFilter} />
          : null
      }
    </>
  );
};

export default App;
