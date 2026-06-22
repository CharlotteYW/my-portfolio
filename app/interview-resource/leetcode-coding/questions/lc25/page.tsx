export default function LeetcodeQuestion() {
  <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Reverse Nodes in k-Group
    </h1>
    <div className="mb-6">
      <a 
        href="https://leetcode.com/problems/reverse-nodes-in-k-group/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on LeetCode
      </a>
    </div>
    <div className="prose dark:prose-invert max-w-none mb-8">
      <h2>Problem Description</h2>
      <p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return the modified list.</p>
      <p><code>k</code> is a positive integer and is less than or equal to the length of the list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.</p>
      <p>You may not alter the values in the list's nodes, only nodes themselves may be changed.</p>
      <h3>Example 1:</h3>
      <pre><code>Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
</code></pre>
      <h3>Example 2:</h3>
      <pre><code>Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
</code></pre>
      <h3>Constraints:</h3>
      <ul>
      <li>The number of nodes in the list is <code>n</code>.</li>
      <li><code>1 &lt;= n &lt;= 5000</code></li>
      <li><code>0 &lt;= Node.val &lt;= 1000</code></li>
      <li><code>1 &lt;= k &lt;= n</code></li>
      </ul>
    </div>
    <div className="prose dark:prose-invert max-w-none">
      <h2>My Solution</h2>
      <p>I used a recursive approach:</p>
      <p>1. Check if there are k nodes remaining</p>
      <p>2. If not, return the head as is</p>
      <p>3. If yes, reverse first k nodes</p>
      <p>4. Recursively process the remaining list</p>
      <p>5. Connect reversed part with recursively processed part</p>
      <p>Time complexity: O(n)</p>
      <p>Space complexity: O(n/k) due to recursion stack</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
        <p><strong>Python Implementation:</strong></p>
        <p># Definition for singly-linked list.</p>
        <p>class ListNode:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, val=0, next=None):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.val = val</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.next = next</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>class Solution:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;def reverseKGroup(self, head, k):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type head: ListNode</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type k: int</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: ListNode</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Check if we have k nodes left</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = head</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for _ in range(k):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if not current:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return head</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = current.next</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Reverse first k nodes</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prev = None</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = head</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for _ in range(k):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next_node = current.next</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current.next = prev</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prev = current</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = next_node</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Recursively process the remaining list</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;head.next = self.reverseKGroup(current, k)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return prev</p>
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