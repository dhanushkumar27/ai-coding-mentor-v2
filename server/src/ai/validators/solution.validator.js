const {
    requireFields,
    requireObject,
    requireString,
    requireArray,
} = require("../helpers/validation.helper");

const validateSolution = (data) => {

    requireObject({ data }, "data");

    requireFields(data, [
        "problem",
        "solutions",
    ]);

    validateProblem(data.problem);

    validateSolutionType(
        data.solutions.bruteForce,
        true
    );

    validateSolutionType(
        data.solutions.optimal,
        false
    );

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

const validateSolutionType = (
    solution,
    isBruteForce
) => {

    requireObject({ solution }, "solution");

    requireFields(solution, [
        "summary",
        "code",
        "algorithm",
        "complexity",
        "pseudoCode",
    ]);

    requireString(solution, "summary");
    requireString(solution, "code");

    requireArray(solution, "algorithm");
    requireArray(solution, "pseudoCode");

    requireObject(solution, "complexity");

    requireFields(solution.complexity, [
        "time",
        "space",
    ]);

    requireString(solution.complexity, "time");
    requireString(solution.complexity, "space");

    if (isBruteForce) {

        requireFields(solution, [
            "pros",
            "cons",
        ]);

        requireArray(solution, "pros");
        requireArray(solution, "cons");

    } else {

        requireFields(solution, [
            "whyOptimal",
            "bestPractices",
        ]);

        requireArray(solution, "whyOptimal");
        requireArray(solution, "bestPractices");

    }
};

module.exports = {
    validateSolution,
};