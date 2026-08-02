const normalizeSolution = (data) => {

    data.problem = normalizeProblem(data.problem);

    data.solutions.bruteForce = normalizeApproach(
        data.solutions.bruteForce,
        true
    );

    data.solutions.optimal = normalizeApproach(
        data.solutions.optimal,
        false
    );

    return data;
};

const normalizeProblem = (problem) => ({
    ...problem,
    name: problem.name.trim(),
    platform: normalizePlatform(problem.platform),
    problemNumber: problem.problemNumber.trim(),
    difficulty: normalizeDifficulty(problem.difficulty),
});

const normalizeApproach = (approach, isBruteForce) => {

    const normalized = {
        ...approach,

        summary: approach.summary.trim(),

        code: approach.code.trim(),

        algorithm: normalizeArray(approach.algorithm),

        pseudoCode: normalizeArray(approach.pseudoCode),

        complexity: {
            time: approach.complexity.time.trim(),
            space: approach.complexity.space.trim(),
        },
    };

    if (isBruteForce) {

        normalized.pros = normalizeArray(approach.pros);

        normalized.cons = normalizeArray(approach.cons);

    } else {

        normalized.whyOptimal = normalizeArray(
            approach.whyOptimal
        );

        normalized.bestPractices = normalizeArray(
            approach.bestPractices
        );

    }

    return normalized;
};

const normalizeArray = (array) =>
    array
        .map(item => item.trim())
        .filter(Boolean);

const normalizePlatform = (platform) => {

    switch (platform.trim().toLowerCase()) {

        case "leetcode":
            return "LeetCode";

        case "codeforces":
            return "Codeforces";

        case "coding ninjas":
            return "Coding Ninjas";

        default:
            return platform.trim();
    }
};

const normalizeDifficulty = (difficulty) => {

    switch (difficulty.trim().toLowerCase()) {

        case "easy":
            return "Easy";

        case "medium":
            return "Medium";

        case "hard":
            return "Hard";

        default:
            return difficulty.trim();
    }
};

module.exports = {
    normalizeSolution,
};