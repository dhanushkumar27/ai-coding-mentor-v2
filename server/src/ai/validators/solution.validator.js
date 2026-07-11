const {
    requireFields,
    requireObject,
    requireString,
} = require("../helpers/validation.helper");

const validateSolution = (data) => {

    requireObject({ data }, "data");

    requireFields(data, [
        "problem",
        "solutions",
    ]);

    requireObject(data, "problem");

    requireFields(data.problem, [
        "name",
        "platform",
        "problemNumber",
        "difficulty",
    ]);

    requireString(data.problem, "name");
    requireString(data.problem, "platform");
    requireString(data.problem, "problemNumber");
    requireString(data.problem, "difficulty");

    requireObject(data, "solutions");

    requireFields(data.solutions, [
        "bruteForce",
        "optimal",
    ]);

    validateSolutionType(data.solutions.bruteForce, "bruteForce");
    validateSolutionType(data.solutions.optimal, "optimal");

    return data;
};

const validateSolutionType = (solution, fieldName) => {

    requireObject({ solution }, "solution");

    requireFields(solution, [
        "code",
        "complexity",
        "pseudoCode",
    ]);

    requireString(solution, "code");
    requireString(solution, "pseudoCode");

    requireObject(solution, "complexity");

    requireFields(solution.complexity, [
        "time",
        "space",
    ]);

    requireString(solution.complexity, "time");
    requireString(solution.complexity, "space");
};

module.exports = {
    validateSolution,
};