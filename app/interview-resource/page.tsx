import Link from 'next/link'

export default function InterviewResourcePage() {
  const resources = [
    {
      title: "LeetCode Coding",
      description: "Coding practice problems for technical interviews",
      classification: "leetcode-coding",
      href: "/interview-resource/leetcode-coding"
    },
    {
      title: "Machine Learning Coding",
      description: "Coding problems related to machine learning concepts",
      classification: "ml-coding",
      href: "/interview-resource/ml-coding"
    },
    {
      title: "SDE System Design",
      description: "System design questions and patterns for software engineering roles",
      classification: "sde-system-design",
      href: "/interview-resource/sde-system-design"
    },
    {
      title: "Machine Learning System Design",
      description: "System design questions for ML engineering roles",
      classification: "ml-system-design",
      href: "/interview-resource/ml-system-design"
    },
    {
      title: "AI System Design",
      description: "System design questions for AI engineering roles",
      classification: "ai-system-design",
      href: "/interview-resource/ai-system-design"
    }
  ]

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Interview Resources
      </h1>
      <p className="mb-4">
        {`A collection of interview preparation materials and practice problems.`}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {resources.map((resource, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                resource.classification === 'leetcode-coding' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800'
                  : resource.classification === 'ml-coding'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-800'
                  : resource.classification === 'sde-system-design'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800'
                  : resource.classification === 'ml-system-design'
                  ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-800'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800'
              }`}>
                {resource.classification.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-3">{resource.description}</p>
            <div className="flex justify-end">
              <Link 
                href={resource.href} 
                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                View Resources
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}