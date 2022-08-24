import './Item.scss';
import { Link } from 'react-router-dom'

const Item = ({img, title, category, subcategory, quote, showSubc, showDesc, addClass, style}) => {
    return (
            <div className={`${addClass} itemBasicStyles`} style={style}>
                <div className={`${addClass}__imagebox imageHover`}>
                    <Link to={`/item/${title.replace(/\s/g , "-")}`}>
                        <img className={`${addClass}__image`} src={img} alt={title}/>
                    </Link>
                </div>
                {showSubc 
                        ? 
                        <Link to={`/${category.replace(/\s/g , "-")}/${subcategory.replace(/\s/g , "-")}`}>
                            <h3 className={`${addClass}__subcategory subcategoryTitle`}>{subcategory}</h3>
                        </Link>
                        : null
                    }
                <div className={`${addClass}__textbox`}>
                    
                    <Link to={`/item/${title.replace(/\s/g , "-")}`}>
                        <h4 className={`${addClass}__title articleTitle`}>{title}</h4>
                        {showDesc 
                        ? 
                            <p>{quote}</p> 
                        : null
                    }
                    </Link>
                    
                </div>
            </div>
      )  
}

export default Item