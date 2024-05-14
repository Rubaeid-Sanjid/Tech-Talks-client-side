import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data=>{
            setBlog(data)
        })
    },[])
    return (
        <div>
            <h2>Blogs {blogs.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                blogs.map((blog, idx)=> <Blog key={idx} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;