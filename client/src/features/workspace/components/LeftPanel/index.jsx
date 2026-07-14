import CodeEditor from '../CodeEditor'
import LanguageSelector from '../LanguageSelector'

import './index.css'

const LeftPanel = (props) =>{
    const {width, code, setcode,language, onChangeLanguage,setProblemName, onClickReviewCode} = props
    return(
        <div className="left-panel-main-container" style={{width: `${width}%`}}>
            <div  className='workSpace-left-panel-header'>
                <div>
                    <label className='user-input-label' htmlFor="userInput">Problem Name :</label>
                    <input id="userInput" className='user-input-element' onChange={(event)=>{setProblemName(event.target.value)}} type="text" placeholder="Enter the problem name"/>
                </div>
                <LanguageSelector language={language} onChangeLanguage={onChangeLanguage}/>
            </div>
            <div className='workSpace-left-panel-body'>
                <CodeEditor language={language} code={code} setcode={setcode}/>
            </div>
            <div  className='workSpace-left-panel-footer'>
                <button className='button'>Reset</button>
                <button className='button' onClick={()=>onClickReviewCode()}>Review Code</button>
            </div>
        </div>
    )

}

export default LeftPanel