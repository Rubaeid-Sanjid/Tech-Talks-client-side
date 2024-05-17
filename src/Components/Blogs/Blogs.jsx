import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
      });
  }, []);
  return (
    <div className="my-8 lg:my-12">
      <h2 className="text-3xl lg:text-5xl text-center font-bold mb-4">Our Blogs</h2>
      <p className="mb-5 lg:w-1/2 mx-auto text-center">
        Explore Our Blog for In-Depth Articles, Expert Opinions, and the Latest
        Updates in the World of Technology. Stay Informed, Stay Ahead.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-12">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
