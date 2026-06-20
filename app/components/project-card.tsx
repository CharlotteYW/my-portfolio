import Link from 'next/link'
import { ProjectBullet } from './project-bullet'

interface ProjectCardProps {
  title: string
  href: string
  tags: string[]
  status?: 'In Progress' | 'Completed' | 'Planned'
  companyWork?: string[]
  individualProject?: string[]
  individualProjectHref?: string | null
  individualProjectTitle?: string
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
  href, 
  tags, 
  status='Completed',
  companyWork,
  individualProject,
  individualProjectHref,
  individualProjectTitle
}: ProjectCardProps) {
return (
  <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 transition-transform hover:scale-[1.02]">
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${statusConfig[status].style}`}>
          {statusConfig[status].label}
        </span>
      </div>
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
    
    <div className="mb-3">
      <ProjectBullet 
        title="Company Work" 
        items={companyWork || []} 
        entry={undefined} 
      />
    </div>
    
    <div className="border-t border-gray-200 dark:border-gray-600 pt-3 mt-3">
      {individualProjectTitle && (
        <h4 className="font-medium text-sm mb-2">{individualProjectTitle}</h4>
      )}
      <ProjectBullet 
        title="Individual Project" 
        items={individualProject || []} 
        entry={individualProjectHref || undefined} 
      />
    </div>
  </div>
)
}