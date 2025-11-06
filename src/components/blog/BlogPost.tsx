import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BlogPost as BlogPostType } from "./BlogList";
import { useLanguage } from "../common/LanguageProvider";

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export const BlogPost = ({ post, onBack }: BlogPostProps) => {
  const { t, language } = useLanguage();

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Button onClick={onBack} variant="ghost" className="mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t("blog.backToBlog")}
      </Button>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge>{post.category}</Badge>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </div>
        <h1 className="mb-4">{post.title}</h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {post.content.split("\n").map((paragraph, index) => {
          if (paragraph.startsWith("# ")) {
            return <h1 key={index}>{paragraph.replace("# ", "")}</h1>;
          } else if (paragraph.startsWith("## ")) {
            return <h2 key={index}>{paragraph.replace("## ", "")}</h2>;
          } else if (paragraph.startsWith("### ")) {
            return <h3 key={index}>{paragraph.replace("### ", "")}</h3>;
          } else if (paragraph.startsWith("- ")) {
            return <li key={index}>{paragraph.replace("- ", "")}</li>;
          } else if (paragraph.startsWith("```")) {
            return null; // Skip code block markers for simplicity
          } else if (paragraph.match(/^\d+\./)) {
            return <li key={index}>{paragraph.replace(/^\d+\.\s*/, "")}</li>;
          } else if (paragraph.includes("**")) {
            const parts = paragraph.split("**");
            return (
              <p key={index}>
                {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
              </p>
            );
          } else if (paragraph.trim()) {
            return <p key={index}>{paragraph}</p>;
          }
          return <br key={index} />;
        })}
      </div>
    </article>
  );
};
