import Link from 'next/link'

interface LearningItemProps {
  title: string
  description: string
  classification: 'book' | 'course'
  href: string
}

export function LearningItem({ title, description, classification, href }: LearningItemProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
          classification === 'book' 
            ? 'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-800'
            : 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800'
        }`}>
          {classification}
        </span>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 mb-3">{description}</p>
      <div className="flex justify-end">
        <Link 
          href={href} 
          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}