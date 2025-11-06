import { Code2, Database, Palette, Sparkles, Box } from "lucide-react";
import { useLanguage } from "../common/LanguageProvider";
import { useState } from "react";

interface TechItem {
  name: string;
  icon: string; // Simple Icons slug or 'generic'
  color?: string; // Brand color
}

interface SkillCategory {
  icon: React.ElementType;
  titleKey: string;
  gradient: string;
  items: TechItem[];
}

const skills: SkillCategory[] = [
  {
    icon: Code2,
    titleKey: "skills.frontend",
    gradient: "from-blue-500 to-cyan-500",
    items: [
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css", color: "#1572B6" },
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "React Native", icon: "react", color: "#61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Next.js", icon: "nextdotjs", color: "#000000" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
    ],
  },
  {
    icon: Database,
    titleKey: "skills.backend",
    gradient: "from-green-500 to-emerald-500",
    items: [
      { name: "Node.js", icon: "nodedotjs", color: "#339933" },
      { name: "Python", icon: "python", color: "#3776AB" },
      { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "GraphQL", icon: "graphql", color: "#E10098" },
    ],
  },
  {
    icon: Palette,
    titleKey: "skills.tools",
    gradient: "from-purple-500 to-pink-500",
    items: [
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "Coremedia CMS", icon: "generic" },
      { name: "Splunk", icon: "splunk", color: "#000000" },
      { name: "Nx", icon: "nx", color: "#D24939" },
      { name: "Redis", icon: "redis", color: "#DC382D" },
      { name: "Docker", icon: "docker", color: "#2496ED" },
      { name: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
      { name: "Azure DevOps", icon: "squareenix", color: "#0078D7" },
      { name: "GitHub", icon: "github", color: "#181717" },
    ],
  },
];

// Component to render tech logo from Simple Icons or generic icon
const TechLogo = ({ icon, name, color }: { icon: string; name: string; color?: string }) => {
  const [hasError, setHasError] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);

  // Use generic icon for technologies without official icons
  if (icon === "generic" || hasError) {
    return <Box className="w-5 h-5 text-primary" />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}${color && !usedFallback ? `/${color.replace("#", "")}` : ""}`}
      alt={`${name} logo`}
      className="w-5 h-5 group-hover/tech:scale-110 transition-transform"
      style={{
        filter: "var(--logo-filter, none)",
      }}
      onError={e => {
        const target = e.target as HTMLImageElement;
        // Only try fallback once to prevent infinite loop
        if (!usedFallback && color) {
          setUsedFallback(true);
          target.src = `https://cdn.simpleicons.org/${icon}`;
        } else {
          setHasError(true);
        }
      }}
    />
  );
};

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">{t("skills.badge")}</span>
          </div>
          <h2 className="mb-4">{t("skills.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("skills.description")}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {skills.map((category, index) => {
            const CategoryIcon = category.icon;
            const techCount = category.items.length;
            const techLabel =
              techCount > 1 ? t("skills.technologies_plural") : t("skills.technologies");

            return (
              <div
                key={category.titleKey}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl border-2 bg-card p-6 transition-all duration-300 hover:shadow-2xl hover:border-primary/100 hover:-translate-y-1">
                  {/* Header with icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`relative p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg`}
                    >
                      <CategoryIcon className="w-7 h-7 text-white" aria-hidden="true" />

                      {/* Icon glow effect */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} blur-md opacity-50 -z-10`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{t(category.titleKey)}</h3>
                      <p className="text-xs text-muted-foreground">
                        {techCount} {techLabel}
                      </p>
                    </div>
                  </div>

                  {/* Technologies list */}
                  <div className="space-y-3">
                    {category.items.map(item => {
                      return (
                        <div
                          key={item.name}
                          className="group/tech flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:translate-x-1"
                          style={{
                            // @ts-expect-error needs to be typed
                            "--logo-filter":
                              "brightness(0) saturate(100%) invert(var(--logo-invert, 0))",
                          }}
                        >
                          <TechLogo icon={item.icon} name={item.name} color={item.color} />
                          <span className="text-sm">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card corner decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Dark mode logo filter */
        .dark [style*="--logo-filter"] img {
          filter: brightness(0) saturate(100%) invert(1);
        }
      `}</style>
    </section>
  );
};
