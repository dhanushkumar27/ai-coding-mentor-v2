const RULES = require("./rules");
const OUTPUT_SCHEMA = require("./outputSchema");

const buildFeedbackPrompt = ({
    language,
    problemName,
    userInput,
}) => {

    return `
${RULES}

# USER INPUT

Programming Language:

${language}

Problem Name (may be empty):

${problemName}

User Code:

${userInput}

${OUTPUT_SCHEMA}
`;
};

module.exports = buildFeedbackPrompt;