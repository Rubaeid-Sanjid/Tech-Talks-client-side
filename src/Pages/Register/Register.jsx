import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/images/SignUp.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Register = () => {
  const { createUser, setUserProfile } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast({
        title: "Password is less than 6 characters",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast({
        title: "Password must have an Uppercase letter.",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!/.*\d.*/.test(password)) {
      toast({
        title: "Password must contain a numeric character.",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!/[$@!%#*&<>^()]/.test(password)) {
      toast({
        title: "Password must have a special character.",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        axios
          .post(
            "http://localhost:5000/jwt",
            { email: result?.user?.email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
        setUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => console.log(error.message));

        toast({
          title: "Account created.",
          description: "We've created account for you.",
          position: "top",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen my-8">
      <div className="hero-content">
        <div className="w-1/2">
          <img className="w-4/5" src={signUpImg} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">
              Register Now
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="image url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#805aed] text-white">Register</button>
            </div>
            <h4 className="text-center">
              Already have an account ?{" "}
              <Link to={"/login"} className="text-[#805aed]">
                Login
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;