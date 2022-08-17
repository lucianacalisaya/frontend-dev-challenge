import './Slider.scss'
import Item from "../Item/Item"

let Slider = ({items}) => {

    return(
        <div className='slider'>
            {items.slice(0,4).map(items => 
                <Item addClass='sliderItem' key={items.title} {...items} showSubc={true} showDesc={false}/>)
            }
        </div>
    )
}

export default Slider