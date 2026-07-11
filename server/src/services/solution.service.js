const buildSolutionPrompt = require("../ai/prompts/solution/solution.prompt");

console.log("buildSolutionPrompt =", buildSolutionPrompt);
console.log("typeof =", typeof buildSolutionPrompt);

const { generateContent } = require("../ai/providers/gemini.provider");

const { parseJSON } = require("../ai/parsers/response.parser");

const { validateSolution } = require("../ai/validators/solution.validator");

const { normalizeSolution } = require("../ai/normalizers/solution.normalizer");

const generateSolution = async ({
    language,
    problem,
    userInput,
}) => {

    const prompt = buildSolutionPrompt({
        language,
        problem,
        userInput,
    });

    const rawResponse = await generateContent(prompt);

    const parsedResponse = parseJSON(rawResponse);

    const validatedResponse = validateSolution(parsedResponse);

    const normalizedResponse = normalizeSolution(validatedResponse);

    return normalizedResponse;
};

module.exports = {
    generateSolution,
};