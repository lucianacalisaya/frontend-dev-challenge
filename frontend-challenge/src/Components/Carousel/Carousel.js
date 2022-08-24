import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './Carousel.scss';
import { getItemsFromSource } from '../../asyncMock';
import Item from '../Item/Item'


const Carousel = () => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        getItemsFromSource(categoryId)
        .then(response => {
            setItems(response.slice(0,4))
        })
    }, [categoryId])

    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === items.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            carouselInfiniteScroll()
        }, 3000)
        return () => clearInterval(interval)
    })

    return (
        <div className='carouselContainer'>
            { items.map(items => {
                return <Item addClass='carouselItem' style={{ transform: `translate(-${currentIndex*100}%)`}} key={items.title} {...items} showSubc={true} showDesc={false}/>})
            }
            
        </div>
    )
}
export default Carousel