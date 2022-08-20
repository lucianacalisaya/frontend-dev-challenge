import Item from '../Item/Item'

let Recommendation = ({items}) => {

    return(
        <div className='itemRecommendation'>
            {items.map(items => <Item addClass='itemRecommendation' key={items.id} {...items} showSubc={true} showDesc={false}/>)}
        </div>
    )
}

export default Recommendation