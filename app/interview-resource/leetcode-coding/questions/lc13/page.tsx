export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Roman to Integer
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/roman-to-integer/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.</p>
        <table>
        <thead>
        <tr>
        <th>Symbol</th>
        <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>I</td>
        <td>1</td>
        </tr>
        <tr>
        <td>V</td>
        <td>5</td>
        </tr>
        <tr>
        <td>X</td>
        <td>10</td>
        </tr>
        <tr>
        <td>L</td>
        <td>50</td>
        </tr>
        <tr>
        <td>C</td>
        <td>100</td>
        </tr>
        <tr>
        <td>D</td>
        <td>500</td>
        </tr>
        <tr>
        <td>M</td>
        <td>1000</td>
        </tr>
        </tbody>
        </table>
        <p>For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.</p>
        <p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four.</p>
        <p>The same principle applies to the number nine, which is written as IX.</p>
        <p>There are six instances where subtraction is used:</p>
        <ul>
        <li>I can be placed before V (5) and X (10) to make 4 and 9.</li>
        <li>X can be placed before L (50) and C (100) to make 40 and 90.</li>
        <li>C can be placed before D (500) and M (1000) to make 400 and 900.</li>
        </ul>
        <h3>Example 1:</h3>
        <pre><code>Input: s = "III"
Output: 3
Explanation: III = 3.
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: s = "MCMXC"
Output: 1990
Explanation: M = 1000, CM = 900, XC = 90.
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>1 &lt;= s.length &lt;= 15</code></li>
        <li><code>s</code> contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')</li>
        <li>It is guaranteed that s is a valid Roman numeral in the range [1, 3999]</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I used a hash map approach to convert Roman numerals to integers:</p>
        <p>1. Create a mapping for all Roman symbols and their values</p>
        <p>2. Iterate through the string, checking if current character forms a subtractive pair</p>
        <p>3. If yes, add the combined value and skip next character</p>
        <p>4. If no, add individual character value</p>
        <p>Time complexity: O(n)</p>
        <p>Space complexity: O(1)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def romanToInt(self, s):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type s: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Map Roman characters to their values</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while i &lt; len(s):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if i + 1 &lt; len(s) and roman_map[s[i]] &lt; roman_map[s[i+1]]:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# This is a subtractive pair</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += roman_map[s[i+1]] - roman_map[s[i]]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i += 2</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += roman_map[s[i]]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i += 1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return total</p>
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