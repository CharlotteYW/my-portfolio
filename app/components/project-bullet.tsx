import Link from 'next/link'

interface ProjectBulletProps {
  title: string
  items: string[]
  showEntry?: string
}

export function ProjectBullet({ title, items, showEntry }: ProjectBulletProps) {
  if (!items || items.length === 0) {
    return (
      <div className="mb-3">
        <h4 className="font-medium text-sm mb-1">{title}</h4>
        <p className="text-sm text-neutral-500">{showEntry ? 'To be added' : 'Pending'}</p>
      </div>
    )
  }

  return (
    <div className="mb-3">
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      {showEntry && (
        <div className="mb-2">
          <Link 
            href={showEntry} 
            className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Entry
          </Link>
        </div>
      )}
      <ul className="text-sm list-disc list-inside text-neutral-600 dark:text-neutral-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}