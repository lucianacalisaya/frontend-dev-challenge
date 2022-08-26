import './MainList.scss'
import Item from '../Item/Item'

let ItemList = ({items}) => {

    return(
        <div className='mainGrid'>
            {items.map(items => <Item addClass='mainGridItem' key={items.title} {...items} showSubc={true} showDesc={true}/>)}
        </div>
        
    )
}

export default ItemList