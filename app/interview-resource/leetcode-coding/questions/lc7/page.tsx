export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Reverse Integer
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/reverse-integer/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Given a signed 32-bit integer <code>x</code>, return <code>x</code> <em>with its digits reversed</em>. If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then return <code>0</code>.</p>
        <p>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</p>
        <h3>Example 1:</h3>
        <pre><code>Input: x = 123
Output: 321
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: x = -123
Output: -321
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: x = 120
Output: 21
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>-2<sup>31</sup> &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I reversed the integer digit by digit while checking for overflow:</p>
        <p>1. Handle negative numbers by storing sign</p>
        <p>2. Extract digits one by one from right to left</p>
        <p>3. Check for potential overflow before multiplying</p>
        <p>4. Return result with original sign</p>
        <p>Time complexity: O(log(x))</p>
        <p>Space complexity: O(1)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def reverse(self, x):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type x: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INT_MAX = 2**31 - 1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INT_MIN = -2**31</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sign = 1 if x &gt;= 0 else -1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = abs(x)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while x != 0:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digit = x % 10</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x //= 10</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if result &gt; (INT_MAX - digit) // 10:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0</p>
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