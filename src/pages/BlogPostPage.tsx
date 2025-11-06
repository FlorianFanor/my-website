import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogPosts } from "../components/blog/BlogList";
import { BlogPost } from "../components/blog/BlogPost";

export const BlogPostPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Blog - Florian Fanor`;
    }
  }, [post]);

  if (!post) return null;
  return <BlogPost post={post} onBack={() => navigate("/blog")} />;
};
