import {useState, useRef} from "react";

import LeftPanel from "../../components/LeftPanel"
import RightPanel from "../../components/RightPanel"
import EDITOR_TEMPLATES from '../../constants/editorTemplates.jsx'
import validateWorkspace from '../../components/ValidateWorkspace'
import getFeedback from '../../services/feedback.api.jsx'

import './index.css'

const WorkSpace = () =>{
    const [language, setLanguage] = useState("java");
    const [feedback,setFeedback] = useState({})
    const [code, setcode] = useState(
        EDITOR_TEMPLATES.java
    );



    const onChangeLanguage = (lang) =>{
        setLanguage(lang)
        setcode(EDITOR_TEMPLATES[lang])
    }

    const [problemName, setProblemName] = useState("");
    const [leftWidth, setLeftWidth] = useState(50);
    const [selectedTab, setSelectedTab] = useState("feedback")
    const isDragging = useRef(false);

    const callFeedbackApi = async () =>{
        const feedback = await getFeedback({problemName, language, code})
        console.log(feedback)
        setFeedback(feedback)
    }

    const onClickReviewCode  = ()=>{
        console.log("btn")
        const error = validateWorkspace({
                problemName,
                language,
                code,
            });

        if (error) {

            alert(error);

            return;

        }
        callFeedbackApi()
    }
    const startDragging = () => {
        isDragging.current = true;
    };

    const stopDragging = () => {
        isDragging.current = false;
    };

    const handleMouseMove = event => {
        if (!isDragging.current) return;

        const screenWidth = window.innerWidth;

        let percentage = (event.clientX / screenWidth) * 100;

        // Limits
        if (percentage < 30) percentage = 30;
        if (percentage > 70) percentage = 70;

        setLeftWidth(percentage);
    };
    return(
        <div
            className="workSpace-container"
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
        >
            <LeftPanel 
            width={leftWidth}
            code={code} 
            setcode={setcode} 
            language={language} 
            onChangeLanguage={onChangeLanguage} 
            setProblemName={setProblemName} 
            onClickReviewCode={onClickReviewCode}/> 

            <div
                className="splitter"
                onMouseDown={startDragging}
            />
            
            <RightPanel feedback={feedback} selectedTab={selectedTab} setSelectedTab={setSelectedTab} width={100 - leftWidth}/>
        </div>
    )
}

export default WorkSpace