import React from 'react';

function Card({item}) {
  return(
    <div className=''>
      <img className='' alt={item.title} src='' />
      <div>
        <h2>{item.title}</h2>
        <p>{item.subcategory}</p>
        {/* <p>{item.detail.length(60)}</p> */}
      </div>
    </div>
  );
}

export default Card;