import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import {
  ExternalLink,
  Github,
  Info,
  ArrowRight,
  Trophy,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Separator } from "../ui/separator";
import { useLanguage } from "../common/LanguageProvider";
import pampersImage from "../../assets/pampers.webp";
import soneparImage from "../../assets/sonepar.webp";

interface ProjectsProps {
  limit?: number;
  featuredIds?: number[];
  onViewMore?: () => void;
}

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey: string;
  contextKey: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  challengeKeys: string[];
  solutionKeys: string[];
  resultKeys: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    titleKey: "project.inaccessible.title",
    descriptionKey: "project.inaccessible.description",
    fullDescriptionKey: "project.inaccessible.full",
    contextKey: "project.inaccessible.context",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["TypeScript", "React", "Accessibility", "WCAG"],
    github: "https://github.com/FlorianFanor/the-inaccessible-app",
    demo: "https://florianfanor.github.io/the-inaccessible-app/",
    challengeKeys: [
      "project.inaccessible.challenge1",
      "project.inaccessible.challenge2",
      "project.inaccessible.challenge3",
      "project.inaccessible.challenge4",
    ],
    solutionKeys: [
      "project.inaccessible.solution1",
      "project.inaccessible.solution2",
      "project.inaccessible.solution3",
      "project.inaccessible.solution4",
    ],
    resultKeys: [
      "project.inaccessible.result1",
      "project.inaccessible.result2",
      "project.inaccessible.result3",
      "project.inaccessible.result4",
    ],
  },
  {
    id: 2,
    titleKey: "project.translation.title",
    descriptionKey: "project.translation.description",
    fullDescriptionKey: "project.translation.full",
    contextKey: "project.translation.context",
    image:
      "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["TypeScript", "Full-Stack", "Multilingual", "Collaboration"],
    github: "https://github.com/FlorianFanor/translation-app",
    demo: "#",
    challengeKeys: [
      "project.translation.challenge1",
      "project.translation.challenge2",
      "project.translation.challenge3",
      "project.translation.challenge4",
    ],
    solutionKeys: [
      "project.translation.solution1",
      "project.translation.solution2",
      "project.translation.solution3",
      "project.translation.solution4",
    ],
    resultKeys: [
      "project.translation.result1",
      "project.translation.result2",
      "project.translation.result3",
      "project.translation.result4",
    ],
  },
  {
    id: 3,
    titleKey: "project.fileanalyzer.title",
    descriptionKey: "project.fileanalyzer.description",
    fullDescriptionKey: "project.fileanalyzer.full",
    contextKey: "project.fileanalyzer.context",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["JavaScript", "AI/ML", "Time Series", "Data Analysis"],
    github: "https://github.com/FlorianFanor/file-analyzer-AI",
    demo: "#",
    challengeKeys: [
      "project.fileanalyzer.challenge1",
      "project.fileanalyzer.challenge2",
      "project.fileanalyzer.challenge3",
      "project.fileanalyzer.challenge4",
    ],
    solutionKeys: [
      "project.fileanalyzer.solution1",
      "project.fileanalyzer.solution2",
      "project.fileanalyzer.solution3",
      "project.fileanalyzer.solution4",
    ],
    resultKeys: [
      "project.fileanalyzer.result1",
      "project.fileanalyzer.result2",
      "project.fileanalyzer.result3",
      "project.fileanalyzer.result4",
    ],
  },
  {
    id: 4,
    titleKey: "project.sonepar.title",
    descriptionKey: "project.sonepar.description",
    fullDescriptionKey: "project.sonepar.full",
    contextKey: "project.sonepar.context",
    image: soneparImage,
    tags: ["React", "Next.js", "Apollo GraphQL", "NodeJS"],
    github: "#",
    demo: "https://www.sonepar.fr/fr-fr",
    challengeKeys: [
      "project.sonepar.challenge1",
      "project.sonepar.challenge2",
      "project.sonepar.challenge3",
      "project.sonepar.challenge4",
    ],
    solutionKeys: [
      "project.sonepar.solution1",
      "project.sonepar.solution2",
      "project.sonepar.solution3",
      "project.sonepar.solution4",
    ],
    resultKeys: [
      "project.sonepar.result1",
      "project.sonepar.result2",
      "project.sonepar.result3",
      "project.sonepar.result4",
    ],
  },
  {
    id: 5,
    titleKey: "project.unireso.title",
    descriptionKey: "project.unireso.description",
    fullDescriptionKey: "project.unireso.full",
    contextKey: "project.unireso.context",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Angular", ".NET", "SQL"],
    github: "#",
    demo: "https://www.unireso.com/",
    challengeKeys: [
      "project.unireso.challenge1",
      "project.unireso.challenge2",
      "project.unireso.challenge3",
      "project.unireso.challenge4",
    ],
    solutionKeys: [
      "project.unireso.solution1",
      "project.unireso.solution2",
      "project.unireso.solution3",
      "project.unireso.solution4",
    ],
    resultKeys: [
      "project.unireso.result1",
      "project.unireso.result2",
      "project.unireso.result3",
      "project.unireso.result4",
    ],
  },
  {
    id: 6,
    titleKey: "project.bulma.title",
    descriptionKey: "project.bulma.description",
    fullDescriptionKey: "project.bulma.full",
    contextKey: "project.bulma.context",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "React Native", "Python", "PostgreSQL"],
    github: "#",
    demo: "#",
    challengeKeys: [
      "project.bulma.challenge1",
      "project.bulma.challenge2",
      "project.bulma.challenge3",
      "project.bulma.challenge4",
    ],
    solutionKeys: [
      "project.bulma.solution1",
      "project.bulma.solution2",
      "project.bulma.solution3",
      "project.bulma.solution4",
    ],
    resultKeys: [
      "project.bulma.result1",
      "project.bulma.result2",
      "project.bulma.result3",
      "project.bulma.result4",
    ],
  },
  {
    id: 7,
    titleKey: "project.pampers.title",
    descriptionKey: "project.pampers.description",
    fullDescriptionKey: "project.pampers.full",
    contextKey: "project.pampers.context",
    image: pampersImage,
    tags: [".NET", "JavaScript", "CMS", "HTML5", "CSS3"],
    github: "#",
    demo: "https://www.pampers.com/en-us",
    challengeKeys: [
      "project.pampers.challenge1",
      "project.pampers.challenge2",
      "project.pampers.challenge3",
      "project.pampers.challenge4",
    ],
    solutionKeys: [
      "project.pampers.solution1",
      "project.pampers.solution2",
      "project.pampers.solution3",
      "project.pampers.solution4",
    ],
    resultKeys: [
      "project.pampers.result1",
      "project.pampers.result2",
      "project.pampers.result3",
      "project.pampers.result4",
    ],
  },
  {
    id: 8,
    titleKey: "project.devprep.title",
    descriptionKey: "project.devprep.description",
    fullDescriptionKey: "project.devprep.full",
    contextKey: "project.devprep.context",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/FlorianFanor/dev-prep-public",
    demo: "https://dev-prep-silk.vercel.app/",
    challengeKeys: [
      "project.devprep.challenge1",
      "project.devprep.challenge2",
      "project.devprep.challenge3",
      "project.devprep.challenge4",
    ],
    solutionKeys: [
      "project.devprep.solution1",
      "project.devprep.solution2",
      "project.devprep.solution3",
      "project.devprep.solution4",
    ],
    resultKeys: [
      "project.devprep.result1",
      "project.devprep.result2",
      "project.devprep.result3",
      "project.devprep.result4",
    ],
  },
];

export const Projects = ({ limit, featuredIds, onViewMore }: ProjectsProps = {}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  // Split projects into personal (1-3, 8) and client (4-7)
  const personalProjects = [
    ...projectsData.slice(0, 3),
    projectsData.find(p => p.id === 8)!,
  ].filter(Boolean);
  const clientProjects = projectsData.slice(3, 7);

  const displayedPersonal = limit
    ? personalProjects.slice(0, Math.min(limit, 3))
    : personalProjects;
  const displayedClient = limit
    ? clientProjects.slice(0, Math.max(0, limit - displayedPersonal.length))
    : clientProjects;
  const hasMore = limit && projectsData.length > limit;

  const renderProjectCard = (project: Project, index: number) => (
    <Card
      key={project.id}
      className="group overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 border-muted hover:border-primary/100"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <ImageWithFallback
          src={project.image}
          alt={t(project.titleKey)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <CardHeader className="flex-1">
        <CardTitle className="group-hover:text-primary transition-colors">
          {t(project.titleKey)}
        </CardTitle>
        <CardDescription className="line-clamp-2">{t(project.descriptionKey)}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setSelectedProject(project)}
            className="flex-1 group/btn"
          >
            <Info className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            {t("projects.details")}
          </Button>
          {project.demo !== "#" && (
            <Button variant="default" size="lg" asChild className="flex-1">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t("projects.view")}
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  // If specific featured IDs are provided, render only those in order
  if (featuredIds && featuredIds.length > 0) {
    const featured = featuredIds
      .map(id => projectsData.find(p => p.id === id))
      .filter(Boolean) as Project[];

    return (
      <>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20" id="projects">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t("projects.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("projects.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, index) => renderProjectCard(project, index))}
          </div>

          {onViewMore && (
            <div className="flex justify-center mt-12">
              <Button onClick={onViewMore} size="lg" variant="outline" className="group">
                {t("projects.viewAll")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </section>

        <Dialog
          open={!!selectedProject}
          onOpenChange={(open: boolean) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl">{t(selectedProject.titleKey)}</DialogTitle>
                  <DialogDescription className="text-base">
                    {t(selectedProject.fullDescriptionKey)}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-8 mt-6">
                  <div className="relative aspect-video overflow-hidden rounded-xl border">
                    <ImageWithFallback
                      src={selectedProject.image}
                      alt={t(selectedProject.titleKey)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      <h3>{t("projects.context")}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      {t(selectedProject.contextKey)}
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      <h3>{t("projects.challenges")}</h3>
                    </div>
                    <ul className="space-y-3 pl-7">
                      {selectedProject.challengeKeys.map((key, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <h3>{t("projects.solutions")}</h3>
                    </div>
                    <ul className="space-y-3 pl-7">
                      {selectedProject.solutionKeys.map((key, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      <h3>{t("projects.results")}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-7">
                      {selectedProject.resultKeys.map((key, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <div className="text-2xl">📈</div>
                          <span className="text-sm">{t(key)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    {(selectedProject.id < 4 || selectedProject.id === 8) &&
                      selectedProject.github &&
                      selectedProject.github !== "#" && (
                        <Button asChild className="flex-1" size="lg">
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            {t("projects.code")}
                          </a>
                        </Button>
                      )}
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <Button asChild variant="outline" className="flex-1">
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t("projects.view")} ${t(selectedProject.titleKey)}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                          {t("projects.demo")}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20" id="projects">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t("projects.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("projects.description")}</p>
        </div>

        {/* Client Projects Section */}
        {displayedClient.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h3 className="text-2xl font-semibold">{t("projects.client")}</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedClient.map((project, index) =>
                renderProjectCard(project, index + displayedPersonal.length)
              )}
            </div>
          </div>
        )}

        {/* Personal Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h3 className="text-2xl font-semibold">{t("projects.personal")}</h3>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPersonal.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {hasMore && onViewMore && (
          <div className="flex justify-center mt-12">
            <Button onClick={onViewMore} size="lg" variant="outline" className="group">
              {t("projects.viewAll")}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </section>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(open: boolean) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{t(selectedProject.titleKey)}</DialogTitle>
                <DialogDescription className="text-base">
                  {t(selectedProject.fullDescriptionKey)}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-xl border">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={t(selectedProject.titleKey)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Separator />

                {/* Context */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    <h3>{t("projects.context")}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-7">
                    {t(selectedProject.contextKey)}
                  </p>
                </div>

                <Separator />

                {/* Challenges */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <h3>{t("projects.challenges")}</h3>
                  </div>
                  <ul className="space-y-3 pl-7">
                    {selectedProject.challengeKeys.map((key, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Solutions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h3>{t("projects.solutions")}</h3>
                  </div>
                  <ul className="space-y-3 pl-7">
                    {selectedProject.solutionKeys.map((key, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Results */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <h3>{t("projects.results")}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-7">
                    {selectedProject.resultKeys.map((key, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                      >
                        <div className="text-2xl">📈</div>
                        <span className="text-sm">{t(key)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {(selectedProject.id < 4 || selectedProject.id === 8) &&
                    selectedProject.github &&
                    selectedProject.github !== "#" && (
                      <Button asChild className="flex-1" size="lg">
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          {t("projects.code")}
                        </a>
                      </Button>
                    )}
                  {selectedProject.demo && selectedProject.demo !== "#" && (
                    <Button asChild variant="outline" className="flex-1">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("projects.demo")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
