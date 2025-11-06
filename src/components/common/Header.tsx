import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
            aria-label={t("footer.backToTop")}
          >
            <span className="text-2xl">{"<Dev />"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <ul className="hidden md:flex gap-6 items-center">
              {navItems.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }: { isActive: boolean }) =>
                      `transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              aria-label={t(
                language === "fr" ? "about.header.language.fr" : "about.header.language.en"
              )}
              className="hidden md:flex relative group"
            >
              <Languages className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border pointer-events-none">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={t(
                theme === "light" ? "about.header.theme.light" : "about.header.theme.dark"
              )}
              className="hidden md:flex"
            >
              {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t(mobileMenuOpen ? "about.header.menu.close" : "about.header.menu.open")}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }: { isActive: boolean }) =>
                      `block w-full text-left px-4 py-2 transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Controls */}
            <div className="px-4 pt-4 mt-2 border-t space-y-2">
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                aria-label={t(
                  language === "fr" ? "about.header.language.fr" : "about.header.language.en"
                )}
                className="w-full justify-start"
              >
                <Languages className="w-4 h-4 mr-2" />
                {language === "fr" ? "English" : "Français"}
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                aria-label={t(
                  theme === "light" ? "about.header.theme.light" : "about.header.theme.dark"
                )}
                className="w-full justify-start"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-4 h-4 mr-2" />
                    {t("about.header.theme.light")}
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 mr-2" />
                    {t("about.header.theme.dark")}
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
