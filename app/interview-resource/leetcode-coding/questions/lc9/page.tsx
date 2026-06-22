export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Palindrome Number
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/palindrome-number/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a <strong>palindrome</strong>, and <code>false</code> otherwise.</p>
        <h3>Example 1:</h3>
        <pre><code>Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
Therefore it is not a palindrome.
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>-2<sup>31</sup> &lt;= x &lt;= 2<sup>31</sup> - 1</code></li>
        </ul>
        <p><strong>Follow up:</strong> Could you solve it without converting the integer to a string?</p>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I used a mathematical approach to reverse half of the number:</p>
        <p>1. Negative numbers are not palindromes</p>
        <p>2. Single digit numbers are palindromes</p>
        <p>3. Reverse half the number and compare with the other half</p>
        <p>Time complexity: O(log(n))</p>
        <p>Space complexity: O(1)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def isPalindrome(self, x):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type x: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: bool</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if x &lt; 0:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if x &lt; 10:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return True</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if x % 10 == 0:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reversed_half = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while x &gt; reversed_half:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reversed_half = reversed_half * 10 + x % 10</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x //= 10</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if x == reversed_half or x == reversed_half // 10:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return True</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False</p>
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