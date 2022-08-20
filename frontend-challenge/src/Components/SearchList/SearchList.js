import React from 'react';
import Card from '../Card/Card';
import './SearchList.scss'

function SearchList({ filteredResult }) {
  const filtered = filteredResult.map(item =>  <Card key={item.title} item={item} />); 
  return (
    <div className='searchList'>
      {filtered}
    </div>
  );
}

export default SearchList;