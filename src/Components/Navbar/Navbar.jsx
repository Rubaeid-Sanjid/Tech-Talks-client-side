import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);

  const handleLogout = ()=>{
    logOutUser()
    .then(() => {
      
    }).catch((error) => {
      console.log(error.message);
    });
  }
  
    const navlink = <>
        <NavLink to={"/"} className={'mx-3 textl font-semibold'}>Home</NavLink>
        <NavLink to={"/addBlog"} className={'mx-3 textl font-semibold'}>Add Blog</NavLink>
        <NavLink to={"/allBlogs"} className={'mx-3 textl font-semibold'}>All blogs</NavLink>
        <NavLink to={"/featuredBlogs"} className={'mx-3 textl font-semibold'}>Featured Blogs</NavLink>
        <NavLink to={"/wishlist"} className={'mx-3 textl font-semibold'}>Wishlist</NavLink>     
    </>
  return (
    <div className="navbar lg:px-16 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <div className="flex">
          <button className="rounded-xl btn-ghost text-sm lg:text-2xl font-bold text-left">
          <span className="text-[#805aed]">Tech</span>TALKS
          </button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navlink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 lg:w-16 rounded-full">
                <img title={user.displayName} src={user.photoURL} />
              </div>
            </div>
            <button onClick={handleLogout} className="btn bg-[#805aed] text-white h-8 min-h-0 lg:h-12 lg:min-h-12 lg:px-4 px-2">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-2">
            <Link to="/login">
              <button className="btn bg-[#805aed] text-white h-8 min-h-0 lg:h-12 lg:min-h-12 lg:px-4 px-2">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn bg-[#805aed] text-white h-8 min-h-0 lg:h-12 lg:min-h-12 lg:px-4 px-2">Registration</button>
            </Link>
          </div>
        )
        }
      </div>
    </div>
  );
};

export default Navbar;