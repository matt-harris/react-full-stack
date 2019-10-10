import React from 'react';

const Total = ({parts}) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <>
      <p><strong>Total of {total} exercises.</strong></p>
    </>
  );
};

export default Total;
