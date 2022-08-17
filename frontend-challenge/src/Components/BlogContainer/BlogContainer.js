import { useState, useEffect} from 'react';
import { getItemById } from '../../asyncMock';
import Blog from '../Blog/Blog';
import { useParams } from 'react-router-dom';

const BlogContainer = () => {
    const [blog, setBlog] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        getItemById(itemId)
            .then(blog => {
                setBlog(blog);
            })
            .catch(error => {
                console.log(error);
            })
    }, [itemId])

    return (
        <div>
            <Blog {...blog}/>             
        </div>
          
    );
};

export default BlogContainer