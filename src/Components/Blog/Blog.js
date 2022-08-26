import './Blog.scss';
import { Link } from 'react-router-dom';
//import RecommendationList from '../RecommendationList/RecommendationList';

const Blog = ({ item }) =>{

  return(
    <div className='blog'>
      <div className='blog__breadcrumb'>
        <div className='blog__breadcrumb--home'>
          <Link to='/' className='blog__home'>
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="16px" height="16px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" fill="#b1b1b1"></path>
            </svg>
          </Link>
        </div>
        <div className='blog__breadcrumb--back'>
          
            <svg className='blog__arrow' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70697 11.707L7.41397 6.00003L1.70697 0.29303L0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707Z" fill="black"/>
            </svg>
          
          <Link to={`/${item.category}`}><h5>{item.category}</h5></Link>
        </div>
        <div className='blog__breadcrumb--back'>
          
            <svg className='blog__arrow' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70697 11.707L7.41397 6.00003L1.70697 0.29303L0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707Z" fill="black"/>
            </svg>
          
          <Link to={`/${item.subcategory}`}><h5>{item.subcategory}</h5></Link>
        </div>
      </div>
      <div className='blog__container'>
        <div className='blog__content'>
            <h1 className='blog__title'>{item.title}</h1>
            <div className='blog__info'>
              <div className='blog__fact'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="black"/>
                  <path d="M7.99902 11.587L5.70002 9.29197L4.28802 10.708L8.00103 14.413L14.707 7.70697L13.293 6.29297L7.99902 11.587Z" fill="black"/>
                </svg>                
                <p className='blog__serif'>Fact checked</p>
              </div>
              <div className='blog__time'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="#486db7" d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8s8-3.589 8-8s-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6z"></path><path fill="#486db7" d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707l-2-2l1.414-1.414l2 2z"></path>
                </svg>
                <p className='blog__serif'>{item.duration} minutes</p>
              </div>
            </div>
            <div className='blog__description'>
              <p className='blog__regular'>{item.quote}</p>
            </div>
            <img className='blog__image' alt={item.title} src={item.img} />
        </div>
        <div className='blog__sider'>
          <div className='blog__author'>
            <p className='blog__serif'>Escrito por <span>{item.author}</span></p>
          </div>
          <div className='blog__update'>
            <p className='blog__serif'><span>Ultima actualizacion:</span> {item.lastUpdate}</p>
          </div>
          {/* <RecommendationList/> */}
        </div>
      </div>
    </div>
  );
}

export default Blog;