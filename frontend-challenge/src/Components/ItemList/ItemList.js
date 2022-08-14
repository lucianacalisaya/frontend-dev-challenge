import './ItemList.scss'
import Item from "../Item/Item"

const ItemList = ({items}) => {
    return(
        <div className='itemList'>
            {items.map(items => <Item key={items.title} {...items}/>)}
        </div>      
    )
}

export default ItemList