import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import { getItemsFromSource, getItemsByCategory, getItemsBySubcategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const SliderContainer = () => {
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
        <>
            <div className="item-container">
                {!subcategoryId ? <ItemList items={items} i={4}/> : <ItemList items={items2} i={4}/>}
            </div>
        </>
    )
}

export default SliderContainer