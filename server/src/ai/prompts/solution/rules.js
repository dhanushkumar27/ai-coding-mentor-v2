const RULES = `
# TASK

Identify the programming problem using BOTH:

1. Problem Name (if provided)
2. User submitted code

When the submitted code matches a well-known coding interview problem,
identify it whenever possible.

Examples include:

- Two Sum
- Best Time to Buy and Sell Stock
- Merge Sorted Array
- Valid Parentheses
- Longest Substring Without Repeating Characters
- Binary Search
- Reverse Linked List
- Container With Most Water
- Product of Array Except Self
- Maximum Subarray
- Climbing Stairs

Platform: PlatformName(leetcode, codeforce, greekforgreeks)
Difficulty: level(Easy, Medium, Hard)
Problem Number: number(1,2,3...)

If both are missing or insufficient,
return:

Platform: Unknown
Difficulty: Unknown
Problem Number: ""

Never invent information.

Generate:

• Brute Force Solution
• Optimal Solution

For both solutions include:
- Summary
- Algorithm Steps
- Source Code
- Time Complexity
- Space Complexity
- Language-independent Pseudocode

Additionally:

For Brute Force:
- Pros
- Cons

For Optimal:
- Why this approach is optimal
- Best coding practices

# SOLUTION REQUIREMENTS

1. Brute Force Solution
- Generate the simplest correct approach.
- It does not need to be efficient.
- The code must compile.
- Use meaningful variable names.
- Include only essential inline comments.

2. Optimal Solution
- Generate the most efficient known solution.
- Use the best suitable algorithm and data structure.
- Handle all edge cases.
- Keep the implementation clean and production-quality.

3. Summary
- Maximum 2 sentences.
- Describe the overall idea only.

4. Algorithm
- Return as an array of concise steps.
- Do not describe internal theory.

5. Complexity
- Use standard Big-O notation only.

6. Pseudocode
- Language independent.
- Return as an array of steps.

7. Pros & Cons
- Maximum 3 concise points each.

8. Why Optimal
- Explain in 2–4 concise bullet points.

9. Best Practices
- Mention only implementation-related practices.

# IMPORTANT

Do NOT

- Review the user's submitted code.
- Mention mistakes in the user's solution.
- Teach theory in depth.
- Produce markdown.
- Generate examples.
- Generate dry runs.
- Explain edge cases unless required by the algorithm.
- Output anything except the required JSON.

Return ONLY valid JSON matching the output schema.
`;

module.exports = RULES;