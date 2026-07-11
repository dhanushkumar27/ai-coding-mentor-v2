import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

import './index.css'

const About = () =>{
    return(
        <div className='page-container'>
            <NavBar/>
            <div className='body-container'>
                <h1>About</h1>
            </div>
            <Footer/>
        </div>
        
    )
}

export default About