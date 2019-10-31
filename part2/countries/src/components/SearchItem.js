import React from 'react';
import Button from './Button';

const SearchItem = ({name, onChangeFilter}) => {
  return (
    <p>{name} <Button onClick={() => onChangeFilter(name)} text="Show" /></p>
  )
};

export default SearchItem;