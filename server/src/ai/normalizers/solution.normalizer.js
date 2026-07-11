const normalizeSolution = (data) => {

    data.problem = normalizeProblem(data.problem);

    data.solutions.bruteForce = normalizeApproach(data.solutions.bruteForce);

    data.solutions.optimal = normalizeApproach(data.solutions.optimal);

    return data;
};

const normalizeProblem = (problem) => ({
    ...problem,
    name: problem.name.trim(),
    platform: normalizePlatform(problem.platform),
    problemNumber: problem.problemNumber.trim(),
    difficulty: normalizeDifficulty(problem.difficulty),
});

const normalizeApproach = (approach) => ({
    ...approach,
    code: approach.code.trim(),
    pseudoCode: approach.pseudoCode.trim(),
    complexity: {
        time: approach.complexity.time.trim(),
        space: approach.complexity.space.trim(),
    },
});

const normalizePlatform = (platform) => {

    const value = platform.trim().toLowerCase();

    switch (value) {
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

    const value = difficulty.trim().toLowerCase();

    switch (value) {
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