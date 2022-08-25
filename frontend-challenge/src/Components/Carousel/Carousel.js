import React, { useEffect, useState} from 'react';
import './Carousel.scss';
import { testimonies } from '../../asyncMock';
import CarouselItem from '../CarouselItem/CarouselItem';


const Carousel = () => {


    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === testimonies.length-1) {
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
            { testimonies.map(testimonies => {
                return <CarouselItem style={{ transform: `translate(-${currentIndex*100}%)`}} {...testimonies}/>})
            }
            
        </div>
    )
}
export default Carousel