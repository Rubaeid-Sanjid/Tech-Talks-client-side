import Banner from "../../Components/Banner/Banner";
import Blogs from "../../Components/Blogs/Blogs";
import Newsletter from "../../Components/Newsletter/Newsletter";

const Home = () => {
    return (
        <div>
            <div className="container mx-auto px-3 lg:px-12">
            <Banner></Banner>
            <Blogs></Blogs>
            </div>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;