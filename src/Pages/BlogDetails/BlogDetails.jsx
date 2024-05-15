import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState('');

  const { title, image, short_description, category, long_description } = blog;

  const handleComment = (e) => {
    e.preventDefault();
    setComment(e.target.comment.value);

    console.log(comment, user.email);
  };
  return (
    <div className="container mx-auto px-3 lg:px-12 lg:my-12 my-6">
      <div className="card bg-base-100 rounded-none">
        <figure className="lg:h-[500px] w-4/5 mx-auto mt-8">
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl md:text-4xl">{title}</h2>
          <p>{short_description}</p>
          <div className="badge badge-outline p-3 mt-3">
            <span>Category:</span> {category}
          </div>

          <h3 className="my-6">{long_description}</h3>
        </div>
      </div>
      <div className="card bg-base-100 rounded-none lg:px-12 p-3 pt-8 mt-8">
        <h2 className="card-title text-3xl lg:text-4xl mb-5">
          Leave a Comment
        </h2>
        <form onSubmit={handleComment}>
          <textarea
            placeholder="Type here"
            className="textarea bg-base-200 rounded-none textarea-bordered textarea-lg w-full"
            name="comment"
          ></textarea>

          <div className="card-actions justify-end mt-6">
            <button className="btn bg-[#805aed] text-white">
              Post Comment
            </button>
          </div>
        </form>

        <h2 className="card-title text-3xl mb-5 mt-8">
          Comments
        </h2>
        <div className="border-t-2 py-8">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={user.photoURL} />
            </div>
            <div className="flex flex-col gap-3 ml-4">
            <h3 className="text-lg font-bold">{user.displayName}</h3>
            <h4>{comment}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
