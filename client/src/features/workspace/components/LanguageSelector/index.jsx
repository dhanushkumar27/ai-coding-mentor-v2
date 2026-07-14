import LANGUAGES from '../../constants/languages.jsx'

import './index.css'

const LanguageSelector = (props) =>{
    const {language, onChangeLanguage} = props
    return(
        <select value={language} onChange={(event)=>{onChangeLanguage(event.target.value)}}>
            {LANGUAGES.map(eachLanguage => <option key={eachLanguage.value} value={eachLanguage.value}>{eachLanguage.label}</option>)}
        </select>
    )
}

export default LanguageSelector