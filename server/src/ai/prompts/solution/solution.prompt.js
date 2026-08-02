const RULES = require("./rules");
const OUTPUT_SCHEMA = require("./outputSchema");

const buildSolutionPrompt = ({
  language,
  problem,
  userInput,
}) => {
  return `
${RULES}

# PROBLEM INFORMATION

The programming problem has already been identified.

Programming Language:
${language}

Problem Name:
${problem?.name || "Not Identified"}

Platform:
${problem?.platform || "Not Identified"}

Problem Number:
${problem?.problemNumber || "Not Identified"}

Difficulty:
${problem?.difficulty || "Not Identified"}

# USER'S SUBMITTED CODE

The following code is provided only as additional context.

The submitted code is provided ONLY to identify the programming problem.

Use it to recognize the problem.

Do NOT review the implementation.

Do NOT explain mistakes.

Do NOT compare your solution with the submitted code.

${userInput}

${OUTPUT_SCHEMA}
`;
};

module.exports = buildSolutionPrompt;