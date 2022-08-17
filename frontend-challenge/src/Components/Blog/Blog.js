//import './ItemDetail.css';
import { Link } from 'react-router-dom';

const Blog = ({ title, duration, category, subcategory, quote }) =>{
  console.log(title, duration);

  return(
    <div className='blog'>
      <div className='blog__breadcrumb'>
        <div className='blog__breadcrumb--home'>
          <Link to='/'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="16px" height="16px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z" fill="#b1b1b1"></path>
            </svg> */}
          </Link>
        </div>
        <div>
          <div>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70697 11.707L7.41397 6.00003L1.70697 0.29303L0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707Z" fill="black"/>
            </svg>
          </div>
          <Link to='/'><h5>{category}</h5></Link>
        </div>
        <div>
          <div>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.70697 11.707L7.41397 6.00003L1.70697 0.29303L0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707Z" fill="black"/>
            </svg>
          </div>
          <Link to='/'/>
        </div>
      </div>
      
      <img className='' alt={title} src='' />
      <div>
        <h2>{title}</h2>
        <div>
            <img src='resources/icons/bx-check-circle.svg' alt=''/> {/*icono fact checked */}
            <p>Fact checked</p>
            <img src='' alt=''/> {/*icono duration */}
            <p>{duration} minutes</p>
        </div>

        <p>{subcategory}</p>
        {/* <p>{item.detail.length(60)}</p> */}
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default Blog;