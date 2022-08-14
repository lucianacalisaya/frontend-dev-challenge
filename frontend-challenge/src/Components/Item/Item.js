import './Item.scss';
import { Link } from 'react-router-dom'

const Item = ({img, title, category, subcategory}) => {
    return (
            <div className='card'>
                <Link to={`/${category.replace(/\s/g , "-")}/${subcategory.replace(/\s/g , "-")}/${title.replace(/\s/g , "-")}`}><img className='card-image' src={img} alt={title}/></Link>
                <Link to={`/${category.replace(/\s/g , "-")}/${subcategory.replace(/\s/g , "-")}`}><h3 className='card-subcategory'>{subcategory}</h3></Link>
                <Link to={`/${category.replace(/\s/g , "-")}/${subcategory.replace(/\s/g , "-")}/${title.replace(/\s/g , "-")}`}><h4>{title}</h4></Link>
            </div>
      )  
}

export default Item