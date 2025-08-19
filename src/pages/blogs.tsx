// src/pages/Blog.jsx
import { Link } from "react-router-dom";
import { blogPosts } from "./blog-data";

const Blog = () => {
    return (
        <main className="px-4 sm:px-8 lg:px-16 py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 min-h-screen">
            <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-black text-gradient mb-6">My Articles</h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    Stories, tutorials, and things I'm learning on my journey as a developer.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {blogPosts.map((post, index) => (
                    <div
                        key={post.id}
                        className="glass bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl p-8 flex flex-col transition-all duration-500 hover:scale-105 border border-white/20 animate-fade-in-up group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                            {post.title}
                        </h2>
                        <p className="text-sm text-slate-500 mb-4 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit">
                            {post.date}
                        </p>
                        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                            {post.excerpt}
                        </p>
                        <div className="mt-auto">
                            {post.mediumUrl ? (
                                <a
                                    href={post.mediumUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    <span>Read on Medium</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ) : (
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-flex items-center space-x-2 gradient-accent text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    <span>Read More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Blog;
