import { notFound } from 'next/navigation';

type LeetcodeQuestionProps = {
  title: string;
  content: string;
  solution: string;
  leetcodeUrl: string;
};

export default function LeetcodeQuestion({
  title,
  content,
  solution,
  leetcodeUrl
}: LeetcodeQuestionProps) {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {title}
      </h1>
      <div className="mb-6">
        <a 
          href={leetcodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on LeetCode
        </a>
      </div>
      <div className="prose dark:prose-invert max-w-none mb-8">
        <h2>Problem Description</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2>My Solution</h2>
        <div dangerouslySetInnerHTML={{ __html: solution }} />
      </div>
    </section>
  );
}