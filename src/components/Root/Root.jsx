import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>      
            </div>    
            <Footer></Footer>  

        </div>
    );
};

export default Root;