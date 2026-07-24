import CodeEditor from "../CodeEditor";
import LanguageSelector from "../LanguageSelector";

import "./index.css";

const LeftPanel = ({
    width,
    problemName,
    setProblemName,
    language,
    onChangeLanguage,
    code,
    setcode,
    onClickReviewCode,
    onClickResetButton,
}) => {
    return (
        <div
            className="left-panel-main-container"
            style={{ width: `${width}%` }}
        >
            {/* Header */}

            <div className="workSpace-left-panel-header">

                <div className="problem-input-container">

                    <label
                        htmlFor="problemInput"
                        className="user-input-label"
                    >
                        Problem Name:
                    </label>

                    <input
                        id="problemInput"
                        className="user-input-element"
                        type="text"
                        value={problemName}
                        placeholder="Ex : Two Sum"
                        onChange={(e) =>
                            setProblemName(e.target.value)
                        }
                    />

                </div>

                <LanguageSelector
                    language={language}
                    onChangeLanguage={onChangeLanguage}
                />

            </div>

            {/* Editor */}

            <div className="workSpace-left-panel-body">

                <CodeEditor
                    language={language}
                    code={code}
                    setcode={setcode}
                />

            </div>

            {/* Footer */}

            <div className="workSpace-left-panel-footer">

                <button
                    className="reset-btn"
                    onClick={onClickResetButton}
                >
                    Reset
                </button>

                <button
                    className="review-btn"
                    onClick={onClickReviewCode}
                >
                    Review Code
                </button>

            </div>

        </div>
    );
};

export default LeftPanel;