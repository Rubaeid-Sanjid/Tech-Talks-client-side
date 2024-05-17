import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=> res.json())
        .then(data=>{
            setBlogs(data.blogs)
        })
    },[])
    return (
        <div>
            <h2>Blogs {blogs.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                blogs.map((blog)=> <Blog key={blog._id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;

