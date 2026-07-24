import { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

import "./index.css";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorFound, setErrorFound] = useState(false);
    const [errorText, setErrorText] = useState("");

    if (Cookies.get("jwtToken")) {
        return <Navigate to="/" replace />;
    }

    const onSubmitLoginForm = async (event) => {
        event.preventDefault();

        const userDetails = {
            username,
            password,
        };

        const response = await fetch(
            "https://dummyjson.com/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails),
            }
        );

        const data = await response.json();

        if (response.ok) {
            Cookies.set("jwtToken", data.accessToken, {
                expires: 30,
            });

            navigate("/", { replace: true });
        } else {
            setErrorFound(true);
            setErrorText(data.message);
        }
    };

    return (
        <div className="login-page">

            <div className="background-circle circle1"></div>
            <div className="background-circle circle2"></div>

            <form
                className="login-card"
                onSubmit={onSubmitLoginForm}
            >

                <h1 className="login-title">
                    
                    <span className="brand-gradient">Codexa - </span>
                    <span className="brand-letter">D</span>

                </h1>

                <p className="login-subtitle">
                    Login to continue your coding journey.
                </p>

                <div className="input-group">

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />

                </div>

                <div className="input-group">

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                </div>

                <button
                    className="login-btn"
                    type="submit"
                >
                    Login
                </button>

                {errorFound && (
                    <p className="error-message">
                        {errorText}
                    </p>
                )}

            </form>

        </div>
    );
};

export default Login;