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
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">AI Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProjectCard
            title="Resume & JD Matcher"
            href="https://resume-match-ox1akazjv-charlotte-yw-s-projects.vercel.app/"
            tags={['AI', 'NLP', 'React', 'LLM']}
            status="Completed"
            companyWork={[
              "Developed AI-powered resume analysis system",
              "Implemented LLM-based matching algorithm"
            ]}
            individualProject={[
              "Built responsive web interface with React",
              "Integrated with LLM backend for intelligent matching"
            ]}
            individualProjectHref="https://resume-match-ox1akazjv-charlotte-yw-s-projects.vercel.app/"
          />
          <ProjectCard
            title="Mini Chat"
            href="https://mini-chat-ebon.vercel.app/"
            tags={['React', 'FastAPI', 'Groq', 'Streaming']}
            status="Completed"
            companyWork={[
              "Implemented ChatGPT-style interface",
              "Integrated with Groq for fast inference"
            ]}
            individualProject={[
              "Built real-time chat interface with React",
              "Connected to FastAPI backend for seamless experience"
            ]}
            individualProjectHref="https://mini-chat-ebon.vercel.app/"
          />
          <ProjectCard
            title="SQL Writing Agent"
            href="https://sql-agent-dusky.vercel.app/"
            tags={['React', 'FastAPI', 'Groq', 'MCP']}
            status="Completed"
            companyWork={[
              "Developed SQL query generation tool",
              "Integrated with various database connectors"
            ]}
            individualProject={[
              "Built interactive SQL editor interface",
              "Connected to LLM for natural language to SQL conversion"
            ]}
            individualProjectHref="https://sql-agent-dusky.vercel.app/"
          />
        </div>
      </div>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">AI Foundation Model & Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProjectCard
            title="Model Training Pipeline"
            href="#"
            tags={['Python', 'DVC', 'MLflow', 'Docker']}
            status="Completed"
            companyWork={[
              "Built automated ML model training pipeline",
              "Integrated with cloud storage for model versioning"
            ]}
            individualProject={[
              "Developed CI/CD pipeline for model training",
              "Implemented experiment tracking with MLflow"
            ]}
            individualProjectHref="#"
          />
          <ProjectCard
            title="Cloud Infrastructure"
            href="#"
            tags={['AWS', 'Kubernetes', 'Terraform', 'Docker']}
            status="Completed"
            companyWork={[
              "Designed scalable cloud infrastructure",
              "Implemented auto-scaling for ML workloads"
            ]}
            individualProject={[
              "Built containerized ML services with Docker",
              "Deployed Kubernetes cluster for model serving"
            ]}
            individualProjectHref="#"
          />
        </div>
      </div>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">Traditional Machine Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <ProjectCard
            title="Customer Segmentation"
            href="#"
            tags={['Python', 'Scikit-learn', 'Pandas', 'Matplotlib']}
            status="Completed"
            companyWork={[
              "Performed customer segmentation analysis",
              "Built recommendation system"
            ]}
            individualProject={[
              "Implemented clustering algorithms for customer groups",
              "Visualized segmentation results with matplotlib"
            ]}
            individualProjectHref="#"
          />
          <ProjectCard
            title="Predictive Analytics"
            href="#"
            tags={['R', 'Shiny', 'ggplot2', 'Statistics']}
            status="Completed"
            companyWork={[
              "Developed predictive models for business metrics",
              "Created dashboard for business insights"
            ]}
            individualProject={[
              "Built regression models for sales predictions",
              "Developed interactive dashboard with Shiny"
            ]}
            individualProjectHref="#"
          />
        </div>
      </div>
    </section>
  )
}
