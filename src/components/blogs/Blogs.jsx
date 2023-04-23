import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        const fetchBlogs=async()=>{
            try{
                const response=await fetch('blogs.json');
                const result= await response.json();
                setBlogs(result);
            }
            catch{err=>console.error(err)}
        }
        fetchBlogs()
    },[])
    return (
        <div className='w-5/6 mx-auto my-24 grid grid-cols-2 gap-12 items-center justify-between'>
            
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }

        </div>
    );
};

export default Blogs;