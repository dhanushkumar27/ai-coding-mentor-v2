const buildFeedbackPrompt = require("../ai/prompts/feedback/feedback.prompt");

const { generateContent } = require("../ai/providers/gemini.provider");

const { parseJSON } = require("../ai/parsers/response.parser");

const { validateFeedback } = require("../ai/validators/feedback.validator");

const { normalizeFeedback } = require("../ai/normalizers/feedback.normalizer");

const generateFeedback = async ({
    language,
    problemName,
    userInput,
}) => {

    const prompt = buildFeedbackPrompt({
        language,
        problemName,
        userInput,
    });

    const rawResponse = await generateContent(prompt);

    const parsedResponse = parseJSON(rawResponse);

    validateFeedback(parsedResponse);

    return normalizeFeedback(parsedResponse);
};

module.exports = {
    generateFeedback,
};