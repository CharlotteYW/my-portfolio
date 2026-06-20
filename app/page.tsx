import { BlogPosts } from 'app/components/posts'
import { ProjectCard } from 'app/components/project-card'
import { LearningItem } from 'app/components/learning-item'
import { InterviewResource } from 'app/components/interview-resource'
import { ToolsAndSkills } from 'app/components/tools-and-skills'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Charlotte Wang
      </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          I am an enperience machine learning engineer/research data scientist with five plugs years expeience.
          In my daily work, I built machine learning platform with huge data to help me company and clients to solve 
          real business problem to increase revenue and reduce course. My experience include data infrastrueture, data pipeline, machine learning model, model evaluation and AI applications.
          In addition, with recent trend of AI, I built AI foundation applications and tools for my company to improve productivity.
        </p>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">Tools & Skills</h2>
        
        <ToolsAndSkills 
          title="Machine Learning & Models"
          content={
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
              <li></li>
            </ul>
          }
        />
        
        <ToolsAndSkills 
          title="Machine Learning System & Workflow"
          content={
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
              <li></li>
            </ul>
          }
        />
        
        <ToolsAndSkills 
          title="Infrastructure"
          content={
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
              <li></li>
            </ul>
          }
        />
        
        <ToolsAndSkills 
          title="Cloud"
          content={
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
              <li></li>
            </ul>
          }
        />
        
        <ToolsAndSkills 
          title="Programming"
          content={
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
              <li></li>
            </ul>
          }
        />
        
        <ToolsAndSkills 
          title="AI Tools & Frameworks"
          content={
            <ul className="list-disc pl-5 space-y-1 mb-3 text-sm">
              <li></li>
            </ul>
          }
        />
      </div>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">Projects</h2>
        
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
      </div>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">Courses & Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LearningItem
            title="Stanford CS336"
            description="Deep Learning Course focusing on modern deep learning techniques and applications."
            category="course"
            href="/course/cs336"
          />
          <LearningItem
            title="Stanford CS224N"
            description="Natural Language Processing with Deep Learning course covering NLP techniques."
            category="course"
            href="/course/cs224n"
          />
          <LearningItem
            title="AI Engineering"
            description="Natural Language Processing with Deep Learning course covering NLP techniques."
            category="book"
            href="/book/aiengineering"
          />
          <LearningItem
            title="Designing Machine Learning Systems"
            description="Natural Language Processing with Deep Learning course covering NLP techniques."
            category="book"
            href="/book/designmachinelearningsystems"
          />
          <LearningItem
            title="Hands-On Large Language Models"
            description="Natural Language Processing with Deep Learning course covering NLP techniques."
            category="book"
            href="/book/handsonlargelanguagemodels"
          />
          <LearningItem
            title="Generative AI with LangChain"
            description="Natural Language Processing with Deep Learning course covering NLP techniques."
            category="book"
            href="/book/generativeaiwithlangchain"
          />
        </div>
      </div>
      
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6 tracking-tighter">Interview Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InterviewResource
            category="Leetcode Coding"
            description="Practice coding questions for technical interviews"
            href="/interview-resource/leetcode-coding"
          />
          <InterviewResource
            category="ML Coding"
            description="Machine learning coding questions for interviews"
            href="/interview-resource/ml-coding"
          />
          <InterviewResource
            category="AI System Design"
            description="System design questions for AI/ML roles"
            href="/interview-resource/ai-system-design"
          />
          <InterviewResource
            category="ML System Design"
            description="System design questions for machine learning roles"
            href="/interview-resource/ml-system-design"
          />
          <InterviewResource
            category="SDE System Design"
            description="System design questions for software engineering roles"
            href="/interview-resource/sde-system-design"
          />
        </div>
      </div>
    </section>
  )
}
