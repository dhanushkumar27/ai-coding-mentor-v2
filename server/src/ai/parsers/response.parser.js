const parseJSON = (text) => {
    if (typeof text !== "string") {
        throw new Error("AI response must be a string.");
    }

    try {
        const cleaned = text
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);

    } catch (error) {
        throw new Error("Invalid JSON returned by AI.");
    }
};

module.exports = {
    parseJSON,
};