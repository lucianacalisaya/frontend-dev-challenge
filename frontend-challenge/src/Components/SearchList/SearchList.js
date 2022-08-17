import React from 'react';
import Card from '../Card/Card';

function SearchList({ filteredResult }) {
  const filtered = filteredResult.map(item =>  <Card key={item.title} item={item} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;