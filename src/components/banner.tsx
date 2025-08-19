import { useState } from "react";
import { FaLinkedin, FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import banner from "../assets/beach-banner.webp";

const Banner = () => {
  const [enableAccessibility, setEnableAccessibility] = useState(true);

  return (
    <div id="main" className="banner relative overflow-hidden">
      <img src={banner} alt="" className="w-full h-screen object-cover" />
      <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-br from-white/80 via-blue-50/70 to-purple-100/60">
        <div className="flex flex-col justify-center items-center h-full px-4 animate-fade-in-up">
          <div className="text-center space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gradient leading-tight">
              I'm Florian Fanor
            </h1>
            <div className="space-y-4">
              <p
                className={`${enableAccessibility ? "sr-only" : "text-xl md:text-3xl text-slate-700 font-medium leading-relaxed"}`}
              >
                I'm a web developer, coder, and an accessibility expert
              </p>
              <div className="flex flex-col items-center space-y-4" aria-hidden="true">
                {enableAccessibility && (
                  <p className="text-xl md:text-3xl text-slate-700 font-medium" aria-hidden="true">
                    I'm{" "}
                    <span className="text-gradient font-bold">
                      <TypeAnimation
                        sequence={[
                          "a web developer",
                          1000,
                          "a coder",
                          1000,
                          "an accessibility expert",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: "1em", display: "inline-block" }}
                        repeat={Infinity}
                      />
                    </span>
                  </p>
                )}

                <button
                  onClick={() => setEnableAccessibility(enableAccess => !enableAccess)}
                  title="Press to pause animation"
                  className="glass rounded-full p-3 hover:scale-110 transition-all duration-300 hover:shadow-lg text-slate-700 hover:text-blue-600"
                >
                  {enableAccessibility ? (
                    <FaPauseCircle size="24" />
                  ) : (
                    <FaPlayCircle size="24" title="Press to play animation" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://www.linkedin.com/in/florian-fanor-704a18132"
                target="_blank"
                aria-label="LinkedIn - new page"
                className="inline-flex items-center justify-center glass rounded-full p-4 hover:scale-110 transition-all duration-300 hover:shadow-xl animate-pulse-glow text-slate-700 hover:text-blue-600"
              >
                <FaLinkedin size="32" />
              </a>
            </div>

            <div className="pt-12">
              <a
                href="#work"
                className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors duration-300 animate-float"
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  Scroll to explore
                </span>
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
