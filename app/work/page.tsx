import  { ProjectCard } from "app/components/project-card"
export default function WorkPage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Work
            </h1>
            <div className="prose">
                <h2>My Work</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    I am an AI native machine learning engineer. I am building my workflow on top of AI tools to improve efficiency and creativity. I am passionate about using AI to solve real-world problems and create value for users.
                </p>
                <p>I would try to put what I have done and learn here</p>
            </div>
            <h2 className="font-semibold text-xl mb-6 tracking-tighter">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ProjectCard
                title="Resume & JD Matcher"
                description="A tool that uses AI to analyze the match between a resume and a job description, providing a match score and insights for improvement."
                href="/resume-matcher"
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
            </div>
        </section>
    )
}
