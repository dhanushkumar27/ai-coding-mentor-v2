const {
    requireFields,
    requireObject,
    requireString,
    requireArray,
} = require("../helpers/validation.helper");

const validateExplanation = (data) => {

    requireObject({ data }, "data");

    requireFields(data, [
        "problem",
        "explanation",
    ]);

    validateProblem(data.problem);

    validateExplanationSection(data.explanation);

    return data;
};

const validateProblem = (problem) => {

    requireObject({ problem }, "problem");

    requireFields(problem, [
        "name",
        "platform",
        "problemNumber",
        "difficulty",
    ]);

    requireString(problem, "name");
    requireString(problem, "platform");
    requireString(problem, "problemNumber");
    requireString(problem, "difficulty");
};

const validateExplanationSection = (explanation) => {

    requireObject({ explanation }, "explanation");

    requireFields(explanation, [
        "overview",
        "intuition",
        "approach",
        "algorithmFlow",
        "dryRun",
        "keyConcepts",
        "importantObservations",
        "commonMistakes",
        "interviewTips",
    ]);

    requireString(explanation, "overview");
    requireString(explanation, "intuition");

    requireArray(explanation, "approach");
    requireArray(explanation, "algorithmFlow");
    requireArray(explanation, "dryRun");
    requireArray(explanation, "keyConcepts");
    requireArray(explanation, "importantObservations");
    requireArray(explanation, "commonMistakes");
    requireArray(explanation, "interviewTips");
};

module.exports = {
    validateExplanation,
};