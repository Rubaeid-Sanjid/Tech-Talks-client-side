const Banner = () => {
  return (
    <div
      className="hero min-h-screen my-8"
      style={{
        backgroundImage: "url(https://i.ibb.co/hHX9ptx/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-50">
        <div className="lg:max-w-xl">
          <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Tech Insight</h1>
          <p className="mb-5 lg:text-lg">
            Dive Deep into the World of Technology with Expert Analysis,
            In-Depth Reviews, and the Latest News. Stay Informed and Empowered
            with Our Comprehensive Guides and Thought-Provoking Articles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
