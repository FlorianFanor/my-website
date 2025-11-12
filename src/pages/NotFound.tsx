import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useLanguage } from "../components/common/LanguageProvider";
import { Home, FolderGit2, Mail } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Large 404  */}
          <div className="relative mb-8 h-[18rem] sm:h-[28rem] md:h-[40rem] lg:h-[44rem] w-full flex items-center justify-center">
            <h1 className="relative animate-pulse z-10 text-[18rem] sm:text-[28rem] md:text-[40rem] lg:text-[44rem] bg-gradient-to-br from-primary via-primary/70 to-primary/40 bg-clip-text text-transparent select-none leading-none">
              404
            </h1>
          </div>

          {/* Message */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="mb-4">{t("notFound.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("notFound.description")}</p>

              {/* Navigation Suggestions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <Link
                  to="/"
                  className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  aria-label={t("nav.home")}
                >
                  <Home
                    className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <p className="text-sm">{t("nav.home")}</p>
                </Link>

                <Link
                  to="/projects"
                  className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  aria-label={t("nav.projects")}
                >
                  <FolderGit2
                    className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <p className="text-sm">{t("nav.projects")}</p>
                </Link>

                <Link
                  to="/contact"
                  className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  aria-label={t("nav.contact")}
                >
                  <Mail
                    className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <p className="text-sm">{t("nav.contact")}</p>
                </Link>
              </div>

              {/* Back to Home Button */}
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  {t("notFound.backToHome")}
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Fun Message */}
          <p className="text-sm text-muted-foreground">{t("notFound.funMessage")}</p>
        </div>
      </div>
    </section>
  );
};
