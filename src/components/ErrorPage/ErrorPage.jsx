import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Opps... Error Happened</h2>            
            <Link to={'/'}>Click to go Back</Link>
        </div>
    );
};

export default ErrorPage;