export default function LeetcodeQuestion() {
  <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Find the Index of the First Occurrence in a String
    </h1>
    <div className="mb-6">
      <a 
        href="https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on LeetCode
      </a>
    </div>
    <div className="prose dark:prose-invert max-w-none mb-8">
      <h2>Problem Description</h2>
      <p>Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>.</p>
      <h3>Example 1:</h3>
      <pre><code>Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.
</code></pre>
      <h3>Example 2:</h3>
      <pre><code>Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
</code></pre>
      <h3>Constraints:</h3>
      <ul>
      <li><code>1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup></code></li>
      <li><code>haystack</code> and <code>needle</code> consist of only lowercase English characters.</li>
      </ul>
    </div>
    <div className="prose dark:prose-invert max-w-none">
      <h2>My Solution</h2>
      <p>I used a simple sliding window approach:</p>
      <p>1. Iterate through haystack with window size equal to needle length</p>
      <p>2. For each window, compare with needle string</p>
      <p>3. Return first matching index or -1</p>
      <p>Time complexity: O(n×m) where n is haystack length and m is needle length</p>
      <p>Space complexity: O(1)</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
        <p><strong>Python Implementation:</strong></p>
        <p>class Solution:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;def strStr(self, haystack, needle):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type haystack: str</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type needle: str</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: int</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if not needle:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;needle_len = len(needle)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;haystack_len = len(haystack)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if needle_len &gt; haystack_len:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Check each window</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for i in range(haystack_len - needle_len + 1):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if haystack[i:i + needle_len] == needle:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return i</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return -1</p>
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