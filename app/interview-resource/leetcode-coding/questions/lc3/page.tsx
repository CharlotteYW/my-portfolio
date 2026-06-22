export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Longest Substring Without Repeating Characters
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/longest-substring-without-repeating-characters/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>
        <h3>Example 1:</h3>
        <pre><code>Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>0 &lt;= s.length &lt;= 5 * 10&lt;sup&gt;4&lt;/sup&gt;</code></li>
        <li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I used the sliding window technique with a hash map to track character positions:</p>
        <p>1. Use a hash map to store character positions</p>
        <p>2. Maintain a sliding window with start and end pointers</p>
        <p>3. Expand window by moving end pointer</p>
        <p>4. If character already exists in window:</p>
        <p>   a. Move start pointer to right of duplicate character</p>
        <p>   b. Update window boundaries</p>
        <p>5. Update maximum length at each step</p>
        <p>6. Return maximum length</p>
        <p>Time complexity: O(n)</p>
        <p>Space complexity: O(min(m,n)) where m is the size of the character set</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def lengthOfLongestSubstring(self, s):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type s: str</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char_map = {}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_length = 0</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for end, char in enumerate(s):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if char in char_map and char_map[char] &amp;gt;= start:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start = char_map[char] + 1</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;char_map[char] = end</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_length = max(max_length, end - start + 1)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return max_length</p>
        </div>
      </div>
    </section>
  );
}