

import ExplanationTab from '../ExplanationTab'
import SolutionTab from '../SolutionTab'
import FeedbackTab from '../FeedbackTab'


import './index.css'



const RightPanel = (props) =>{
    
    const {width, selectedTab, setSelectedTab, feedback} = props

    const TABS={

    feedback:<FeedbackTab  feedback={feedback}/>,

    solution:<SolutionTab/>,

    explanation:<ExplanationTab/>

    }
  
    
    return(
        <div
    className="right-panel-main-container"
    style={{ width: `${width}%` }}
>
    <div className="workSpace-right-panel-header">

        <h1 className="workSpace-right-panel-header-heading">
            AI Mentor
        </h1>

        <div className="workSpace-right-pannel-header-buttons">

            <button
                className={`button ${
                    selectedTab === "feedback" ? "active-tab" : ""
                }`}
                onClick={() => setSelectedTab("feedback")}
            >
                Feedback
            </button>

            <button
                className={`button ${
                    selectedTab === "explanation" ? "active-tab" : ""
                }`}
                onClick={() => setSelectedTab("explanation")}
            >
                Explanation
            </button>

            <button
                className={`button ${
                    selectedTab === "solution" ? "active-tab" : ""
                }`}
                onClick={() => setSelectedTab("solution")}
            >
                Solution
            </button>

            <button className="button">
                Save
            </button>

        </div>

    </div>

    <div className="workSpace-right-panel-body">
        {TABS[selectedTab]}
    </div>

</div>
        
    )
}

export default RightPanel