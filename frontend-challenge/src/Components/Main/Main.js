import './Main.scss'
import { useState, useEffect } from 'react'
import { getItemsFromSource} from '../../asyncMock'
import MainList from '../MainList/MainList'
import { useParams } from 'react-router-dom'
//import SliderContainer from '../SliderContainer/SliderContainer'
import Carousel from '../Carousel/Carousel'

const Main = () => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        getItemsFromSource(categoryId).then(response => {
            setItems(response)
        })
    }, [categoryId])
    return (
        <div className='main'>
            <Carousel/>        
            <MainList items={items}/> 
        </div>
    )
}

export default Main