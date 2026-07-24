import NavBar from "../../common/components/TempBar";
import Footer from "../../common/components/Footer";



import './index.css'

const MyLibrary = () =>{
    return(
        <div className="page-container">
            <NavBar/>
            <div className="myLibrary-container">
                <h1>My Library</h1>
            </div>
            <Footer/>
            
        </div>
    )
} 

export default MyLibrary