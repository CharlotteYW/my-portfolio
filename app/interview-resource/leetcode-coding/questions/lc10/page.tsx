export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Regular Expression Matching
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/regular-expression-matching/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>'.'</code> and <code>'*'</code> where:</p>
        <ul>
        <li><code>'.'</code> Matches any single character.</li>
        <li><code>'*'</code> Matches zero or more of the preceding element.</li>
        </ul>
        <p>The matching should cover the entire input string (not partial).</p>
        <h3>Example 1:</h3>
        <pre><code>Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>0 &lt;= s.length &lt;= 20</code></li>
        <li><code>0 &lt;= p.length &lt;= 20</code></li>
        <li><code>s</code> contains only lowercase English letters.</li>
        <li><code>p</code> contains only lowercase English letters, <code>'.'</code>, and <code>'*'</code>.</li>
        <li>It is guaranteed for each appearance of the character <code>'*'</code>, there will be a previous valid character to match.</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I used dynamic programming to solve the regex matching problem:</p>
        <p>1. Create a 2D DP table where dp[i][j] represents if s[0:i] matches p[0:j]</p>
        <p>2. Handle base cases (empty string/pattern)</p>
        <p>3. Fill the DP table based on character matches and star operations</p>
        <p>Time complexity: O(m × n)</p>
        <p>Space complexity: O(m × n)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def isMatch(self, s, p):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type s: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type p: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: bool</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m, n = len(s), len(p)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp = [[False] * (n + 1) for _ in range(m + 1)]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Base case: empty string matches empty pattern</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[0][0] = True</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Handle patterns that can match empty string</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for j in range(2, n + 1):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if p[j-1] == '*':</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[0][j] = dp[0][j-2]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Fill the DP table</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for i in range(1, m + 1):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for j in range(1, n + 1):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if p[j-1] == '*':</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Match zero occurrence or one occurrence</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j] = dp[i][j-2] or (dp[i-1][j] and (s[i-1] == p[j-2] or p[j-2] == '.'))</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Regular character or dot matching</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dp[i][j] = dp[i-1][j-1] and (s[i-1] == p[j-1] or p[j-1] == '.')</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return dp[m][n]</p>
        </div>
      </div>
      <div className="mt-6">
        <a 
          href="/interview-resource/leetcode-coding"
          className="text-blue-600 hover:underline"
        >
          Back to LeetCode Problems List
        </a>
      </div>
    </section>
  );
}