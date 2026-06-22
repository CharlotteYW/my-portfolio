export default function LeetcodeQuestion() {
  <section>
    <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Swap Nodes in Pairs
    </h1>
    <div className="mb-6">
      <a 
        href="https://leetcode.com/problems/swap-nodes-in-pairs/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on LeetCode
      </a>
    </div>
    <div className="prose dark:prose-invert max-w-none mb-8">
      <h2>Problem Description</h2>
      <p>Given a linked list, swap every two adjacent nodes and return its head.</p>
      <p>You may not modify the values in the list's nodes. Only nodes themselves may be changed.</p>
      <h3>Example 1:</h3>
      <pre><code>Input: head = [1,2,3,4]
Output: [2,1,4,3]
</code></pre>
      <h3>Example 2:</h3>
      <pre><code>Input: head = []
Output: []
</code></pre>
      <h3>Example 3:</h3>
      <pre><code>Input: head = [1]
Output: [1]
</code></pre>
      <h3>Constraints:</h3>
      <ul>
      <li>The number of nodes in the list is in the range <code>[0, 100]</code>.</li>
      <li><code>0 &lt;= Node.val &lt;= 100</code></li>
      </ul>
    </div>
    <div className="prose dark:prose-invert max-w-none">
      <h2>My Solution</h2>
      <p>I used an iterative approach with dummy node:</p>
      <p>1. Create a dummy node to simplify node swapping</p>
      <p>2. For each pair, swap the next two nodes</p>
      <p>3. Update pointers to maintain list order</p>
      <p>Time complexity: O(n)</p>
      <p>Space complexity: O(1)</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
        <p><strong>Python Implementation:</strong></p>
        <p># Definition for singly-linked list.</p>
        <p>class ListNode:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, val=0, next=None):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.val = val</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.next = next</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>class Solution:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;def swapPairs(self, head):</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:type head: ListNode</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rtype: ListNode</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"""</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Create a dummy node</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dummy = ListNode(0)</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dummy.next = head</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prev = dummy</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while prev.next and prev.next.next:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Nodes to be swapped</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first = prev.next</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;second = prev.next.next</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Swap the nodes</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first.next = second.next</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;second.next = first</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prev.next = second</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Move prev to the next pair</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prev = first</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return dummy.next</p>
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