export default function LeetcodeQuestion() {
  <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Remove Duplicates from Sorted Array
    </h1>
    <div className="mb-6">
      <a 
        href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on LeetCode
      </a>
    </div>
    <div className="prose dark:prose-invert max-w-none mb-8">
      <h2>Problem Description</h2>
      <p>Given a sorted array <code>nums</code>, remove the duplicates in-place such that each element appears only once and returns the new length.</p>
      <p>Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.</p>
      <h3>Example 1:</h3>
      <pre><code>Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
</code></pre>
      <h3>Example 2:</h3>
      <pre><code>Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
</code></pre>
      <h3>Constraints:</h3>
      <ul>
      <li><code>0 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
      <li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
      <li><code>nums</code> is sorted in ascending order.</li>
      </ul>
    </div>
    <div className="prose dark:prose-invert max-w-none">
      <h2>My Solution</h2>
      <p>I used a two-pointer approach:</p>
      <p>1. Keep one pointer for the position of unique elements</p>
      <p>2. Iterate through the array with another pointer</p>
      <p>3. If current element is different from previous, place it at unique pointer position</p>
      <p>Time complexity: O(n)</p>
      <p>Space complexity: O(1)</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
        <p><strong>Python Implementation:</strong></p>
        <p>class Solution:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;def removeDuplicates(self, nums):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type nums: List[int]</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: int</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if not nums:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Pointer for unique elements</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unique_index = 1</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Iterate from second element</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for i in range(1, len(nums)):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if nums[i] != nums[i-1]:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nums[unique_index] = nums[i]</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unique_index += 1</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return unique_index</p>
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