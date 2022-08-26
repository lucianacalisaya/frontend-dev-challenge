import './ItemList.scss'
import Item from '../Item/Item'

let ItemList = ({items}) => {

    return(
        items.map(items => <Item addClass='gridItem' key={items.title} {...items} showSubc={false} showDesc={true}/>)
    )
}

export default ItemList