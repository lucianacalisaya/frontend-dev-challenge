import './CarouselItem.scss'

const CarouselItem = ({testimonie, person, style}) => {
    return (
        <div className='carouselItem' style={style}>
            <div className='carouselItem__quotemark'>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.6182 35.416C44.3922 31.32 44.0122 26.06 44.0002 26V20V10C44.0002 8.896 43.1062 8 42.0002 8H30.0002C27.7942 8 26.0002 9.794 26.0002 12V26C26.0002 27.104 26.8942 28 28.0002 28H30.0002H34.1562C34.1142 28.804 33.9102 29.824 33.2982 30.792C32.2822 32.394 30.3682 33.488 27.6062 34.04L26.0002 34.36V40H28.0002C33.5662 40 37.8122 38.458 40.6182 35.416ZM18.6042 35.416C22.3802 31.32 21.9982 26.06 21.9862 26V20V10C21.9862 8.896 21.0922 8 19.9862 8H7.98616C5.78016 8 3.98616 9.794 3.98616 12V26C3.98616 27.104 4.88016 28 5.98616 28H7.98616H12.1422C12.1002 28.804 11.8962 29.824 11.2842 30.792C10.2682 32.394 8.35416 33.488 5.59216 34.04L3.98616 34.36V40H5.98616C11.5522 40 15.7982 38.458 18.6042 35.416Z" fill="#CACACA"/>
                </svg>
            </div>
            <div>
                <p className='carouselItem__testimonie'>{testimonie}</p>
            </div>
            <div>
                <p className='carouselItem__person'>~{person}~</p>
            </div>
        </div>
    )
}
export default CarouselItem