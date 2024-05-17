import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";

const Home = () => {
    return (
        <div className="container mx-auto px-3 lg:px-12">
            <Banner></Banner>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;