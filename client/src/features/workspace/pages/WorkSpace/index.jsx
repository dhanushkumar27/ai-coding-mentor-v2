import { useState, useRef } from "react";

import LeftPanel from "../../components/LeftPanel";
import RightPanel from "../../components/RightPanel";

import EDITOR_TEMPLATES from "../../constants/editorTemplates";
import responseStatus from "../../constants/responseStatus";

import validateWorkspace from "../../components/ValidateWorkspace";
import getFeedback from "../../services/feedback.api";
import getSolution from '../../services/solution.api'

import "./index.css";

const WorkSpace = () => {
    const [language, setLanguage] = useState("java");

    const [code, setCode] = useState(
        EDITOR_TEMPLATES.java
    );

    const [problemName, setProblemName] = useState("");

    const [feedback, setFeedback] = useState(null);
    const [solution, setSolution] = useState(null)

    const [selectedTab, setSelectedTab] = useState("feedback");

    const [rightPanelFeedbackStatus, setRightPanelFeedbackStatus] = useState(
        responseStatus.initial
    );
     const [rightPanelSolutionStatus, setRightPanelSolutionStatus] = useState(
        responseStatus.initial
    );

    const [leftWidth, setLeftWidth] = useState(50);

    const isDragging = useRef(false);

    const onChangeLanguage = language => {
        setLanguage(language);
        setCode(EDITOR_TEMPLATES[language]);
    };

    const callFeedbackApi = async () => {
        try {

            setRightPanelFeedbackStatus(responseStatus.inProgress);

            const feedbackData = await getFeedback({
                problemName,
                language,
                code,
            });

            setFeedback(feedbackData);

            setSelectedTab("feedback");

            setRightPanelFeedbackStatus(responseStatus.success);

        } catch (error) {

            console.error(error);

            setRightPanelFeedbackStatus(responseStatus.failure);
        }
    };

    const onClickReviewCode = () => {

        const error = validateWorkspace({
            problemName,
            language,
            code,
        });

        if (error) {
            alert(error);
            return;
        }

        callFeedbackApi();
    };

    const callSolutionApi = async () => {
        try {

            setRightPanelSolutionStatus(responseStatus.inProgress);

            const solutionData = await getSolution({
                language,
                problemName, // or your detected problem object
                code,
            });

            setSolution(solutionData);

            setSelectedTab("solution");

            setRightPanelSolutionStatus(responseStatus.success);

        } catch (error) {

            console.error(error);

            setRightPanelSolutionStatus(responseStatus.failure);

        }
    };

    const onClickGetSolution = () => {

        const error = validateWorkspace({
            problemName,
            language,
            code,
        });

        if (error) {
            alert(error);
            return;
        }

        callSolutionApi();
    };

    const onClickResetButton = () => {

        setProblemName("");

        setFeedback(null);
        setSolution(null);
        setCode(
            EDITOR_TEMPLATES[language]
        );

        setRightPanelFeedbackStatus(
            responseStatus.initial
        );
        setRightPanelSolutionStatus(
            responseStatus.initial
        );
    };

    const startDragging = () => {
        isDragging.current = true;
    };

    const stopDragging = () => {
        isDragging.current = false;
    };

    const handleMouseMove = event => {

        if (!isDragging.current) return;

        const percentage =
            (event.clientX / window.innerWidth) * 100;

        setLeftWidth(
            Math.min(
                70,
                Math.max(30, percentage)
            )
        );
    };

    return (
        <div
            className="workSpace-container"
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
        >

            <LeftPanel
                width={leftWidth}
                language={language}
                code={code}
                setcode={setCode}
                problemName={problemName}
                setProblemName={setProblemName}
                onChangeLanguage={onChangeLanguage}
                onClickReviewCode={onClickReviewCode}
                onClickResetButton={onClickResetButton}
            />

            <div
                className="splitter"
                onMouseDown={startDragging}
            />

            <RightPanel
                width={100 - leftWidth}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                feedback={feedback}
                solution={solution}
                onClickGetSolution={onClickGetSolution}
                rightPanelFeedbackStatus={rightPanelFeedbackStatus}
                rightPanelSolutionStatus={rightPanelSolutionStatus}
                onClickReviewCode={onClickReviewCode}
            />

        </div>
    );
};

export default WorkSpace;