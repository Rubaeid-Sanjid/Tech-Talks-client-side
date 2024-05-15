import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Pages/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import AddBlog from "../../Pages/AddBlog/AddBlog";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/addBlog",
            element: <AddBlog></AddBlog>
        },
        {
            path: "/blogDetails/:id",
            element: <BlogDetails></BlogDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
        },
      ]
    },
  ]);

export default router;