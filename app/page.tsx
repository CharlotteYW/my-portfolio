import { BlogPosts } from 'app/components/posts'
import { ProjectCard } from 'app/components/project-card'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Charlotte Wang
      </h1>
      <p className="mb-4">
        {`AI native machine learning engineer. Rebuilding my daily workflow on top of AI tools to improve efficiency.`}
      </p>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">My Work</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          I am an AI native machine learning engineer. I am building my workflow on top of AI tools to improve efficiency and creativity. I am passionate about using AI to solve real-world problems and create value for users.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
          I would try to put what I have done and learn here
        </p>
      </div>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">AI Support Task</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProjectCard
            title="Resume & JD Matcher"
            description="A tool that uses AI to analyze the match between a resume and a job description, providing a match score and insights for improvement."
            href="https://resume-match-ox1akazjv-charlotte-yw-s-projects.vercel.app/"
            tags={['AI', 'NLP', 'React', 'LLM']}
            status="Completed"
          />
          <ProjectCard
            title="Mini Chat"
            description="Implement a Chat GPT style app that it can interact with you by using react, Groq, Supabase and FastAPI in the backend"
            href="https://mini-chat-ebon.vercel.app/"
            tags={['React', 'FAstAPI', 'Groq', 'Streaming']}
            status="Completed"
          />
          <ProjectCard
            title="SQL Writing Agent"
            description="Implement a SQL writing agent that can help you write sql from natural language"
            href="https://sql-agent-dusky.vercel.app/"
            tags={['React', 'FAstAPI', 'Groq', 'MCP']}
            status="Completed"
          />
        </div>
      </div>
    </section>
  )
}
