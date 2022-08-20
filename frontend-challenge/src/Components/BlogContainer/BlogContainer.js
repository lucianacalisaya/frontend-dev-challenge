import Blog from '../Blog/Blog';
import { useState, useEffect} from 'react';
import { getItemByTitle } from '../../asyncMock';
import { useParams } from 'react-router-dom'
import './BlogContainer.scss'

const BlogContainer = () => {
    const [blog, setBlog] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        getItemByTitle(itemId)
            .then(blog => {
                setBlog(blog);
            })
    }, [itemId])
    return (
        <main className='blogContainer'>
            <Blog item={blog}/>
        </main>
    );
};

export default BlogContainer