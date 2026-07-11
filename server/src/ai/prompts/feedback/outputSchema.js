const OUTPUT_SCHEMA = `
Return ONLY valid JSON.

{
  "identifiedProblem": "",

  "encouragement": {
    "emoji": "",
    "message": ""
  },

  "analysis": {
    "status": "",
    "errorTypes": []
  },

  "strengths": [],

  "issues": [],

  "hints": [],

  "thinkingQuestions": [],

  "codeReview": {
    "variableNaming": [],
    "cleanCode": [],
    "optimization": []
  },

  "conceptsToLearn": [],

  "edgeCasesToTest": []
}
`;

module.exports = OUTPUT_SCHEMA;