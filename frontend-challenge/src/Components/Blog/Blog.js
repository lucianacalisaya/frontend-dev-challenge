//import './ItemDetail.css';
import { Link } from 'react-router-dom';

const Blog = ({ title, duration, subcategory, quote }) =>{
  console.log(title, duration);

  return(
    <div className="">
      <img className="" alt={title} src='' />
      <div>
        <Link to='/:subcategory'></Link>
        <h2>{title}</h2>
        <div>
            <img src='resources/icons/bx-check-circle.png' alt=''/> {/*icono fact checked */}
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