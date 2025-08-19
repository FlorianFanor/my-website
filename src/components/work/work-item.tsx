import { WorkItemProps } from "../../types/work";

const WorkItem = ({ data, index, isExpanded, onToggle }: WorkItemProps) => {
  const { year, title, company, duration, stack, details } = data;
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full">
      {/* Timeline dot - hidden on mobile, visible on desktop - positioned in middle of card */}
      <div className="absolute hidden md:block left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 top-1/2 -translate-y-1/2"></div>

      {/* Desktop layout: side by side */}
      <div
        className={`hidden md:flex items-start w-full ${isEven ? "md:justify-start" : "md:justify-end"}`}
      >
        {/* Main experience card */}
        <div className={`md:w-5/12 ${isEven ? "" : "md:order-2"}`}>
          <button
            onClick={onToggle}
            className="w-full text-left glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm border border-white/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="gradient-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                {year}
              </span>
              <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
                {duration}
              </span>
              <div className="ml-auto">
                <svg
                  className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-2 leading-tight">{title}</h3>

            <p className="text-lg font-semibold text-blue-600 mb-4">{company}</p>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.split(", ").map((tech, techIndex) => (
                  <span
                    key={`${tech}-${techIndex}`}
                    className="text-xs bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium hover:from-blue-100 hover:to-purple-100 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 text-sm text-slate-500 flex items-center">
              <span>Click to {isExpanded ? "hide" : "view"} details</span>
            </div>
          </button>
        </div>

        {/* Desktop detailed information card - appears on opposite side */}
        {isExpanded && (
          <div
            className={`md:w-5/12 ${isEven ? "md:order-2 md:ml-auto" : "md:order-1 md:mr-auto"}`}
          >
            <div className="glass rounded-2xl p-8 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 animate-fade-in-up">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-6 gradient-accent rounded-full mr-3"></span>
                    Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{details.overview}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-5 gradient-primary rounded-full mr-3"></span>
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-2">
                    {details.accomplishments.map((accomplishment, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mr-3"></span>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {details.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile layout: stacked vertically */}
      <div className="md:hidden space-y-4">
        {/* Main experience card */}
        <button
          onClick={onToggle}
          className="w-full text-left glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="gradient-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
              {year}
            </span>
            <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
              {duration}
            </span>
            <div className="ml-auto">
              <svg
                className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-2 leading-tight">{title}</h3>

          <p className="text-lg font-semibold text-blue-600 mb-4">{company}</p>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {stack.split(", ").map((tech, techIndex) => (
                <span
                  key={`${tech}-${techIndex}`}
                  className="text-xs bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-3 py-1 rounded-full font-medium hover:from-blue-100 hover:to-purple-100 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-500 flex items-center">
            <span>Click to {isExpanded ? "hide" : "view"} details</span>
          </div>
        </button>

        {/* Mobile detailed information card - appears below */}
        {isExpanded && (
          <div className="w-full">
            <div className="glass rounded-2xl p-8 bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-200/50 animate-fade-in-up">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-6 gradient-accent rounded-full mr-3"></span>
                    Overview
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{details.overview}</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-5 gradient-primary rounded-full mr-3"></span>
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-2">
                    {details.accomplishments.map((accomplishment, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                    <span className="w-2 h-5 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mr-3"></span>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {details.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default WorkItem;
