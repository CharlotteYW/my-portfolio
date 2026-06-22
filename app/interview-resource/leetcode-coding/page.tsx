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