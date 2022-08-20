import Recommendation from '../Recommendation/Recommendation';
import { useState, useEffect} from 'react';
import { getItemById } from '../../asyncMock';
import { useParams } from 'react-router-dom'
//import './RecommendationList.scss'

const RecommendationList = () => {
    const [recommendation, setRecommendation] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        getItemById(itemId)
            .then(recommendation => {
                setRecommendation(recommendation);
            })
    }, [itemId])
    return (
        <main className='blogContainer'>
            <Recommendation items={recommendation}/>             
        </main>
    );
};

export default RecommendationList