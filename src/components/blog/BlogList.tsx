import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Clock } from "lucide-react";
import { useLanguage } from "../common/LanguageProvider";
import { Link } from "react-router-dom";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  externalUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 4,
    title: "Digital Accessibility in France: A Wake‑Up Call for 2025",
    excerpt:
      "France is raising the bar on digital accessibility. Here’s why 2025 is a turning point and how teams can get ready.",
    content: `# Digital Accessibility in France: A Wake‑Up Call for 2025

France is stepping up enforcement of digital accessibility. For public services this has long been mandatory under the RGAA. Now the pressure expands to the private sector through EU directives (European Accessibility Act) and growing legal and user expectations.

## What changes in 2025
- Stronger focus on measurable conformance (WCAG 2.1/2.2)
- Increased exposure and reputational risk for non‑compliance
- Procurement requirements: accessibility by default

## What teams should do now
1. Embed accessibility in design and product processes
2. Adopt semantic HTML and keyboard‑first thinking
3. Ensure color contrast, focus states, and clear error handling
4. Automate checks in CI and run expert audits regularly

Accessibility is not a one‑off task—it’s a continuous quality practice that benefits everyone.

Read the full article on Medium for concrete steps, examples, and a practical roadmap.`,
    date: "2024-12-15",
    readTime: "7 min",
    category: "Accessibility",
    tags: ["a11y", "France", "RGAA", "WCAG"],
    externalUrl:
      "https://medium.com/@florianfanor/digital-accessibility-in-france-a-wake-up-call-for-2025-0dade1ce8112",
  },
  {
    id: 5,
    title: "The Observer APIs in React: Intersection, Mutation, Resize",
    excerpt:
      "How and when to use the browser’s Observer APIs in React: Patterns, pitfalls, and production tips.",
    content: `# The Observer APIs in React: Intersection, Mutation, Resize

IntersectionObserver, MutationObserver, and ResizeObserver unlock powerful UI patterns without heavy event listeners. In this article, we explore:

- When each Observer fits best
- Clean React patterns that avoid memory leaks
- Performance considerations and batching
- Testing strategies and SSR gotchas

Includes code samples and a checklist to help you ship reliable observers in production.`,
    date: "2025-01-10",
    readTime: "9 min",
    category: "React",
    tags: ["React", "IntersectionObserver", "MutationObserver", "ResizeObserver"],
    externalUrl:
      "https://medium.com/@florianfanor/the-observer-apis-in-react-intersection-mutation-resize-e3a6a823c234",
  },
];

export const BlogList = () => {
  const { t, language } = useLanguage();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="mb-4">{t("blog.title")}</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl">{t("blog.description")}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogPosts.map(post => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{post.category}</Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    {new Date(post.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              {post.externalUrl ? (
                <Button asChild variant="link" className="mt-auto self-start p-0">
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={`${t("blog.readArticle")} (Medium)`}
                  >
                    {t("blog.readArticle")}
                  </a>
                </Button>
              ) : (
                <Button asChild variant="link" className="mt-auto self-start p-0">
                  <Link to={`/blog/${post.id}`}>{t("blog.readArticle")}</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
