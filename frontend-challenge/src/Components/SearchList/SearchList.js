import React from 'react';
import Card from '../Card/Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(item =>  <Card key={item.id} item={item} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;