const normalizeExplanation = (data) => {

    data.problem = normalizeProblem(data.problem);

    data.explanation = normalizeExplanationSection(
        data.explanation
    );

    return data;
};

const normalizeProblem = (problem) => ({
    ...problem,

    name: problem.name.trim(),

    platform: normalizePlatform(
        problem.platform
    ),

    problemNumber:
        problem.problemNumber.trim(),

    difficulty: normalizeDifficulty(
        problem.difficulty
    ),
});

const normalizeExplanationSection = (explanation) => ({

    ...explanation,

    overview:
        explanation.overview.trim(),

    intuition:
        explanation.intuition.trim(),

    approach:
        normalizeArray(explanation.approach),

    algorithmFlow:
        normalizeArray(explanation.algorithmFlow),

    dryRun:
        normalizeArray(explanation.dryRun),

    keyConcepts:
        normalizeArray(explanation.keyConcepts),

    importantObservations:
        normalizeArray(explanation.importantObservations),

    commonMistakes:
        normalizeArray(explanation.commonMistakes),

    interviewTips:
        normalizeArray(explanation.interviewTips),
});

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
    normalizeExplanation,
};