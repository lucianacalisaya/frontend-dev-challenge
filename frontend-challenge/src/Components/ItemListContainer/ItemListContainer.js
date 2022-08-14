import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import { getItemsFromSource, getItemsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()


    
    useEffect(() => {
        if (!categoryId) {
            getItemsFromSource().then(items => {
                setItems(items)
            })
        } else {
            getItemsByCategory(categoryId).then(items => {
                setItems(items)
            })
        }
    }, [categoryId])
    return (
        <>
            <div className="item-container">
                <h3 className="item-title">{categoryId ? categoryId : 'Our items'}</h3>
                <ItemList items={items}/>
            </div>
        </>
    )
}

export default ItemListContainer