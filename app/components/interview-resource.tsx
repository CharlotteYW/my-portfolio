import Link from 'next/link'

interface InterviewResourceProps {
  category: string
  description: string
  href: string
}

export function InterviewResource({ category, description, href }: InterviewResourceProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold">{category}</h3>
        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800">
          interview
        </span>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">{description}</p>
      <div className="flex justify-end">
        <Link 
          href={href} 
          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Resources
        </Link>
      </div>
    </div>
  )
}