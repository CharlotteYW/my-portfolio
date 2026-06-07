'use client'
import { useState } from 'react'

interface MatchResult {
  matchScore: number
  matchingSkills: string[]
  missingSkills: string[]
  suggestions: string[]
  summary: string
}

export default function ResumeMatcher() {
  const [resume, setResume] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [result, setResult] = useState<MatchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function analyzeResumeMatch() {
    if (!resume || !jobDescription) {
      setError('Please provide both resume and job description')
      return
    }
    setLoading(true)
    setError(null)

    const systemPrompt = `You are a resume screening expert. Analyze the match between a resume and a job description.
Return ONLY valid JSON with no markdown fences or preamble, in this exact shape:
{
  "matchScore": <integer 0-100>,
  "matchingSkills": [<string>, ...],
  "missingSkills": [<string>, ...],
  "suggestions": [<string>, ...],
  "summary": "<2-3 sentence overview>"
}`

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: [
            {
              role: 'user',
              content: `RESUME:\n${resume}\n\nJOB DESCRIPTION:\n${jobDescription}`,
            },
          ],
        }),
      })

      if (!res.ok) throw new Error('API error ' + res.status)

      const data = await res.json()
      const text = data.content.map((b: { type: string; text?: string }) => b.text ?? '').join('')
      const clean = text.replace(/```json|```/g, '').trim()
      const parsed: MatchResult = JSON.parse(clean)

      parsed.matchScore = Math.max(0, Math.min(100, Math.round(parsed.matchScore)))
      setResult(parsed)
    } catch (err) {
      setError('Something went wrong while analyzing the resume. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const scoreColor =
    result && result.matchScore >= 70
      ? 'text-green-600'
      : result && result.matchScore >= 40
      ? 'text-yellow-600'
      : 'text-red-500'

  return (
    <section>
      <h1 className="font-bold text-2xl mb-2 tracking-tight">Resume & JD Matcher</h1>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Place your resume and the job description to see how well they match.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2">Your Resume</label>
          <textarea
            className="w-full h-64 p-3 border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-neutral-300"
            placeholder="Paste your resume here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Job Description</label>
          <textarea
            className="w-full h-64 p-3 border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-neutral-300"
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        onClick={analyzeResumeMatch}
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Match'}
      </button>

      {result && (
        <div className="mt-8 p-4 border rounded-lg bg-neutral-50 dark:bg-neutral-800">
          <h2 className="text-xl font-semibold mb-4">Match Result</h2>

          <p className="mb-1">
            <strong>Match Score: </strong>
            <span className={`text-2xl font-bold ${scoreColor}`}>{result.matchScore}%</span>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="h-2 rounded-full transition-all duration-700"
              style={{
                width: `${result.matchScore}%`,
                backgroundColor:
                  result.matchScore >= 70 ? '#16a34a' : result.matchScore >= 40 ? '#ca8a04' : '#ef4444',
              }}
            />
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{result.summary}</p>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Matching Skills:</h3>
            <ul className="list-disc list-inside">
              {result.matchingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Missing Skills:</h3>
            <ul className="list-disc list-inside">
              {result.missingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Suggestions:</h3>
            <ul className="list-disc list-inside">
              {result.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
