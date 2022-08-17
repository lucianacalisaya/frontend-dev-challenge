import './Slider.scss'
import Item from '../Item/Item'

let Slider = ({items, width}) => {

    return(
        items.slice(0,4).map(items => 
            <Item addClass='sliderItem' key={items.title} {...items} style={{ width: width }} showSubc={true} showDesc={false}/>)
    
    )
}

export default Slider