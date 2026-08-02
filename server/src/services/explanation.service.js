const buildExplanationPrompt = require("../ai/prompts/explanation/explanation.prompt");

const { generateContent } = require("../ai/providers/gemini.provider");

const { parseJSON } = require("../ai/parsers/response.parser");

const {
    validateExplanation,
} = require("../ai/validators/explanation.validator");

const {
    normalizeExplanation,
} = require("../ai/normalizers/explanation.normalizer");

const generateExplanation = async ({
    language,
    problem,
    userInput,
}) => {

    // Build Prompt
    const prompt = buildExplanationPrompt({
        language,
        problem,
        userInput,
    });

    // Generate AI Response
    const rawResponse = await generateContent(prompt);

    // Parse JSON
    const parsedResponse = parseJSON(rawResponse);

    // Validate Response
    const validatedResponse =
        validateExplanation(parsedResponse);

    // Normalize Response
    const normalizedResponse =
        normalizeExplanation(validatedResponse);

    return normalizedResponse;
};

module.exports = {
    generateExplanation,
};