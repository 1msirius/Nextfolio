'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

/**
 * GitHub calendar component
 *
 * A client component that displays GitHub contribution activity
 * with proper dark/light theme support
 *
 * @returns {JSX.Element | null} The GitHub calendar with proper theme or null during initialization
 */
export default function GithubCalendar() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  // Only render the calendar after component is mounted to prevent hydration issues
  useEffect(() => {
    setMounted(true)
    // Simulate loading delay
    setTimeout(() => setLoading(false), 300)
  }, [])

  if (!mounted) return null

  return (
    <div className="overflow-hidden max-w-full">
      {loading ? (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
          <GitHubCalendar
            username="AdithyanI"
            colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            blockSize={9}
            blockMargin={2}
            fontSize={11}
            hideColorLegend={false}
            hideMonthLabels={false}
            labels={{
              totalCount: '{{count}} contributions in the last year',
            }}
            style={{
              margin: '0 auto',
              width: '100%',
              maxWidth: '100%',
            }}
          />
        </div>
      )}
    </div>
  )
}
