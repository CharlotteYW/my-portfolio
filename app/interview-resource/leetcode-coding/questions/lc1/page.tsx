export default function LeetcodeQuestion() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Two Sum
      </h1>
      <div className="mb-6">
        <a 
          href="https://leetcode.com/problems/two-sum/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
        <p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>
        <p>You can return the answer in any order.</p>
        <h3>Example 1:</h3>
        <pre><code>Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
</code></pre>
        <h3>Example 2:</h3>
        <pre><code>Input: nums = [3,2,4], target = 6
Output: [1,2]
</code></pre>
        <h3>Example 3:</h3>
        <pre><code>Input: nums = [3,3], target = 6
Output: [0,1]
</code></pre>
        <h3>Constraints:</h3>
        <ul>
        <li><code>2 &lt;= nums.length &lt;= 10&lt;sup&gt;4&lt;/sup&gt;</code></li>
        <li><code>-10&lt;sup&gt;9&lt;/sup&gt; &lt;= nums[i] &lt;= 10&lt;sup&gt;9&lt;/sup&gt;</code></li>
        <li><code>-10&lt;sup&gt;9&lt;/sup&gt; &lt;= target &lt;= 10&lt;sup&gt;9&lt;/sup&gt;</code></li>
        <li><strong>Only one valid answer exists.</strong></li>
        </ul>
        <h3>Follow-up:</h3>
        <p>Can you come up with an algorithm that is less than <code>O(n&lt;sup&gt;2&lt;/sup&gt;)</code> time complexity?</p>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <p>I used a hash map approach to solve this in O(n) time:</p>
        <p>1. Create a hash map to store numbers and their indices</p>
        <p>2. Traverse the array</p>
        <p>3. For each number, calculate its complement (target - number)</p>
        <p>4. If complement exists in hash map, return indices</p>
        <p>5. Otherwise, store number and index in hash map</p>
        <p>6. Return empty array if no solution found</p>
        <p>Time complexity: O(n)</p>
        <p>Space complexity: O(n)</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
          <p><strong>Python Implementation:</strong></p>
          <p>class Solution:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;def twoSum(self, nums, target):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type nums: List[int]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type target: int</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: List[int]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num_map = {}</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for i, num in enumerate(nums):</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;complement = target - num</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if complement in num_map:</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [num_map[complement], i]</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num_map[num] = i</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return []</p>
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