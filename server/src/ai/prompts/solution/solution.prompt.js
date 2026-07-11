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

Programming Language:
${language}

Problem Name:
${problem.name}

Platform:
${problem.platform}

Problem Number:
${problem.problemNumber}

Difficulty:
${problem.difficulty}

# USER'S SUBMITTED CODE OR CONTEXT

${userInput}

${OUTPUT_SCHEMA}
`;
};

module.exports = 
  buildSolutionPrompt;