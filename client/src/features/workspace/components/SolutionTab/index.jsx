import responseStatus from "../../constants/responseStatus";
import "./index.css";

const SolutionTab = ({
    solution,
    rightPanelSolutionStatus,
    onClickGetSolution,
}) => {

    if (rightPanelSolutionStatus === responseStatus.inProgress) {
        return (
            <div className="feedback-state">
                <div className="loader"></div>

                <h2>Generating Solution...</h2>

                <p>
                    AI Mentor is creating optimized solutions...
                </p>
            </div>
        );
    }

    if (rightPanelSolutionStatus === responseStatus.failure) {
        return (
            <div className="feedback-state">
                <h2>Unable to generate solution.</h2>

                <button
                    className="review-btn"
                    onClick={onClickGetSolution}
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!solution) {
        return (
            <div className="feedback-state">

                <h2>🚀 AI Solution Generator</h2>

                <p className="empty-title">
                    No solution generated
                </p>

                <p className="empty-description">
                    Generate brute force and optimal solutions with complexity analysis.
                </p>

                <button
                    className="review-btn"
                    onClick={onClickGetSolution}
                >
                    Generate Solution
                </button>

            </div>
        );
    }

    const {
        problem = {},
        solutions = {},
    } = solution;

    return (
        <div className="solution-container">

            <div className="solution-header">

                <h2>🚀 AI Generated Solution</h2>

                <h3>{problem.name || "Unknown Problem"}</h3>

                <div className="solution-tags">

                    <span>{problem.platform || "Unknown Platform"}</span>

                    {
                        problem.problemNumber &&
                        <span>{problem.problemNumber}</span>
                    }

                    <span>{problem.difficulty || "Unknown Difficulty"}</span>

                </div>

            </div>

            <SolutionCard
                title="🐢 Brute Force"
                solution={solutions.bruteForce}
                bruteForce
            />

            <SolutionCard
                title="⚡ Optimal Solution"
                solution={solutions.optimal}
            />

        </div>
    );
};

const SolutionCard = ({
    title,
    solution,
    bruteForce = false,
}) => {

    if (!solution) return null;

    return (

        <section className="solution-card">

            <h3>{title}</h3>

            <p className="summary">
                {solution.summary}
            </p>

            <div className="complexity-grid">

                <div className="complexity-card">

                    <span>Time</span>

                    <h4>{solution.complexity?.time}</h4>

                </div>

                <div className="complexity-card">

                    <span>Space</span>

                    <h4>{solution.complexity?.space}</h4>

                </div>

            </div>

            {
                solution.algorithm?.length > 0 &&
                <>
                    <h4>Algorithm</h4>

                    <ol>

                        {
                            solution.algorithm.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))
                        }

                    </ol>
                </>
            }

            {
                solution.pseudoCode?.length > 0 &&
                <>
                    <h4>Pseudo Code</h4>

                    <pre className="pseudo-box">

                        {Array.isArray(solution.pseudoCode)
                            ? solution.pseudoCode.join("\n")
                            : solution.pseudoCode}

                    </pre>
                </>
            }

            <h4>Source Code</h4>

            <pre className="code-box">

                <code>{solution.code}</code>

            </pre>

            {
                bruteForce &&
                solution.pros?.length > 0 &&
                <>
                    <h4>Pros</h4>

                    <ul>
                        {solution.pros.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            }

            {
                bruteForce &&
                solution.cons?.length > 0 &&
                <>
                    <h4>Cons</h4>

                    <ul>
                        {solution.cons.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            }

            {
                !bruteForce &&
                solution.whyOptimal?.length > 0 &&
                <>
                    <h4>Why Optimal?</h4>

                    <ul>
                        {solution.whyOptimal.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            }

            {
                !bruteForce &&
                solution.bestPractices?.length > 0 &&
                <>
                    <h4>Best Practices</h4>

                    <ul>
                        {solution.bestPractices.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            }

        </section>

    );
};

export default SolutionTab;