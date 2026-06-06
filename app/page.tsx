import { BlogPosts } from 'app/components/posts'

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
        <BlogPosts />
      </div>
    </section>
  )
}
