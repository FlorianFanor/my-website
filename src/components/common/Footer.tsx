import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "./LanguageProvider";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl">{"</>"}</div>
            <p className="text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm">{t("footer.navigation")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  {t("skills.title")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm">{t("footer.follow")}</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/florianfanor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/florian-fanor-704a18132"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:florianfanor@gmail.com"
                className="p-2.5 rounded-lg border bg-card hover:bg-accent hover:border-primary/50 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} {t("footer.copyright")}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            {t("footer.and")}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.legal")}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity z-50 group"
        aria-label={t("footer.backToTop")}
        style={{
          opacity: typeof window !== "undefined" && window.scrollY > 300 ? 1 : 0,
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
          (e.currentTarget.style.opacity = "1")
        }
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </footer>
  );
};
