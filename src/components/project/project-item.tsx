interface ProjectItemProps {
  image: string;
  title: string;
  link: string;
}

const ProjectItem = ({ image, title, link }: ProjectItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
      <a href={link} target="_blank" className="block relative h-80 lg:h-96">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Strong gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
          {/* Always visible title with high contrast background */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/20">
            <h3
              className="text-3xl font-bold text-white leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              {title}
            </h3>
            <p className="text-white/90 text-sm mt-2 font-medium flex items-center">
              <span>View Project</span>
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </p>
          </div>
        </div>

        {/* Subtle border glow effect */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 group-hover:ring-blue-400/50 transition-all duration-500"></div>
      </a>
    </div>
  );
};
export default ProjectItem;
