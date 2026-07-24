import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";

const NavBar = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwtToken");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar-container">
      <Link className="brand-logo" to="/">
        <span className="brand-gradient">Codexa - </span>
        <span className="brand-letter">D</span>
    </Link>

      <div className="navbar-sections-container">
        <Link className="nav-link" to="/">
          <span className="nav-link-span">Home</span>
        </Link>

        <Link className="nav-link" to="/workspace">
          <span className="nav-link-span">Workspace</span>
        </Link>

        <Link className="nav-link" to="/myLibrary">
          <span className="nav-link-span">My Library</span>
        </Link>

        <button
          className="logout-button"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;