import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

import './index.css'

const Section = () =>{
    return(
        <div className='page-container'>
            <NavBar/>
            <div className='body-container'>
                <h1>Section</h1>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Section