const OUTPUT_SCHEMA = `
Return ONLY valid JSON.

{
  "problem": {
  "name": "",
  "platform": "",
  "problemNumber": "",
  "difficulty": "",
  "recognized": true
},

  "solutions": {
    "bruteForce": {
      "summary": "",

      "code": "",

      "algorithm": [
        ""
      ],

      "complexity": {
        "time": "",
        "space": ""
      },

      "pseudoCode": [
   ""
],

      "pros": [
        ""
      ],

      "cons": [
        ""
      ]
    },

    "optimal": {
      "summary": "",

      "code": "",

      "algorithm": [
        ""
      ],

      "complexity": {
        "time": "",
        "space": ""
      },

      "pseudoCode": [
   ""
],

      "whyOptimal": [
        ""
      ],

      "bestPractices": [
        ""
      ]
    }
  }
}
`;

module.exports = OUTPUT_SCHEMA;