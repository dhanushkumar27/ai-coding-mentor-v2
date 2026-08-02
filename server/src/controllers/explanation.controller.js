const { generateExplanation } = require("../services/explanation.service");

const explanationController = async (req, res) => {

    try {

        const {
            language,
            problem,
            userInput,
        } = req.body;

        if (!language || !userInput) {
            return res.status(400).json({
                success: false,
                message: "language and userInput are required.",
            });
        }

        const explanation =
            await generateExplanation({
                language,
                problem,
                userInput,
            });

        return res.status(200).json(explanation);

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }

};

module.exports = {
    explanationController,
};