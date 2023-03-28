import React from 'react';
import Container from './Container';

const Item = (props) => {
  const { searchTerm } = props;
  console.log('props', props);
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
