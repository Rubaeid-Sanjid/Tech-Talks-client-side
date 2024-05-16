import axios from "axios";
import { Select } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {
  const curr_blog = useLoaderData();

  const { _id, title, image, category, short_description, long_description } =
    curr_blog;

  const handleUpdateBlog = (e) => {
    e.preventDefault();

    const updated_title = e.target.title.value;
    const updated_image = e.target.image.value;
    const updated_category = e.target.category.value;
    const updated_short_description = e.target.short_description.value;
    const updated_long_description = e.target.long_description.value;

    const updated_blogInfo = {
      updated_title,
      updated_image,
      updated_category,
      updated_short_description,
      updated_long_description,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`http://localhost:5000/blogs/${_id}`, updated_blogInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire("Saved!", "", "success");
              e.target.reset();
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="hero min-h-screen mt-8">
      <div className="hero-content flex-col lg:w-3/4">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Update Your Blog
          </h1>
        </div>
        <div className="card shrink-0 lg:w-full shadow-2xl bg-base-100">
          <form
            onSubmit={handleUpdateBlog}
            className="card-body lg:grid grid-cols-2"
          >
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="title"
                defaultValue={title}
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
                defaultValue={image}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Category</span>
              </label>

              <Select
                id="category"
                required
                name="category"
                defaultValue={category}
              >
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
                defaultValue={short_description}
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
                defaultValue={long_description}
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

export default UpdateBlog;
