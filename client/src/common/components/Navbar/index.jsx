import {Link} from 'react-router-dom'

import {useNavigate} from 'react-router-dom'

import Cookies from 'js-cookie'


import './index.css'

const NavBar = () =>{
    const navigate = useNavigate()
    const onClickLogout = () => {
        Cookies.remove("jwtToken")
        return navigate("/login", {replace:true})
    }


    return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid navbar-main-container">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/section">Section</Link>
                            
                            <button className="nav-link" onClick={onClickLogout}>Logout</button>
                        </div>
                        </div>
                    </div>
                </nav>
    )
}

export default NavBar