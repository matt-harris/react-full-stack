import React from 'react';
import SearchItem from './SearchItem';
import Country from './Country';

const Countries = ({countries, onChangeFilter}) => {

  if (countries.length > 10) {
    return <p>Too many matches specify another filter.</p>
  } else if (countries.length > 1) {
    return countries.map(country => <SearchItem key={country.name} name={country.name} onChangeFilter={onChangeFilter} />);
  } else if (countries.length === 1) {
    const data = countries[0];
    return (
      <>
        <Country
          name={data.name}
          capital={data.capital}
          population={data.population}
          languages={data.languages}
          flag={data.flag}
        />
      </>
    )
  } else {
    return <p>No countries found.</p>
  };
};

export default Countries;