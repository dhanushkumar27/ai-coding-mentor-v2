const API_URL = `${import.meta.env.VITE_API_URL}/api/solution`;

const getSolution = async (props) => {
    const {
        language,
        problemName,
        code,
    } = props;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            language,
            problemName,
            userInput: code,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to generate solution.");
    }

    return await response.json();
};

export default getSolution;