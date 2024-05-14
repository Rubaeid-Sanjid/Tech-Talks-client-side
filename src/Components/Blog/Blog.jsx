import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const {title, image, short_description, category} = blog;
    return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{short_description}</p>
        <div className="badge badge-outline">{category}</div>
        <div className="card-actions justify-end">
          <Link><button className="btn bg-[#805aed] text-white">Details</button></Link>
          <Link><button className="btn bg-[#805aed] text-white">Wishlist</button></Link>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
