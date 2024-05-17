import Swal from "sweetalert2";

const Newsletter = () => {
  const handleSubscription = (e) => {
    e.preventDefault();
    
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Thank you for subscribing to our newsletter",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div className="bg-gradient-to-r from-[#7af6d0] to-[#b2f8e3] py-14 mt-8 lg:my-12">
      <div className="container mx-auto lg:px-12 px-3 flex items-center">
        <div className="flex-1">
          <h2 className="text-3xl lg:text-5xl font-bold mb-5">
            Sign up for Newsletter
          </h2>
          <p>Subscribe to Our Newsletter for the Latest Tech News</p>
        </div>

        <div className="flex-1">
          <form onSubmit={handleSubscription} className="flex justify-end gap-2">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
              required
            />
            <button
              className="btn bg-[#805aed] text-white text-lg rounded-full px-8"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
