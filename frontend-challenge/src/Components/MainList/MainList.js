import './MainList.scss'
import Item from '../Item/Item'

let ItemList = ({items}) => {

    return(
        <div className='mainGrid'>
            {items.map(items => <Item addClass='mainGridItem' key={items.title} {...items} showSubc={false} showDesc={true}/>)}
        </div>
        
    )
}

export default ItemList