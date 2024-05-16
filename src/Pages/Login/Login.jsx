import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/Login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import googleLogo from "../../assets/images/google-logo-image.png";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, googleLogin } = useContext(AuthContext);

  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        const user = { email };
        navigate("/");
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast({
          title: "Failed to login.",
          description: "Sorry! We've failed to log you in.",
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        axios
          .post(
            "http://localhost:5000/jwt",
            { email: result?.user?.email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast({
          title: "Failed to login.",
          description: "Sorry! We've failed to log you in.",
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="hero min-h-screen my-8">
      <div className="hero-content">
        <div className="w-1/2">
          <img className="w-4/5" src={loginImg} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">
              Login
            </h1>
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
              <button
                onClick={handleGoogleLogin}
                className="w-full px-4 py-2 border flex justify-center gap-2 rounded-lg mb-3"
              >
                <img className="w-6 h-6" src={googleLogo} alt="google logo" />
                <span>Login with Google</span>
              </button>
              <button className="btn bg-[#805aed] text-white">Login</button>
            </div>
            <h4 className="text-center">
              Do not have an account ?{" "}
              <Link to={"/register"} className="text-[#805aed]">
                Register
              </Link>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;