import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  href: string
  tags: string[]
  status?: 'In Progress' | 'Completed' | 'Planned'
  companyWork?: string[]
  projectDescription?: string

}

const statusConfig = {
  'In Progress': {
    label: 'In Progress',
    style: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
  },
  'Completed': {
    label: 'Completed',
    style: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800',
  },
  'Planned': {
    label: 'Planned',
    style: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800',
  },
}

export function ProjectCard({ 
  title, 
  description, 
  href, 
  tags, 
  status='Completed',
  companyWork,
  projectDescription
}: ProjectCardProps) {
return (
  <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 transition-transform hover:scale-[1.02]">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 mb-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2">
        {companyWork && companyWork.length > 0 && (
          <div className="mb-3">
            <h4 className="font-medium text-sm mb-1">Company Work</h4>
            <ul className="text-sm list-disc list-inside text-neutral-600 dark:text-neutral-400">
              {companyWork.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
        )}

        {(!companyWork || companyWork.length === 0) && (
          <div className="mb-3">
            <h4 className="font-medium text-sm mb-1">Company Work</h4>
            <p className="text-sm text-neutral-500">Pending</p>
          </div>
        )}

        <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
          <h4 className="font-medium text-sm mb-1">Individual Project</h4>
          {projectDescription ? (
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{projectDescription}</p>
          ) : (
            <p className="text-sm text-neutral-500">To be added</p>
          )}
          {href && (
            <div className="mt-2">
              <Link 
                href={href} 
                className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Entry
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)
}