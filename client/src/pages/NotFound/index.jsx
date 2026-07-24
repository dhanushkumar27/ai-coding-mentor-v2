import { Link } from "react-router-dom";

import "./index.css";

const NotFound = () => {
    return (
        <div className="not-found-container">

            <h1 className="error-code">404</h1>

            <h2 className="error-title">
                Page Not Found
            </h2>

            <p className="error-description">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="home-button"
            >
                Go to Home
            </Link>

        </div>
    );
};

export default NotFound;