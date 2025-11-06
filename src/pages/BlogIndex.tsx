import { useEffect } from "react";
import { BlogList } from "../components/blog/BlogList";

export const BlogIndex = () => {
  useEffect(() => {
    document.title = "Blog - Florian Fanor";
  }, []);

  return <BlogList />;
};
