import { ReactNode } from 'react'

interface ToolsAndSkillsProps {
  title: string
  content: ReactNode
}

export function ToolsAndSkills({ title, content }: ToolsAndSkillsProps) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 w-full">
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      {content}
    </div>
  )
}