import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Charlotte Wang
      </h1>
      <p className="mb-4">
        {`Nice. Update this page with your own content. You can also add more pages by creating new files in the "app" directory. For example, you could create an "about.tsx" file for an About Me page.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
