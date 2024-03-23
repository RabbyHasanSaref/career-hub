import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {

    return (
        <div>
            <div className="my-10">
                <Banner></Banner>
            </div>

            <div className="my-10">
                <Category></Category>
            </div>

            <div className="my-10">
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;