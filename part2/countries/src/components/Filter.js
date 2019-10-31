import React from 'react';

const Filter = ({value, onChange}) => {
  return (
    <>
      Find Countries: <input value={value} onChange={onChange} />
    </>
  );
};

export default Filter;