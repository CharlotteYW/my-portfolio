export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Zigzag Conversion
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/zigzag-conversion/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed-font for better legibility)</p>
        <pre><code>P   A   H   N
A P L S I I G
Y   I   R
</code></pre>
        <p>And then read line by line: <code>"PAHNAPLSIIGYIR"</code></p>
        <p>Write the code that will take a string and make this conversion given a number of rows:</p>
        <pre><code>string convert(string s, int numRows);
</code></pre>
        <h3>Example 1:</h3>
        <pre><code>Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: s = "A", numRows = 1
Output: "A"
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>1 &lt;= s.length &lt;= 1000</code></li>
        <li><code>s</code> consists of English letters (lower-case and upper-case), <code>,</code> and <code>.</code>.</li>
        <li><code>1 &lt;= numRows &lt;= 1000</code></li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I used a row-by-row approach to build the result:</p>
        <p>1. Create an array of empty lists for each row</p>
        <p>2. Traverse the string with a direction flag (up/down)</p>
        <p>3. Add each character to the appropriate row</p>
        <p>4. Change direction when reaching top or bottom row</p>
        <p>5. Join all rows to form the final string</p>
        <p>Time complexity: O(n)</p>
        <p>Space complexity: O(n)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def convert(self, s, numRows):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type s: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type numRows: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if numRows == 1 or numRows &gt;= len(s):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return s</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rows = [''] * numRows</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_row = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction = 1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for char in s:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rows[current_row] += char</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if current_row == 0:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction = 1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif current_row == numRows - 1:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction = -1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current_row += direction</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ''.join(rows)</p>
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