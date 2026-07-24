import { useNavigate } from "react-router-dom";

import NavBar from "../../common/components/TempBar";
import Footer from "../../common/components/Footer";

import "./index.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">

            <NavBar />

            <main className="home-container">

                <div className="hero">

                    <div className="hero-badge">
                        ✨ AI Powered Learning
                    </div>

                    <h1 className="hero-title">
                        Become Better at Coding,
                        <br />
                        <span>Not Better at Copying.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Practice • Debug • Optimize • Learn
                    </p>

                    <p className="hero-description">
                        Your personal AI mentor that helps you understand
                        mistakes instead of simply showing answers.
                    </p>

                    <div className="hero-buttons">

                        <button
                            className="primary-btn"
                            onClick={() => navigate("/section")}
                        >
                            🚀 Start Coding
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={() => navigate("/roadmap")}
                        >
                            📚 Explore Roadmap
                        </button>

                    </div>

                </div>

                <div className="floating-icons">

                    <div className="floating-card">
                        <div className="icon">🧠</div>
                        <h3>Learn</h3>
                        <p>Understand every concept deeply.</p>
                    </div>

                    <div className="floating-card">
                        <div className="icon">⚡</div>
                        <h3>Review</h3>
                        <p>Receive instant AI code review.</p>
                    </div>

                    <div className="floating-card">
                        <div className="icon">📈</div>
                        <h3>Improve</h3>
                        <p>Become interview ready faster.</p>
                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
};

export default Home;