import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import axios from "axios";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [commentInfo, setCommentInfo] = useState([]);

  const {
    _id,
    title,
    image,
    short_description,
    category,
    long_description,
    bloger_email,
  } = blog;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/comments/${_id}`)
      .then((res) => {setCommentInfo(res.data)
      });
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;

    console.log(comment, user.email);
    const commentDoc = {
      blog_Id: _id,
      name: user.displayName,
      photo: user.photoURL,
      comment: newComment,
    };

    axios
      .post("http://localhost:5000/comments", commentDoc)
      .then((res) => {
        console.log(res.data);
        setComment(newComment);
      })
      .catch((error) => {
        console.error(error);
      });

    e.target.reset();
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
          <h3 className="mt-6">{long_description}</h3>
        </div>
        <div className="flex justify-end my-3 px-3 lg:px-12">
          {bloger_email === user.email && (
            <Link to={`/updateBlog/${_id}`}>
              <button className="btn bg-[#805aed] text-white btn-sm lg:btn-md">
                Update Blog
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Comment section */}
      <div className="card bg-base-100 rounded-none lg:px-12 p-3 pt-8 mt-8">
        <h2 className="card-title text-3xl lg:text-4xl mb-5">
          Leave a Comment
        </h2>

        {bloger_email === user.email ? (
          <h3 className="text-lg">You can not comment on own blog.</h3>
        ) : (
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
        )}

        <h2 className="card-title text-3xl mb-5 mt-8">Comments</h2>
        {commentInfo &&
          commentInfo.map((curr_comment) => (
            <div key={curr_comment._id} className="border-t-2 py-8">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={curr_comment.photo} />
                </div>
                <div className="flex flex-col gap-3 ml-4">
                  <h3 className="text-lg font-bold">{curr_comment.name}</h3>
                  <h4>{curr_comment.comment}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogDetails;
