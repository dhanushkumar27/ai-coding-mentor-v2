const { generateSolution } = require("../services/solution.service");

const solutionController = async (req, res) => {
    try {

        const {
            language,
            problem,
            userInput,
        } = req.body;

        const solution = await generateSolution({
            language,
            problem,
            userInput,
        });

        return res.status(200).json(solution);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }
};

module.exports = {
    solutionController,
};