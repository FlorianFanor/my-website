import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "../common/LanguageProvider";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300/30 dark:bg-yellow-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {t("hero.name")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button onClick={() => onNavigate("projects")} size="lg" className="group">
              {t("hero.cta.projects")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => onNavigate("contact")}
              variant="outline"
              size="lg"
              className="group"
            >
              {t("hero.cta.contact")}
              <Mail className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a
                href={(() =>
                  language === "fr"
                    ? "/cv/florian-fanor-cv-fr.pdf"
                    : "/cv/florian-fanor-cv-en.pdf")()}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                {t("hero.cta.cv")}
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/FlorianFanor"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border bg-card hover:bg-accent hover:border-primary/50 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/florian-fanor-704a18132"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border bg-card hover:bg-accent hover:border-primary/50 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:florianfanor@gmail.com"
              className="group p-3 rounded-full border bg-card hover:bg-accent hover:border-primary/50 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};
