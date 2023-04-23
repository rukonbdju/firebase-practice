import React from 'react';

const Blog = ({blog}) => {
    return (
        <div className='border-2 rounded-md p-5 bg-slate-300'>
            <h1 className="text-4xl">{blog.name}</h1>
            <h1 className="text-2xl text-cyan-600 my-8">{blog.email}</h1>
            <h1 className="text-2xl">{blog.post}</h1>
        </div>
    );
};

export default Blog;