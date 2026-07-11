import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

import './index.css'

const SectionDetails = () =>{
    return(
        <div className='page-container'>
            <NavBar/>
            <div className='body-container'>
                <h1>Section Details</h1>
            </div>
            <Footer/>
        </div>
        
    )
}

export default SectionDetails