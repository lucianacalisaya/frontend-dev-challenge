import './ItemList.scss'
import Item from '../Item/Item'

let ItemList = ({items}) => {

    return(
        <div className='itemGrid'>
            {items.slice(0,1).map(items => <Item addClass='itemGridLeft' key={items.title} {...items} showSubc={false} showDesc={true}/>)}
            <div className='itemGridRightContainer'>
                {items.slice(1,5).map(items => <Item addClass='itemGridRight' key={items.title} {...items} showSubc={false} showDesc={true}/>)}
            </div>
        </div>
        
    )
}

export default ItemList