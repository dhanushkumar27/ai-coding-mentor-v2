import responseStatus from "../../constants/responseStatus";

import "./index.css";

const ExplanationTab = ({
    explanation,
    rightPanelExplanationStatus,
    onClickGetExplanation,
}) => {

    if (rightPanelExplanationStatus === responseStatus.inProgress) {

        return (
            <div className="feedback-state">

                <div className="loader"></div>

                <h2>Generating Explanation...</h2>

                <p>
                    AI Mentor is preparing a detailed explanation.
                </p>

            </div>
        );
    }

    if (rightPanelExplanationStatus === responseStatus.failure) {

        return (
            <div className="feedback-state">

                <h2>Unable to generate explanation.</h2>

                <button
                    className="review-btn"
                    onClick={onClickGetExplanation}
                >
                    Try Again
                </button>

            </div>
        );
    }

    if (!explanation) {

        return (

            <div className="feedback-state">

                <h2>📖 AI Explanation</h2>

                <p className="empty-title">
                    No explanation generated
                </p>

                <p className="empty-description">
                    Understand the intuition, algorithm flow,
                    concepts and interview insights behind the problem.
                </p>

                <button
                    className="review-btn"
                    onClick={onClickGetExplanation}
                >
                    Generate Explanation
                </button>

            </div>

        );
    }

    const {
        problem = {},
        explanation: details = {},
    } = explanation;

    return (

        <div className="feedback-container">

            <div className="feedback-header">

                <h2>📖 AI Explanation</h2>

                <p className="problem-name">

                    <strong>{problem.name}</strong>

                </p>

                <div className="solution-tags">

                    <span>{problem.platform}</span>

                    {
                        problem.problemNumber &&
                        <span>{problem.problemNumber}</span>
                    }

                    <span>{problem.difficulty}</span>

                </div>

            </div>

            <Section
                title="📝 Overview"
                text={details.overview}
            />

            <Section
                title="🧠 Intuition"
                text={details.intuition}
            />

            <ListSection
                title="⚙️ Approach"
                items={details.approach}
            />

            <ListSection
                title="▶️ Algorithm Flow"
                items={details.algorithmFlow}
                ordered
            />

            <ListSection
                title="🧪 Dry Run"
                items={details.dryRun}
                ordered
            />

            <ChipSection
                title="📚 Key Concepts"
                items={details.keyConcepts}
            />

            <ListSection
                title="💡 Important Observations"
                items={details.importantObservations}
            />

            <ListSection
                title="❌ Common Mistakes"
                items={details.commonMistakes}
            />

            <ListSection
                title="🎯 Interview Tips"
                items={details.interviewTips}
            />

        </div>

    );
};

const Section = ({ title, text }) => {

    if (!text) return null;

    return (

        <section className="feedback-section">

            <h3>{title}</h3>

            <p className="paragraph">
                {text}
            </p>

        </section>

    );

};

const ListSection = ({
    title,
    items,
    ordered = false,
}) => {

    if (!items?.length) return null;

    return (

        <section className="feedback-section">

            <h3>{title}</h3>

            {
                ordered ?

                    <ol>

                        {
                            items.map((item, index) => (

                                <li key={index}>
                                    {item}
                                </li>

                            ))
                        }

                    </ol>

                    :

                    <ul>

                        {
                            items.map((item, index) => (

                                <li key={index}>
                                    {item}
                                </li>

                            ))
                        }

                    </ul>

            }

        </section>

    );

};

const ChipSection = ({
    title,
    items,
}) => {

    if (!items?.length) return null;

    return (

        <section className="feedback-section">

            <h3>{title}</h3>

            <div className="chip-container">

                {
                    items.map((item, index) => (

                        <span
                            key={index}
                            className="chip"
                        >
                            {item}
                        </span>

                    ))
                }

            </div>

        </section>

    );

};

export default ExplanationTab;