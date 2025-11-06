import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("../pages/About").then(m => ({ default: m.About })));
const ProjectsPage = lazy(() =>
  import("../pages/ProjectsPage").then(m => ({ default: m.ProjectsPage }))
);
const BlogIndex = lazy(() => import("../pages/BlogIndex").then(m => ({ default: m.BlogIndex })));
const BlogPostPage = lazy(() =>
  import("../pages/BlogPostPage").then(m => ({ default: m.BlogPostPage }))
);
const ContactPage = lazy(() =>
  import("../pages/ContactPage").then(m => ({ default: m.ContactPage }))
);
const NotFound = lazy(() => import("../pages/NotFound").then(m => ({ default: m.NotFound })));

// Centralized route tree used by App
export const AppRoutes = () => {
  return (
    <Suspense
      fallback={<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">Loading...</div>}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
