export default function LeetcodeCodingPage() {
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
    },
    {
      id: 6,
      title: "Zigzag Conversion",
      difficulty: "Medium",
    },
    {
      id: 7,
      title: "Reverse Integer",
      difficulty: "Easy",
    },
    {
      id: 8,
      title: "String to Integer (atoi)",
      difficulty: "Medium",
    },
    {
      id: 9,
      title: "Palindrome Number",
      difficulty: "Easy",
    },
    {
      id: 10,
      title: "Regular Expression Matching",
      difficulty: "Hard",
    },
    {
      id: 11,
      title: "Container With Most Water",
      difficulty: "Medium",
    },
    {
      id: 12,
      title: "Integer to Roman",
      difficulty: "Medium",
    },
    {
      id: 13,
      title: "Roman to Integer",
      difficulty: "Easy",
    },
    {
      id: 14,
      title: "Longest Common Prefix",
      difficulty: "Easy",
    },
    {
      id: 15,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
    },
    {
      id: 16,
      title: "3Sum",
      difficulty: "Medium",
    },
    {
      id: 17,
      title: "Letter Combinations of a Phone Number",
      difficulty: "Medium",
    },
    {
      id: 18,
      title: "4Sum",
      difficulty: "Medium",
    },
    {
      id: 19,
      title: "Remove Nth Node From End of List",
      difficulty: "Medium",
    },
    {
      id: 20,
      title: "Valid Parentheses",
      difficulty: "Easy",
    },
    {
      id: 21,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
    },
    {
      id: 22,
      title: "Generate Parentheses",
      difficulty: "Medium",
    },
    {
      id: 23,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
    },
    {
      id: 24,
      title: "Swap Nodes in Pairs",
      difficulty: "Medium",
    },
    {
      id: 25,
      title: "Reverse Nodes in k-Group",
      difficulty: "Hard",
    },
    {
      id: 26,
      title: "Remove Duplicates from Sorted Array",
      difficulty: "Easy",
    },
    {
      id: 27,
      title: "Remove Element",
      difficulty: "Easy",
    },
    {
      id: 28,
      title: "Find the Index of the First Occurrence in a String",
      difficulty: "Easy",
    },
    {
      id: 29,
      title: "Divide Two Integers",
      difficulty: "Medium",
    },
    {
      id: 30,
      title: "Substring with Concatenation of All Words",
      difficulty: "Hard",
    },
    {
      id: 31,
      title: "Next Permutation",
      difficulty: "Medium",
    },
    {
      id: 32,
      title: "Longest Valid Parentheses",
      difficulty: "Hard",
    },
    {
      id: 33,
      title: "Search in Rotated Sorted Array",
      difficulty: "Medium",
    },
    {
      id: 34,
      title: "Find First and Last Position of Element in Sorted Array",
      difficulty: "Medium",
    },
    {
      id: 35,
      title: "Search Insert Position",
      difficulty: "Easy",
    },
    {
      id: 36,
      title: "Valid Sudoku",
      difficulty: "Medium",
    },
    {
      id: 37,
      title: "Sudoku Solver",
      difficulty: "Hard",
    },
    {
      id: 38,
      title: "Count and Say",
      difficulty: "Easy",
    },
    {
      id: 39,
      title: "Combination Sum",
      difficulty: "Medium",
    },
    {
      id: 40,
      title: "Combination Sum II",
      difficulty: "Medium",
    },
    {
      id: 41,
      title: "First Missing Positive",
      difficulty: "Hard",
    },
    {
      id: 42,
      title: "Trapping Rain Water",
      difficulty: "Hard",
    },
    {
      id: 43,
      title: "Multiply Strings",
      difficulty: "Medium",
    },
    {
      id: 44,
      title: "Wildcard Matching",
      difficulty: "Hard",
    },
    {
      id: 45,
      title: "Jump Game II",
      difficulty: "Medium",
    },
    {
      id: 46,
      title: "Permutations",
      difficulty: "Medium",
    },
    {
      id: 47,
      title: "Permutations II",
      difficulty: "Medium",
    },
    {
      id: 48,
      title: "Rotate Image",
      difficulty: "Medium",
    },
    {
      id: 49,
      title: "Group Anagrams",
      difficulty: "Medium",
    },
    {
      id: 50,
      title: "Pow(x, n)",
      difficulty: "Medium",
    },
    {
      id: 51,
      title: "N-Queens",
      difficulty: "Hard",
    },
    {
      id: 52,
      title: "N-Queens II",
      difficulty: "Hard",
    },
    {
      id: 53,
      title: "Maximum Subarray",
      difficulty: "Easy",
    },
    {
      id: 54,
      title: "Spiral Matrix",
      difficulty: "Medium",
    },
    {
      id: 55,
      title: "Jump Game",
      difficulty: "Medium",
    },
    {
      id: 56,
      title: "Merge Intervals",
      difficulty: "Medium",
    },
    {
      id: 57,
      title: "Insert Interval",
      difficulty: "Medium",
    },
    {
      id: 58,
      title: "Length of Last Word",
      difficulty: "Easy",
    },
    {
      id: 59,
      title: "Spiral Matrix II",
      difficulty: "Medium",
    },
    {
      id: 60,
      title: "Permutation Sequence",
      difficulty: "Hard",
    },
    {
      id: 61,
      title: "Rotate List",
      difficulty: "Medium",
    },
    {
      id: 62,
      title: "Unique Paths",
      difficulty: "Medium",
    },
    {
      id: 63,
      title: "Unique Paths II",
      difficulty: "Medium",
    },
    {
      id: 64,
      title: "Minimum Path Sum",
      difficulty: "Medium",
    },
    {
      id: 65,
      title: "Valid Number",
      difficulty: "Hard",
    },
    {
      id: 66,
      title: "Plus One",
      difficulty: "Easy",
    },
    {
      id: 67,
      title: "Add Binary",
      difficulty: "Easy",
    },
    {
      id: 68,
      title: "Text Justification",
      difficulty: "Hard",
    },
    {
      id: 69,
      title: "Sqrt(x)",
      difficulty: "Easy",
    },
    {
      id: 70,
      title: "Climbing Stairs",
      difficulty: "Easy",
    },
    {
      id: 71,
      title: "Simplify Path",
      difficulty: "Medium",
    },
    {
      id: 72,
      title: "Edit Distance",
      difficulty: "Hard",
    },
    {
      id: 73,
      title: "Set Matrix Zeroes",
      difficulty: "Medium",
    },
    {
      id: 74,
      title: "Search a 2D Matrix",
      difficulty: "Medium",
    },
    {
      id: 75,
      title: "Sort Colors",
      difficulty: "Medium",
    },
    {
      id: 76,
      title: "Minimum Window Substring",
      difficulty: "Hard",
    },
    {
      id: 77,
      title: "Combinations",
      difficulty: "Medium",
    },
    {
      id: 78,
      title: "Subsets",
      difficulty: "Medium",
    },
    {
      id: 79,
      title: "Word Search",
      difficulty: "Medium",
    },
    {
      id: 80,
      title: "Remove Duplicates from Sorted Array II",
      difficulty: "Medium",
    },
    {
      id: 81,
      title: "Search in Rotated Sorted Array II",
      difficulty: "Medium",
    },
    {
      id: 82,
      title: "Remove Duplicates from Sorted List II",
      difficulty: "Medium",
    },
    {
      id: 83,
      title: "Remove Duplicates from Sorted List",
      difficulty: "Easy",
    },
    {
      id: 84,
      title: "Largest Rectangle in Histogram",
      difficulty: "Hard",
    },
    {
      id: 85,
      title: "Maximal Rectangle",
      difficulty: "Hard",
    },
    {
      id: 86,
      title: "Partition List",
      difficulty: "Medium",
    },
    {
      id: 87,
      title: "Scramble String",
      difficulty: "Hard",
    },
    {
      id: 88,
      title: "Merge Sorted Array",
      difficulty: "Easy",
    },
    {
      id: 89,
      title: "Gray Code",
      difficulty: "Medium",
    },
    {
      id: 90,
      title: "Subsets II",
      difficulty: "Medium",
    },
    {
      id: 91,
      title: "Decode Ways",
      difficulty: "Medium",
    },
    {
      id: 92,
      title: "Reverse Linked List II",
      difficulty: "Medium",
    },
    {
      id: 93,
      title: "Restore IP Addresses",
      difficulty: "Medium",
    },
    {
      id: 94,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Easy",
    },
    {
      id: 95,
      title: "Unique Binary Search Trees II",
      difficulty: "Medium",
    },
    {
      id: 96,
      title: "Unique Binary Search Trees",
      difficulty: "Medium",
    },
    {
      id: 97,
      title: "Interleaving String",
      difficulty: "Hard",
    },
    {
      id: 98,
      title: "Validate Binary Search Tree",
      difficulty: "Medium",
    },
    {
      id: 99,
      title: "Recover Binary Search Tree",
      difficulty: "Hard",
    },
    {
      id: 100,
      title: "Same Tree",
      difficulty: "Easy",
    },
  ];

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        LeetCode Coding Practice
      </h1>
      <p className="mb-4">
        My solutions to LeetCode coding problems.
      </p>
      <div className="space-y-2">
        {problems.map((problem) => (
          <div key={problem.id} className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              <a 
                href={`/interview-resource/leetcode-coding/questions/lc${problem.id}`}
                className="text-blue-600 hover:underline"
              >
                {problem.id}. {problem.title}
              </a>
            </h2>
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {problem.difficulty}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}