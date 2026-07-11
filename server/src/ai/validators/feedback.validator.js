const {
    requireFields,
    requireObject,
    requireString,
    requireArray,
} = require("../helpers/validation.helper");

const validateFeedback = (data) => {

    requireObject({ data }, "data");

    requireFields(data, [
        "identifiedProblem",
        "encouragement",
        "analysis",
        "strengths",
        "issues",
        "hints",
        "thinkingQuestions",
        "codeReview",
        "conceptsToLearn",
        "edgeCasesToTest",
    ]);

    requireString(data, "identifiedProblem");

    validateEncouragement(data.encouragement);

    validateAnalysis(data.analysis);

    validateStringArray(data, "strengths");
    validateStringArray(data, "issues");
    validateStringArray(data, "hints");
    validateStringArray(data, "thinkingQuestions");
    validateStringArray(data, "conceptsToLearn");
    validateStringArray(data, "edgeCasesToTest");

    validateCodeReview(data.codeReview);

    return data;
};

const validateEncouragement = (encouragement) => {

    requireObject({ encouragement }, "encouragement");

    requireFields(encouragement, [
        "emoji",
        "message",
    ]);

    requireString(encouragement, "emoji");
    requireString(encouragement, "message");
};

const validateAnalysis = (analysis) => {

    requireObject({ analysis }, "analysis");

    requireFields(analysis, [
        "status",
        "errorTypes",
    ]);

    requireString(analysis, "status");

    validateStringArray(analysis, "errorTypes");
};

const validateCodeReview = (codeReview) => {

    requireObject({ codeReview }, "codeReview");

    requireFields(codeReview, [
        "variableNaming",
        "cleanCode",
        "optimization",
    ]);

    validateStringArray(codeReview, "variableNaming");
    validateStringArray(codeReview, "cleanCode");
    validateStringArray(codeReview, "optimization");
};

const validateStringArray = (object, fieldName) => {

    requireArray(object, fieldName);

    object[fieldName].forEach((item, index) => {
        if (typeof item !== "string") {
            throw new Error(
                `Field "${fieldName}" must contain only strings. Invalid element at index ${index}.`
            );
        }
    });
};

module.exports = {
    validateFeedback,
};