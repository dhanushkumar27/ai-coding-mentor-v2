const API_URL = "http://localhost:5000/api/explanation";

const getExplanation = async (props) => {
    const {
    language,
    problemName,
    code,
} = props 
 
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            language,
            problemName,
            userInput:code,
        }),
    });
   
    if (!response.ok) {
        throw new Error("Failed to generate Explanation.");
    }

    return await response.json();
};

export default getExplanation
