const OUTPUT_SCHEMA = `
Return ONLY valid JSON.

{
  "problem": {
    "name": "",
    "platform": "",
    "problemNumber": "",
    "difficulty": ""
  },

  "solutions": {
    "bruteForce": {
      "code": "",
      "complexity": {
        "time": "",
        "space": ""
      },
      "pseudoCode": ""
    },

    "optimal": {
      "code": "",
      "complexity": {
        "time": "",
        "space": ""
      },
      "pseudoCode": ""
    }
  }
}
`;

module.exports = OUTPUT_SCHEMA;