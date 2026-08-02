const buildSolutionPrompt = require("../ai/prompts/solution/solution.prompt");

const { generateContent } = require("../ai/providers/gemini.provider");

const { parseJSON } = require("../ai/parsers/response.parser");

const { validateSolution } = require("../ai/validators/solution.validator");

const { normalizeSolution } = require("../ai/normalizers/solution.normalizer");

const generateSolution = async ({
    language,
    problem,
    userInput,
}) => {

    // Build Prompt
    const prompt = buildSolutionPrompt({
        language,
        problem,
        userInput,
    });

    // Generate AI Response
    const rawResponse = await generateContent(prompt);

    // Parse JSON
    const parsedResponse = parseJSON(rawResponse);

    // Validate Response
    const validatedResponse = validateSolution(parsedResponse);

    // Normalize Response
    const normalizedResponse = normalizeSolution(validatedResponse);

    return normalizedResponse;
};

module.exports = {
    generateSolution,
};