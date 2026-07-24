import WorkSpace from '../../features/workspace/pages/WorkSpace'

import NavBar from '../../common/components/TempBar'
import Footer from '../../common/components/Footer'

import './index.css'

const Section = () =>{
    return(
        <div className='page-container'>
            <NavBar/>
            <div className='body-container'>
                <WorkSpace/>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Section