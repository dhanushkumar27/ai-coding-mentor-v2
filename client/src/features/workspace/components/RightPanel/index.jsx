import FeedbackTab from "../FeedbackTab";
import SolutionTab from "../SolutionTab";
import ExplanationTab from "../ExplanationTab";



import "./index.css";

const TABS = [
    {
        id: "feedback",
        label: "Feedback",
    },
    {
        id: "explanation",
        label: "Explanation",
    },
    {
        id: "solution",
        label: "Solution",
    },
];

const RightPanel = ({
    width,
    selectedTab,
    setSelectedTab,
    feedback,
    solution,
    rightPanelFeedbackStatus,
    rightPanelSolutionStatus,
    onClickReviewCode,
    onClickGetSolution,
}) => {

    const renderContent = () => {

        switch (selectedTab) {

            case "feedback":
                return (
                    <FeedbackTab
                        feedback={feedback}
                        rightPanelFeedbackStatus={rightPanelFeedbackStatus}
                        onClickReviewCode={onClickReviewCode}
                    />
                );

            case "solution":
                return (
                    <SolutionTab 
                    solution={solution}
                    rightPanelSolutionStatus={rightPanelSolutionStatus}
                     onClickGetSolution={onClickGetSolution}/>
                );

            case "explanation":
                return (
                    <ExplanationTab />
                );

            default:
                return null;
        }
    };

    return (
        <div
            className="right-panel-main-container"
            style={{ width: `${width}%` }}
        >

             <div className="workspace-right-panel-header">
                <div className="header-title-container">
                    <h1 className="workspace-right-panel-header-heading">
                    AI Mentor
                    </h1>

                </div>

                <div className="workspace-right-panel-header-buttons">
                    {TABS.map(tab => (
                    <button
                        key={tab.id}
                        className={`header-btn ${
                        selectedTab === tab.id ? "active-tab" : ""
                        }`}
                        onClick={() => setSelectedTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                    ))}

                    <button className="save-btn">
                    💾 Save
                    </button>
                </div>
            </div>

            <div className="workSpace-right-panel-body">
                {renderContent()}
            </div>
        </div>
    );
};

export default RightPanel;