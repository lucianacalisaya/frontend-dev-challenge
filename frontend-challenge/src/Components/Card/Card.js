import React from 'react';

function Card({item}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={item.title} src='' />
      <div>
        <h2>{item.title}</h2>
        <p>{item.subcategory}</p>
      </div>
    </div>
  );
}

export default Card;