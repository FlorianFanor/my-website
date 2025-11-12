import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { MapPin, Send, MessageCircle, LinkedinIcon, GithubIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "../common/LanguageProvider";

export const Contact = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success(t("contact.form.success"), {
      description: t("contact.form.success.description"),
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">{t("contact.title")}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 relative">
              {/* Overlay - Coming soon */}
              <div className="absolute inset-0 z-10 bg-background/70 backdrop-blur-sm flex items-center justify-center pointer-events-auto">
                <span className="px-4 py-2 rounded-full border bg-card text-card-foreground shadow-sm">
                  {language === "fr" ? "Bientôt disponible" : "Coming soon"}
                </span>
              </div>
              <CardHeader aria-hidden="true">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <CardTitle>{t("contact.form.title")}</CardTitle>
                </div>
                <CardDescription>{t("contact.form.description")}</CardDescription>
              </CardHeader>
              <CardContent aria-hidden="true" className="pointer-events-none">
                <form
                  aria-disabled="true"
                  tabIndex={-1}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      {t("contact.form.name")}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder={t("contact.form.name.placeholder")}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                      aria-required="true"
                      className="h-12"
                      disabled
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      {t("contact.form.email")}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.form.email.placeholder")}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                      aria-required="true"
                      className="h-12"
                      disabled
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      {t("contact.form.message")}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.message.placeholder")}
                      rows={6}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      required
                      aria-required="true"
                      className="resize-none"
                      disabled
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group" disabled>
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        {t("contact.form.send")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* LinkedIn Card - Primary Contact */}
            <Card className="group hover:border-primary/50 transition-all hover:shadow-lg border-primary/30">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>{t("contact.linkedin.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/florian-fanor-704a18132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {t("contact.linkedin.link")}
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  {t("contact.linkedin.description")}
                </p>
              </CardContent>
            </Card>

            {/* GitHub Card */}
            <Card className="group hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>{t("contact.github.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://github.com/FlorianFanor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @FlorianFanor
                </a>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="group hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-3 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle>{t("contact.location")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("contact.location.city")}</p>
              </CardContent>
            </Card>

            {/* Availability Card removed */}
          </div>
        </div>
      </div>
    </section>
  );
};
