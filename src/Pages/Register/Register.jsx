import { Link } from "react-router-dom";
import signUpImg from "../../assets/images/SignUp.jpg" 
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e)=>{
        e.preventDefault();

        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

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
              <h4 className="text-center">Already have an account ? <Link to={"/login"} className="text-[#805aed]">Login</Link></h4>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;