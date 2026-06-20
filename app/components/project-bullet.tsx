import Link from 'next/link'

interface ProjectBulletProps {
  title: string
  items: string[]
  entry?: string
}

export function ProjectBullet({ title, items, entry }: ProjectBulletProps) {
  if (!items || items.length === 0) {
    return (
      <div className="mb-3">
        <h4 className="font-medium text-sm mb-1">{title}</h4>
        <p className="text-sm text-neutral-500">{entry ? 'To be added' : 'Pending'}</p>
      </div>
    )
  }

  return (
    <div className="mb-3">
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      {entry && (
        <div className="mb-2">
          <Link 
            href={entry} 
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