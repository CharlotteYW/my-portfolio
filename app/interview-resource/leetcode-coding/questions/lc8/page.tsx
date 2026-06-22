export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        String to Integer (atoi)
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/string-to-integer-atoi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer.</p>
        <p>The algorithm for <code>myAtoi(string s)</code> is as follows:</p>
        <ol>
        <li>Whitespaces: Read the string from left to right, skipping as many leading whitespaces as necessary until the first non-whitespace character is found.</li>
        <li>Sign: Check if the next character is <code>'-'</code> or <code>'+'</code>. If not, the sign is 1.</li>
        <li>Conversion: Read the integer by skipping leading zeros until a non-digit character is found or the end of the string is reached. If no digits were read, then the result is 0.</li>
        <li>Rounding: If the integer is out of the 32-bit signed integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then round the integer to remain in the range. Specifically, integers less than <code>-2<sup>31</sup></code> should be rounded to <code>-2<sup>31</sup></code>, and integers greater than <code>2<sup>31</sup> - 1</code> should be rounded to <code>2<sup>31</sup> - 1</code>.</li>
        </ol>
        <h3>Example 1:</h3>
        <pre><code>Input: s = "42"
Output: 42
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: s = "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the sign. Then read characters until the end. Read "-42".
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: s = "4193 with words"
Output: 4193
Explanation: Characters are read until the first non-digit.
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>0 &lt;= s.length &lt;= 200</code></li>
        <li><code>s</code> consists of English letters (lower-case and upper-case), digits (<code>0-9</code>), <code>' '</code>, <code>'+'</code>, <code>'-'</code>, and <code>'.'</code>.</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I implemented a state machine approach to convert the string:</p>
        <p>1. Skip leading whitespace</p>
        <p>2. Check for sign</p>
        <p>3. Read digits until non-digit character</p>
        <p>4. Handle overflow by clamping to 32-bit integer range</p>
        <p>Time complexity: O(n)</p>
        <p>Space complexity: O(1)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def myAtoi(self, s):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type s: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INT_MAX = 2**31 - 1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INT_MIN = -2**31</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s = s.lstrip()</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if not s:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sign = 1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if s[0] == '-':</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sign = -1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s = s[1:]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif s[0] == '+':</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s = s[1:]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for char in s:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if not char.isdigit():</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digit = int(char)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if result &gt; (INT_MAX - digit) // 10:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if sign == 1:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return INT_MAX</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return INT_MIN</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = result * 10 + digit</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return sign * result</p>
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