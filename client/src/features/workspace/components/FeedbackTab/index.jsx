import responseStatus from "../../constants/responseStatus";


import "./index.css";

const FeedbackTab = ({
    feedback,
   rightPanelFeedbackStatus,
    onClickReviewCode,
}) => {

    // Loading State
    if (rightPanelFeedbackStatus === responseStatus.inProgress) {
        return (
            <div className="feedback-state">

                <div className="loader"></div>

                <h2>Reviewing your code...</h2>

                <p>
                    AI Mentor is analyzing your solution.
                </p>

            </div>
        );
    }

    // Empty State
    if (rightPanelFeedbackStatus === responseStatus.failure) {
        return (
            <div className="feedback-state">
                <h1>Try Again</h1>
                <button
                        className="review-btn"
                        onClick={onClickReviewCode}
                    >
                        Review Code
                </button>
            </div>
        );
    }

    if(rightPanelFeedbackStatus === responseStatus.success){
    const {
        identifiedProblem = "Unknown Problem",

        encouragement = {},

        analysis = {},

        strengths = [],

        issues = [],

        hints = [],

        thinkingQuestions = [],

        codeReview = {},

        conceptsToLearn = [],

        edgeCasesToTest = [],
    } = feedback;

    const {
        emoji = "💡",
        message = "Feedback Generated",
    } = encouragement;

    const {
        status = "Unknown",
    } = analysis;

    const {
        variableNaming = [],
        cleanCode = [],
        optimization = [],
    } = codeReview;

    return (
        <div className="feedback-container">

            <div className="feedback-header">

                <h2>
                    {emoji} {message}
                </h2>

                <p className="problem-name">
                    <strong>Detected Problem:</strong>{" "}
                    {identifiedProblem}
                </p>

                <span
                    className={`status ${
                        status.toLowerCase() === "correct"
                            ? "correct"
                            : "incorrect"
                    }`}
                >
                    {status}
                </span>

            </div>

            
            {strengths.length > 0 &&
                <section className="feedback-section">
                    <h3>✅ Strengths</h3>

                    <ul>
                        {strengths.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                </section>
            }

            {issues.length > 0 &&
                <section className="feedback-section">

                    <h3>⚠️ Issues Found</h3>

                    <ul>
                        {issues.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>

                </section>
            }

            {hints.length > 0 &&
                <section className="feedback-section">

                    <h3>💡 Hints</h3>

                    {hints.map((hint, index) =>

                        <div
                            className="hint-card"
                            key={index}
                        >

                            <span className="hint-number">
                                Hint {index + 1}
                            </span>

                            <p>{hint}</p>

                        </div>

                    )}

                </section>
            }

            {thinkingQuestions.length > 0 &&
                <section className="feedback-section">

                    <h3>🤔 Thinking Questions</h3>

                    <ul>
                        {thinkingQuestions.map((item, index) =>
                            <li key={index}>{item}</li>
                        )}
                    </ul>

                </section>
            }

            {(variableNaming.length > 0 ||
                cleanCode.length > 0 ||
                optimization.length > 0) &&

                <section className="feedback-section">

                    <h3>🧹 Code Review</h3>

                    <div className="review-grid">

                        <div>

                            <h4>Variable Naming</h4>

                            <ul>
                                {variableNaming.map((item, index) =>
                                    <li key={index}>{item}</li>
                                )}
                            </ul>

                        </div>

                        <div>

                            <h4>Clean Code</h4>

                            <ul>
                                {cleanCode.map((item, index) =>
                                    <li key={index}>{item}</li>
                                )}
                            </ul>

                        </div>

                        <div>

                            <h4>Optimization</h4>

                            <ul>
                                {optimization.map((item, index) =>
                                    <li key={index}>{item}</li>
                                )}
                            </ul>

                        </div>

                    </div>

                </section>

            }

            {conceptsToLearn.length > 0 &&

                <section className="feedback-section">

                    <h3>📚 Concepts To Learn</h3>

                    <div className="chip-container">

                        {conceptsToLearn.map((item, index) =>

                            <span
                                className="chip"
                                key={index}
                            >
                                {item}
                            </span>

                        )}

                    </div>

                </section>

            }

            {edgeCasesToTest.length > 0 &&

                <section className="feedback-section">

                    <h3>🧪 Edge Cases To Test</h3>

                    <ul>

                        {edgeCasesToTest.map((item, index) =>

                            <li key={index}>{item}</li>

                        )}

                    </ul>

                </section>

            }

        </div>
        
    );

        }

    return <div className="feedback-state">

                <h2>👨‍🏫 AI Coding Mentor</h2>

                <p className="empty-title">
                    No feedback generated
                </p>

                <p className="empty-description">
                    Click the button below to analyze your solution and receive
                    debugging hints, code review and optimization suggestions.
                </p>

                <button
                    className="review-btn"
                    onClick={onClickReviewCode}
                >
                   Get Feedback
                </button>

            </div>
};

export default FeedbackTab;