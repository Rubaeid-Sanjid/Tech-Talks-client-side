import { useEffect, useState } from "react";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
      });
  }, []);

  const topBlogs = blogs
    .sort((a, b) => b.long_description.length - a.long_description.length)
    .filter((blog) => blog.long_description.length > 0);

  return (
    <div className="overflow-x-auto my-12 container mx-auto lg:px-12">
      <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-6">
        Our Top Featured Blogs
      </h2>
      <table className="table">
        <thead>
          <tr className="text-lg">
            <th>Serial Number</th>
            <th>Blog Title</th>
            <th>Blog Owner</th>
            <th>Blog Owner Picture</th>
          </tr>
        </thead>
        <tbody>
          {topBlogs.map((blog, idx) => (
            <tr key={blog._id} className="hover">
              <th>{idx + 1}</th>
              <td>{blog.title}</td>
              <td>{blog.bloger_email}</td>
              <td><img src={blog.bloger_photo} alt="" className="h-16 w-16 rounded-full" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlogs;
