import Books from "../Books/Books";
import Header from "../Header/Header";
import HomeBanner from "../HomeBanner/HomeBanner";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Books></Books>      
        </div>
    );
};

export default Home;