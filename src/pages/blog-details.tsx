import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./blog-data";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto p-8">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 block">
        ← Back to blog
      </Link>
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div className="prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogDetail;
