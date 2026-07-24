import { InfinitySpin } from "react-loader-spinner";

import "./index.css";

const Loader = ({
    title = "AI is reviewing your code...",
    description = "Please wait while we analyze your solution."
}) => {
    return (
        <div className="loader-container">

            <InfinitySpin
                width="200"
                color="#2563eb"
            />

            <h2 className="loader-title">
                {title}
            </h2>

            <p className="loader-description">
                {description}
            </p>

        </div>
    );
};

export default Loader;