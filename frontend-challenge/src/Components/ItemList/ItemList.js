import './ItemList.scss'
import Item from "../Item/Item"

let ItemList = ({items}) => {

    return(
        <div className='itemGrid'>
            {items.slice(4,5).map(items => <Item addClass='itemGridLeft' key={items.title} {...items} showSubc={false} showDesc={true}/>)}
            <div className='itemGridRightContainer'>
                {items.slice(5,8).map(items => <Item addClass='itemGridRight' key={items.title} {...items} showSubc={false} showDesc={true}/>)}
            </div>
        </div>
        
    )
}

export default ItemList