import { Routes, Route } from "react-router-dom";
import Blog from "./pages/blogs";
import Home from "./pages/home";
import Sidenav from "./components/sidenav";
import ScrollToTop from "./components/scroll-to-top";
import BlogDetail from "./pages/blog-details";
import CallStackVisualizer from "./pages/call-stack-visualizer";

function App() {
  return (
    <>
      <Sidenav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogDetail />} />
        <Route path="/call-stack" element={<CallStackVisualizer />} />
      </Routes>
    </>

  );
}

export default App;
