import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <h2 className="text-8xl font-bold">404</h2>
        <h3 className="font-semibold text-4xl text-[#805aed]">ERROR</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <h2 className="text-8xl font-bold">OH NO!</h2>
        <h3 className="font-semibold text-4xl text-[#805aed]">But that's okay!</h3>
      </div>
      <Link to={'/'}><button className="btn bg-[#805aed] text-white">Go Back</button></Link>
    </div>
  );
};

export default ErrorPage;
