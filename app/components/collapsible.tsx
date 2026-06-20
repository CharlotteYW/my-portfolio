'use client'

import { useState } from 'react'

interface CollapsibleProps {
  title: string
  children: React.ReactNode
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={toggle}
        aria-expanded={isExpanded}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <svg 
          className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {children}
        </div>
      )}
    </div>
  )
}