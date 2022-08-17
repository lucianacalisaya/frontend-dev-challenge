import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import { getItemsFromSource, getItemsByCategory, getItemsBySubcategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import SliderContainer from '../SliderContainer/SliderContainer'


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [items2, setItems2] = useState([])
    const {categoryId} = useParams()
    const {subcategoryId} = useParams();

    
    useEffect(() => {
        if (!categoryId && !subcategoryId) {
            getItemsFromSource().then(items => {
                setItems(items)
            })
        } else if (categoryId && !subcategoryId){
            getItemsByCategory(categoryId).then(items => {
                setItems(items)
            })
        } else {
            getItemsBySubcategory(subcategoryId).then(items2 => {
                setItems2(items2)
            })
        }

    }, [categoryId, subcategoryId])
    return (
        <div className='itemContainer'>
            {!subcategoryId && !categoryId
                ? 
                <SliderContainer items={items}/> : null
            }
            
            {!subcategoryId
                ? 
                <ItemList items={items}/> 
                : 
                <ItemList items={items2}/>
            }
        </div>
    )
}

export default ItemListContainer