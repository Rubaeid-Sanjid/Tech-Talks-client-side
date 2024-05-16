"use client";

import axios from "axios";
import { Select } from "flowbite-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const AddBlog = () => {
  const {user} = useContext(AuthContext);
  const handleBlog = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const image = e.target.image.value;
    const category = e.target.category.value;
    const short_description = e.target.short_description.value;
    const long_description = e.target.long_description.value;

    const blogInfo = {
      title: title,
      image: image,
      category: category,
      short_description: short_description,
      long_description: long_description,
      bloger_email: user.email
    };

    axios.post('http://localhost:5000/blogs', blogInfo)
    .then(response => {
      console.log(response.data);
      if(response.data.insertedId){
        Swal.fire({
          title: "Good job!",
          text: "Blog posted successfully!",
          icon: "success"
        });
        e.target.reset();
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="hero min-h-screen mt-8">
      <div className="hero-content flex-col lg:w-3/4">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-semibold">Post Your Blog</h1>
        </div>
        <div className="card shrink-0 lg:w-full shadow-2xl bg-base-100">
          <form onSubmit={handleBlog} className="card-body lg:grid grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="title"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="image URL"
                name="image"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Category</span>
              </label>
        
              <Select id="category" required name="category">
                <option>Artificial Intelligence</option>
                <option>Virtual Reality</option>
                <option>Blockchain</option>
                <option>Cloud Computing</option>
                <option>5G</option>
                <option>Internet of Things</option>
              </Select>
            </div>

            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="text-lg font-medium">Short Description</span>
              </label>
              <textarea
                className="border p-3 rounded-xl"
                name="short_description"
                id=""
                cols="10"
                rows="2"
                placeholder="short description"
              ></textarea>
            </div>

            <div className="form-control lg:col-span-2">
              <label className="label">
                <span className="text-lg font-medium">Long Description</span>
              </label>
              <textarea
                className="border p-3 rounded-xl"
                name="long_description"
                id=""
                cols="10"
                rows="5"
                placeholder="long description"
              ></textarea>
            </div>

            <div className="form-control col-span-2 lg:w-1/2 lg:mx-auto mt-6">
              <button className="btn bg-[#805aed] text-white text-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
