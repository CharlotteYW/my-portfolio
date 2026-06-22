export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Integer to Roman
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/integer-to-roman/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Seven different symbols represent Roman numerals with the following values:</p>
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
        <p>Roman numerals are formed by adding the values from highest to lowest.</p>
        <p>There are specific rules for conversion:</p>
        <ul>
        <li>For values that do not start with 4 or 9, subtract the largest possible value and continue with the remainder</li>
        <li>For values starting with 4 or 9, use subtractive notation (e.g., 4 is IV, 9 is IX)</li>
        <li>Only powers of 10 (I, X, C, M) can be repeated up to 3 times</li>
        <li>Do not repeat 5 (V), 50 (L), or 500 (D) more than once</li>
        </ul>
        <h3>Example 1:</h3>
        <pre><code>Input: num = 3749
Output: "MMMDCCXLIX"
Explanation:
3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
700 = DCC as 500 (D) + 100 (C) + 100 (C)
40 = XL as 10 (X) less of 50 (L)
9 = IX as 1 (I) less of 10 (X)
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: num = 58
Output: "LVIII"
Explanation:
50 = L
5 = V
3 = III
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: num = 1994
Output: "MCMXCIV"
Explanation:
1000 = M
900 = CM
90 = XC
4 = IV
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>1 &lt;= num &lt;= 3999</code></li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I used a mapping approach to convert integer to Roman numerals:</p>
        <p>1. Create mappings for all valid Roman numeral combinations (including subtractive notation)</p>
        <p>2. Process the number from highest to lowest value</p>
        <p>3. For each value, append the corresponding Roman symbols</p>
        <p>Time complexity: O(1)</p>
        <p>Space complexity: O(1)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def intToRoman(self, num):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type num: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Define mappings in descending order</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = ''</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for i in range(len(values)):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Add symbols while number is >= current value</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while num >= values[i]:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += symbols[i]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num -= values[i]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return result</p>
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