import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface GitHubProjectProps {
    project: {
        name: string;
        description: string;
        tech: string[];
        githubUrl: string;
        liveUrl: string | null;
        featured: boolean;
    };
}

const GitHubProjectItem = ({ project }: GitHubProjectProps) => {
    return (
        <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="glass bg-white/90 backdrop-blur-sm border border-white/20 p-8 h-full flex flex-col min-h-[28rem]">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {project.name}
                    </h3>
                    <div className="flex space-x-2">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-300 group/icon"
                            aria-label={`View ${project.name} on GitHub`}
                        >
                            <FaGithub size={20} className="text-slate-700 group-hover/icon:text-slate-900" />
                        </a>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors duration-300 group/icon"
                                aria-label={`View ${project.name} live demo`}
                            >
                                <FaExternalLinkAlt size={18} className="text-blue-700 group-hover/icon:text-blue-900" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span
                                key={`${tech}-${index}`}
                                className="text-xs bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium hover:from-blue-100 hover:to-purple-100 transition-colors duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex space-x-3">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center space-x-2 gradient-secondary text-slate-800 px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 border border-slate-300"
                        >
                            <FaGithub size={16} />
                            <span>Code</span>
                        </a>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center space-x-2 gradient-primary text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                <FaExternalLinkAlt size={14} />
                                <span>Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubProjectItem;
