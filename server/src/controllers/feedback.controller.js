const { generateFeedback } = require("../services/feedback.service");

const feedbackController = async (req, res) => {
    try {

        const {
            language,
            problemName,
            userInput,
        } = req.body;

        const feedback = await generateFeedback({
            language,
            problemName,
            userInput,
        });

        return res.status(200).json(feedback);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    feedbackController,
};