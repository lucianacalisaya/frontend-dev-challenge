import React from 'react';
import './Card.scss'
import { Link } from 'react-router-dom';
function Card({item}) {
  return(
    <div className='card'>
      <Link className='card__imageBox' to={`/item/${item.title.replace(/\s/g , "-")}`}><img className='card__image' alt={item.title} src={item.img} /></Link>
      <div className='card__body'>
        <Link className='card__link' to={`/item/${item.title.replace(/\s/g , "-")}`}><h2 className='card__title'>{item.title}</h2></Link>
        <Link className='card__link' to={`/${item.subcategory}`}><h3 className='card__subcategory'>{item.subcategory}</h3></Link>
        {/* <p>{item.detail.length(60)}</p> */}
      </div>
    </div>
  );
}

export default Card;