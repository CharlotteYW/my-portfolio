export default function LeetcodeQuestion() {
  <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Remove Element
    </h1>
    <div className="mb-6">
      <a 
        href="https://leetcode.com/problems/remove-element/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on LeetCode
      </a>
    </div>
    <div className="prose dark:prose-invert max-w-none mb-8">
      <h2>Problem Description</h2>
      <p>Given an array <code>nums</code> and a value <code>val</code>, remove all instances of that value in-place and return the new length.</p>
      <p>Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.</p>
      <p>The order of elements can be changed. It doesn't matter what you leave beyond the new length.</p>
      <h3>Example 1:</h3>
      <pre><code>Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
</code></pre>
      <h3>Example 2:</h3>
      <pre><code>Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 4, 0, and 3 respectively.
</code></pre>
      <h3>Constraints:</h3>
      <ul>
      <li><code>0 &lt;= nums.length &lt;= 100</code></li>
      <li><code>0 &lt;= nums[i] &lt;= 50</code></li>
      <li><code>0 &lt;= val &lt;= 100</code></li>
      </ul>
    </div>
    <div className="prose dark:prose-invert max-w-none">
      <h2>My Solution</h2>
      <p>I used a two-pointer approach:</p>
      <p>1. Keep one pointer for the position of elements not equal to val</p>
      <p>2. Iterate through the array with another pointer</p>
      <p>3. If current element is not equal to val, place it at the unique pointer position</p>
      <p>Time complexity: O(n)</p>
      <p>Space complexity: O(1)</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
        <p><strong>Python Implementation:</strong></p>
        <p>class Solution:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;def removeElement(self, nums, val):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type nums: List[int]</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type val: int</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: int</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if not nums:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Pointer for elements not equal to val</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;write_index = 0</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Iterate through array</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for i in range(len(nums)):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if nums[i] != val:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[write_index] = nums[i]</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;write_index += 1</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return write_index</p>
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