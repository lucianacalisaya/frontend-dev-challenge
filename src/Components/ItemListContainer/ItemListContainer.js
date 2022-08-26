import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import { getItemsByCategory, getItemsBySubcategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [items2, setItems2] = useState([])
    const {categoryId} = useParams()
    const {subcategoryId} = useParams();

    
    useEffect(() => {
         if (categoryId && !subcategoryId){
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
        
        !subcategoryId
            ? 
            <div className='itemContainer'>
                <h1 className="itemContainer-title">{categoryId}</h1>
                <div className='itemContainer__items'><ItemList items={items}/> </div>
            </div>
            : 
            <div className='itemContainer'>
                <h1 className="itemContainer-title">{subcategoryId}</h1>            
                <div className='itemContainer__items'><ItemList items={items2}/></div>                   
            </div>
    )
}

export default ItemListContainer