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
            setItems(response.slice(0,8))
        })
    }, [categoryId])
    return (
        <div className='main'>
            <h1 className='main__title'>Revista sobre buenos hábitos y cuidados para tu salud.</h1>
            <MainList items={items}/> 
            <Carousel/>        
        </div>
    )
}

export default Main