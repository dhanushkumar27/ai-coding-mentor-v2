const normalizeFeedback = (data) => {

    data.identifiedProblem = data.identifiedProblem.trim();

    data.encouragement = {
        emoji: data.encouragement.emoji.trim(),
        message: data.encouragement.message.trim(),
    };

    data.analysis = {
        status: normalizeStatus(data.analysis.status),
        errorTypes: data.analysis.errorTypes.map(normalizeErrorType),
    };

    data.strengths = normalizeArray(data.strengths);
    data.issues = normalizeArray(data.issues);
    data.hints = normalizeArray(data.hints);
    data.thinkingQuestions = normalizeArray(data.thinkingQuestions);

    data.codeReview = {
        variableNaming: normalizeArray(data.codeReview.variableNaming),
        cleanCode: normalizeArray(data.codeReview.cleanCode),
        optimization: normalizeArray(data.codeReview.optimization),
    };

    data.conceptsToLearn = normalizeArray(data.conceptsToLearn);

    data.edgeCasesToTest = normalizeArray(data.edgeCasesToTest);

    return data;
};

const normalizeArray = (array) =>
    array.map(item => item.trim());

const normalizeStatus = (status) => {

    switch (status.trim().toLowerCase()) {

        case "correct":
            return "Correct";

        case "partially_correct":
        case "partially correct":
            return "Partially Correct";

        case "incorrect":
            return "Incorrect";

        default:
            return status.trim();
    }
};

const normalizeErrorType = (type) => {

    const value = type.trim().toLowerCase();

    switch (value) {

        case "logical_error":
            return "Logical Error";

        case "syntax_error":
            return "Syntax Error";

        case "runtime_error":
            return "Runtime Error";

        case "time_complexity":
            return "Time Complexity";

        case "space_complexity":
            return "Space Complexity";

        case "missing_edge_cases":
            return "Missing Edge Cases";

        default:
            return type.trim();
    }
};

module.exports = {
    normalizeFeedback,
};