const RULES = require("./rules");
const OUTPUT_SCHEMA = require("./outputSchema");

const buildExplanationPrompt = ({
    language,
    problem,
    userInput,
}) => {

    return `
${RULES}

# AVAILABLE INFORMATION

Programming Language:
${language}

Problem Name:
${problem?.name || ""}

Platform:
${problem?.platform || "Unknown"}

Problem Number:
${problem?.problemNumber || ""}

Difficulty:
${problem?.difficulty || "Unknown"}

# USER SUBMITTED CODE

Use this ONLY to identify the problem.

Do NOT review it.

${userInput}

${OUTPUT_SCHEMA}
`;
};

module.exports = buildExplanationPrompt;