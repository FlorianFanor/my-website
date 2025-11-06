import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Briefcase,
  GraduationCap,
  Award,
  Download,
  MapPin,
  Mail,
  Code2,
  Palette,
  Sailboat,
  CircleDot,
  Heart,
  BookOpen,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../common/LanguageProvider";

const getExperiences = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("exp.1.title"),
    company: "Publicis Sapient",
    location: "Paris, France",
    period: t("exp.1.period"),
    description: t("exp.1.description"),
    achievements: [
      t("exp.1.achievement.1"),
      t("exp.1.achievement.2"),
      t("exp.1.achievement.3"),
      t("exp.1.achievement.4"),
      t("exp.1.achievement.5"),
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Apollo GraphQL",
      "Redis",
      "CoreMedia CMS",
    ],
  },
  {
    id: 2,
    title: t("exp.2.title"),
    company: "Publicis Sapient",
    location: "Paris, France",
    period: t("exp.2.period"),
    description: t("exp.2.description"),
    achievements: [
      t("exp.2.achievement.1"),
      t("exp.2.achievement.2"),
      t("exp.2.achievement.3"),
      t("exp.2.achievement.4"),
      t("exp.2.achievement.5"),
    ],
    technologies: ["JavaScript", "TypeScript", "React.js", "Next.js", "Apollo GraphQL", "Redis"],
  },
  {
    id: 3,
    title: t("exp.3.title"),
    company: "Group VII Origin",
    location: "Paris, France",
    period: t("exp.3.period"),
    description: t("exp.3.description"),
    achievements: [
      t("exp.3.achievement.1"),
      t("exp.3.achievement.2"),
      t("exp.3.achievement.3"),
      t("exp.3.achievement.4"),
      t("exp.3.achievement.5"),
    ],
    technologies: ["JavaScript", "React.js", "React Native", "Python"],
  },
  {
    id: 4,
    title: t("exp.4.title"),
    company: "ELCA Informatique SA",
    location: "Ebene, Mauritius",
    period: t("exp.4.period"),
    description: t("exp.4.description"),
    achievements: [
      t("exp.4.achievement.1"),
      t("exp.4.achievement.2"),
      t("exp.4.achievement.3"),
      t("exp.4.achievement.4"),
    ],
    technologies: ["ASP.NET MVC", "JavaScript", "AngularJS"],
  },
  {
    id: 5,
    title: t("exp.5.title"),
    company: "Proximity BBDO Indian Ocean",
    location: "Mauritius",
    period: t("exp.5.period"),
    description: t("exp.5.description"),
    achievements: [
      t("exp.5.achievement.1"),
      t("exp.5.achievement.2"),
      t("exp.5.achievement.3"),
      t("exp.5.achievement.4"),
    ],
    technologies: ["ASP.NET MVC", "JavaScript", "HTML", "CSS"],
  },
];

const getEducation = (t: (key: string) => string) => [
  {
    id: 1,
    degree: t("edu.1.degree"),
    school: t("edu.1.school"),
    location: t("edu.1.location"),
    period: t("edu.1.period"),
    description: t("edu.1.description"),
  },
];

const getCertifications = (t: (key: string) => string) => [
  { name: t("cert.1"), year: "2024" },
  { name: t("cert.2"), year: "2024" },
  { name: t("cert.3"), year: "2023" },
  { name: t("cert.4"), year: "2022" },
];

const skillsWithLevels = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL / MongoDB",
  "Docker / Kubernetes",
  "AWS / Cloud",
  "UI/UX Design",
  "React Native",
  "Vue.js",
  "GraphQL",
  "Redis",
];

const getLanguages = (t: (key: string) => string) => [
  { name: t("lang.english"), level: t("lang.level.native") },
  { name: t("lang.french"), level: t("lang.level.native") },
];

const getInterests = (t: (key: string) => string) => [
  { name: t("interest.sailing.name"), icon: Sailboat, description: t("interest.sailing.desc") },
  { name: t("interest.frisbee.name"), icon: CircleDot, description: t("interest.frisbee.desc") },
  { name: t("interest.redcross.name"), icon: Heart, description: t("interest.redcross.desc") },
  { name: t("interest.a11y.name"), icon: Palette, description: t("interest.a11y.desc") },
  { name: t("interest.learning.name"), icon: BookOpen, description: t("interest.learning.desc") },
];

export const AboutMe = () => {
  const { t, language } = useLanguage();

  // Initialize translated data
  const experiences = getExperiences(t);
  const education = getEducation(t);
  const certifications = getCertifications(t);
  const languages = getLanguages(t);
  const interests = getInterests(t);

  const handleDownloadCV = () => {
    toast.success(t("aboutme.cv.downloaded"), {
      description: t("aboutme.cv.description"),
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="w-32 h-32 border-4 border-primary/20">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Florian Fanor"
                />
                <AvatarFallback>FF</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="mb-2">Florian Fanor</h1>
                <p className="text-xl text-primary mb-4">
                  Lead Experience Engineer & Accessibility Expert
                </p>
                <p className="text-muted-foreground mb-6">{t("aboutme.profile.bio")}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Paris & Marseille, France</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <a
                      href="mailto:florianfanor@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      florianfanor@gmail.com
                    </a>
                  </div>
                </div>

                <Button asChild onClick={handleDownloadCV}>
                  <a
                    href={
                      language === "fr"
                        ? "/cv/florian-fanor-cv-fr.pdf"
                        : "/cv/florian-fanor-cv-en.pdf"
                    }
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t("aboutme.cv.button")}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="experience">
              <Briefcase className="w-4 h-4 mr-2" />
              {t("aboutme.tab.experience")}
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="w-4 h-4 mr-2" />
              {t("aboutme.tab.education")}
            </TabsTrigger>
            <TabsTrigger value="skills">
              <Code2 className="w-4 h-4 mr-2" />
              {t("aboutme.tab.skills")}
            </TabsTrigger>
            <TabsTrigger value="interests">
              <Palette className="w-4 h-4 mr-2" />
              {t("aboutme.tab.interests")}
            </TabsTrigger>
          </TabsList>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <h2 className="mb-6">{t("aboutme.experience.title")}</h2>
            <div className="relative space-y-6">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              {experiences.map(exp => (
                <Card key={exp.id} className="relative md:ml-12">
                  {/* Timeline dot */}
                  <div className="absolute -left-16 top-6 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </div>

                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <CardTitle>{exp.title}</CardTitle>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    <CardDescription className="flex flex-col gap-1">
                      <span className="text-primary">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>

                    <div>
                      <h4 className="mb-2">{t("aboutme.achievements")}:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            <h2 className="mb-6">{t("aboutme.education.title")}</h2>
            <div className="grid gap-6 mb-8">
              {education.map(edu => (
                <Card key={edu.id}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <CardTitle>{edu.degree}</CardTitle>
                      <Badge variant="secondary">{edu.period}</Badge>
                    </div>
                    <CardDescription className="flex flex-col gap-1">
                      <span className="text-primary">{edu.school}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="mb-6">{t("aboutme.certifications.title")}</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p>{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <h2 className="mb-6">{t("aboutme.skills.title")}</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skillsWithLevels.map(skill => (
                    <div
                      key={skill}
                      className="flex items-center justify-center p-4 border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm text-center">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <h2 className="mb-6 mt-8">Langues</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {languages.map(lang => (
                    <div key={lang.name} className="text-center p-4 border rounded-lg">
                      <p className="mb-1">{lang.name}</p>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interests Tab */}
          <TabsContent value="interests" className="space-y-6">
            <h2 className="mb-6">{t("aboutme.interests.title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {interests.map(interest => {
                const Icon = interest.icon;
                return (
                  <Card
                    key={interest.name}
                    className="hover:border-primary transition-colors cursor-pointer"
                  >
                    <CardHeader>
                      <Icon className="w-8 h-8 mb-2 text-primary" />
                      <CardTitle className="text-lg">{interest.name}</CardTitle>
                      <CardDescription>{interest.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>{t("aboutme.why.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        1
                      </span>
                      {t("aboutme.why.1.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground pl-10">{t("aboutme.why.1.text")}</p>
                  </div>
                  <div>
                    <h4 className="mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        2
                      </span>
                      {t("aboutme.why.2.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground pl-10">{t("aboutme.why.2.text")}</p>
                  </div>
                  <div>
                    <h4 className="mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        3
                      </span>
                      {t("aboutme.why.3.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground pl-10">{t("aboutme.why.3.text")}</p>
                  </div>
                  <div>
                    <h4 className="mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        4
                      </span>
                      {t("aboutme.why.4.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground pl-10">{t("aboutme.why.4.text")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
