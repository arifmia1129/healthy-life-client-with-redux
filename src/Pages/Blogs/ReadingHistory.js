import React from 'react';
import { useSelector } from 'react-redux';
import Blog from './Blog';

const ReadingHistory = () => {
    const blogs = useSelector(state => state.blogHistory);
    return (
        <div>
            {
                blogs?.sort((a, b) => (b.position - a.position))?.map(blog => <Blog key={blog._id} blog={blog} />)
            }
        </div>
    );
};

export default ReadingHistory;