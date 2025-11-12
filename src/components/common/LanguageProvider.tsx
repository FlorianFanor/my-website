import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Header
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.about": "À propos",
    "nav.blog": "Articles",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Disponible pour de nouveaux projets",
    "hero.greeting": "Bonjour, je suis",
    "hero.name": "Florian Fanor",
    "hero.description":
      "Développeur Full-Stack passionné par la création d'applications web modernes, performantes et accessibles.",
    "hero.cta.projects": "Découvrir mes projets",
    "hero.cta.contact": "Me contacter",
    "hero.cta.cv": "Télécharger CV",

    // Skills
    "skills.badge": "Stack Technique",
    "skills.title": "Compétences & Technologies",
    "skills.description":
      "Une expertise complète pour développer des solutions modernes, performantes et scalables de bout en bout.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Mobile",
    "skills.devops": "DevOps & Cloud",
    "skills.cms": "CMS & Design",
    "skills.tools": "Outils & Infrastructure",
    "skills.technologies": "technologie",
    "skills.technologies_plural": "technologies",
    "skills.stat.experience": "Années d'expérience",
    "skills.stat.technologies": "Technologies",
    "skills.stat.projects": "Projets réalisés",
    "skills.stat.accessibility": "Accessibilité",

    // Projects
    "projects.title": "Projets Réalisés",
    "projects.description":
      "Découvrez une sélection de mes réalisations récentes, alliant expertise technique et design soigné.",
    "projects.personal": "Projets Personnels",
    "projects.client": "Projets Clients",
    "projects.details": "Détails",
    "projects.view": "Voir",
    "projects.viewAll": "Voir tous les projets",
    "projects.code": "Voir le code",
    "projects.demo": "Voir",
    "projects.context": "Contexte du Projet",
    "projects.challenges": "Défis Techniques",
    "projects.solutions": "Solutions Apportées",
    "projects.results": "Résultats Obtenus",

    // Projects data - Real Projects
    "project.inaccessible.title": "The Inaccessible App",
    "project.inaccessible.description":
      "Une application interactive qui simule le daltonisme et d'autres déficiences visuelles pour sensibiliser au design inclusif.",
    "project.inaccessible.full":
      "Expérience interactive permettant de tester des pièges au clavier, des formulaires inaccessibles et des déficiences visuelles. Conçue pour sensibiliser en mettant les utilisateurs dans la peau de personnes handicapées.",
    "project.inaccessible.context":
      "Projet personnel visant à éduquer les développeurs sur l'importance de l'accessibilité web en leur faisant vivre des expériences d'utilisateurs en situation de handicap.",

    "project.inaccessible.challenge1": "Créer des simulations réalistes de déficiences visuelles",
    "project.inaccessible.challenge2": "Rendre l'expérience éducative sans être frustrant",
    "project.inaccessible.challenge3": "Illustrer les problèmes d'accessibilité courants",
    "project.inaccessible.challenge4": "Maintenir l'engagement tout en éduquant",

    "project.inaccessible.solution1":
      "Filtres CSS et overlays pour simuler différents types de daltonisme",
    "project.inaccessible.solution2": "Interface gamifiée avec défis progressifs",
    "project.inaccessible.solution3":
      "Exemples concrets de mauvaises pratiques et leurs corrections",
    "project.inaccessible.solution4": "Documentation WCAG intégrée et conseils pratiques",

    "project.inaccessible.result1": "Outil éducatif utilisé dans des formations accessibility",
    "project.inaccessible.result2": "Sensibilisation accrue à l'importance de l'accessibilité",
    "project.inaccessible.result3": "Open-source avec contributions de la communauté",
    "project.inaccessible.result4": "Retours positifs des développeurs et formateurs",

    "project.translation.title": "Translation App",
    "project.translation.description":
      "Plateforme full-stack permettant aux organisations de gérer et éditer collaborativement du contenu multilingue.",
    "project.translation.full":
      "Système complet de gestion de traductions permettant aux équipes de collaborer sur du contenu multilingue pour des produits numériques. Inclut un éditeur en temps réel et un système de versioning.",
    "project.translation.context":
      "Besoin identifié dans des projets professionnels de gérer efficacement les traductions pour des applications internationales.",

    "project.translation.challenge1": "Gérer la synchronisation en temps réel entre collaborateurs",
    "project.translation.challenge2": "Supporter plusieurs formats de fichiers de traduction",
    "project.translation.challenge3": "Maintenir l'historique et le versioning des traductions",
    "project.translation.challenge4": "Assurer la cohérence des traductions entre projets",

    "project.translation.solution1": "Architecture full-stack TypeScript avec WebSocket",
    "project.translation.solution2": "Parseurs pour JSON, YAML, et autres formats standards",
    "project.translation.solution3": "Système de versioning Git-like intégré",
    "project.translation.solution4": "Glossaire partagé et suggestions automatiques",

    "project.translation.result1": "Réduction du temps de gestion des traductions de 60%",
    "project.translation.result2": "Amélioration de la cohérence terminologique",
    "project.translation.result3": "Collaboration facilitée entre équipes distribuées",
    "project.translation.result4": "Déploiement plus rapide des versions localisées",

    "project.fileanalyzer.title": "File Analyzer AI",
    "project.fileanalyzer.description":
      "Système IA pour analyser automatiquement des données de séries temporelles et détecter des anomalies.",
    "project.fileanalyzer.full":
      "Outil basé sur l'IA permettant de télécharger et analyser des données de séries temporelles pour détecter automatiquement des anomalies et comprendre les patterns. Utilise du machine learning pour l'analyse prédictive.",
    "project.fileanalyzer.context":
      "Projet explorant l'intégration de l'IA dans l'analyse de données pour automatiser la détection de problèmes dans des datasets complexes.",

    "project.fileanalyzer.challenge1": "Traiter de larges volumes de données efficacement",
    "project.fileanalyzer.challenge2": "Détecter des anomalies avec précision",
    "project.fileanalyzer.challenge3": "Visualiser les patterns de manière compréhensible",
    "project.fileanalyzer.challenge4": "Rendre l'IA accessible aux non-experts",

    "project.fileanalyzer.solution1": "Algorithmes ML optimisés pour la détection d'anomalies",
    "project.fileanalyzer.solution2": "Interface intuitive pour configurer les analyses",
    "project.fileanalyzer.solution3": "Graphiques interactifs avec D3.js",
    "project.fileanalyzer.solution4": "Explications claires des résultats de l'IA",

    "project.fileanalyzer.result1": "Détection automatique d'anomalies avec 90% de précision",
    "project.fileanalyzer.result2": "Gain de temps de 75% sur l'analyse manuelle",
    "project.fileanalyzer.result3": "Interface accessible aux utilisateurs non techniques",
    "project.fileanalyzer.result4": "Apprentissage continu du modèle avec les données",

    // Client Projects
    "project.sonepar.title": "Sonepar",
    "project.sonepar.description":
      "Plateforme e-commerce B2B moderne et évolutive pour un leader mondial de la distribution électrique.",
    "project.sonepar.full":
      "Application e-commerce moderne et évolutive développée pour Sonepar, leader mondial de la distribution électrique B2B. La plateforme est conçue pour supporter des milliers d'utilisateurs à travers plusieurs régions, offrant une expérience fluide de découverte de produits, de commande et de gestion de compte.",
    "project.sonepar.context":
      "Sonepar avait besoin d'une solution e-commerce moderne pour gérer son catalogue massif de produits électriques et servir des clients professionnels à travers le monde.",

    "project.sonepar.challenge1": "Gérer un catalogue de dizaines de milliers de produits",
    "project.sonepar.challenge2": "Supporter des milliers d'utilisateurs simultanés",
    "project.sonepar.challenge3": "Intégrer avec des systèmes legacy complexes",
    "project.sonepar.challenge4": "Assurer des performances élevées à l'échelle mondiale",

    "project.sonepar.solution1": "Architecture Next.js avec Server-Side Rendering",
    "project.sonepar.solution2": "Apollo GraphQL pour la gestion efficace des données",
    "project.sonepar.solution3": "Redis pour le caching haute performance",
    "project.sonepar.solution4": "CoreMedia CMS pour la gestion de contenu multilingue",

    "project.sonepar.result1": "Support de milliers d'utilisateurs simultanés",
    "project.sonepar.result2": "Temps de chargement optimisés pour une expérience fluide",
    "project.sonepar.result3": "Déploiement réussi dans plusieurs régions",
    "project.sonepar.result4": "Amélioration significative de l'expérience utilisateur B2B",

    "project.pampers.title": "Pampers.com",
    "project.pampers.description":
      "Site web grand public pour Pampers, offrant des ressources pour parents et informations produits.",
    "project.pampers.full":
      "Développement et maintenance du site web Pampers.com, offrant aux parents des ressources éducatives, des informations produits et une expérience utilisateur optimisée. Travail sur l'optimisation des performances et l'accessibilité du site.",
    "project.pampers.context":
      "Pampers cherchait à moderniser sa présence web pour mieux servir les parents à travers le monde avec des contenus éducatifs et des informations produits.",

    "project.pampers.challenge1": "Créer une expérience utilisateur engageante pour les parents",
    "project.pampers.challenge2": "Gérer du contenu multilingue pour plusieurs marchés",
    "project.pampers.challenge3": "Optimiser les performances pour un trafic mondial élevé",
    "project.pampers.challenge4": "Assurer l'accessibilité pour tous les utilisateurs",

    "project.pampers.solution1": "Interface React moderne et responsive",
    "project.pampers.solution2": "Système CMS pour la gestion multilingue",
    "project.pampers.solution3": "Optimisation des images et mise en cache intelligente",
    "project.pampers.solution4": "Conformité aux normes WCAG pour l'accessibilité",

    "project.pampers.result1": "Expérience utilisateur améliorée pour les parents",
    "project.pampers.result2": "Support de multiples marchés internationaux",
    "project.pampers.result3": "Performances optimisées pour un trafic global",
    "project.pampers.result4": "Site accessible conformément aux standards",

    "project.bulma.title": "Bulma Solution",
    "project.bulma.description":
      "Suite d’applications RH : app mobile React Native et app web React pour accompagner les étapes du recrutement ; backend Python (API).",
    "project.bulma.full":
      "Conception et développement d’une application mobile React Native et d’un portail web React pour outiller les RH sur l’ensemble du processus de recrutement (candidatures, entretiens, suivi, notifications). Backend Python (API REST) pour la logique métier et la persistance.",
    "project.bulma.context":
      "Digitaliser et structurer le processus de recrutement avec des outils mobile et web unifiés.",

    "project.bulma.challenge1":
      "Unifier mobile (React Native) et web (React) avec une UX cohérente",
    "project.bulma.challenge2":
      "Assurer la synchronisation temps réel et le mode hors‑ligne des données RH",
    "project.bulma.challenge3":
      "Sécuriser des données sensibles (candidats, entretiens, documents)",
    "project.bulma.challenge4": "Intégrer des systèmes existants (ATS, SSO, messagerie)",

    "project.bulma.solution1":
      "Architecture multi‑plateforme : React Native (mobile) et React (web)",
    "project.bulma.solution2": "API Python (FastAPI/Django) avec WebSocket/queues pour la synchro",
    "project.bulma.solution3": "Auth JWT/SSO, contrôle d’accès par rôles, chiffrement au repos",
    "project.bulma.solution4": "PostgreSQL + migrations ; pipelines CI/CD et monitoring",

    "project.bulma.result1": "Processus de recrutement rationalisé et traçable",
    "project.bulma.result2": "Réduction du temps de traitement des candidatures",
    "project.bulma.result3": "Meilleure expérience pour candidats et équipes RH",
    "project.bulma.result4": "Plateforme évolutive et maintenable",

    "project.unireso.title": "Unireso",
    "project.unireso.description":
      "Application de gestion et de calcul pour optimiser les opérations ferroviaires et routières entre la Suisse et la France",
    "project.unireso.full":
      "Développement d'une application web pour Unireso, le réseau de transports publics. Permet aux utilisateurs de planifier leurs trajets, consulter les horaires et acheter des billets en ligne.",
    "project.unireso.context":
      "Unireso cherchait à moderniser son service digital pour offrir une meilleure expérience aux usagers des transports publics.",

    "project.unireso.challenge1": "Intégrer des données de transport en temps réel",
    "project.unireso.challenge2": "Créer une interface intuitive pour tous les usagers",
    "project.unireso.challenge3": "Gérer la vente de billets en ligne",
    "project.unireso.challenge4": "Assurer la disponibilité 24/7",

    "project.unireso.solution1": "Application React TypeScript performante",
    "project.unireso.solution2": "Intégration API pour les données en temps réel",
    "project.unireso.solution3": "Système de paiement sécurisé",
    "project.unireso.solution4": "Architecture robuste et scalable",

    "project.unireso.result1": "Service digital moderne pour les usagers",
    "project.unireso.result2": "Augmentation de l'utilisation des transports publics",
    "project.unireso.result3": "Satisfaction client améliorée",
    "project.unireso.result4": "Réduction des files d'attente aux guichets",

    // Sample Projects (removed)
    "project.ecommerce.title": "Plateforme E-commerce",
    "project.ecommerce.description":
      "Une solution e-commerce complète avec panier, paiement sécurisé et gestion des stocks.",
    "project.ecommerce.full":
      "Développement d'une plateforme e-commerce moderne et performante pour une boutique de mode en ligne. La solution permet la gestion complète du catalogue produits, des commandes et des paiements.",
    "project.ecommerce.context":
      "Une entreprise de vêtements souhaitait moderniser sa présence en ligne avec une expérience d'achat fluide et sécurisée, tout en gérant efficacement son inventaire.",

    "project.fitness.title": "Application Mobile Fitness",
    "project.fitness.description":
      "Application de suivi d'activité physique avec programmes personnalisés et statistiques.",
    "project.fitness.full":
      "Application mobile cross-platform permettant aux utilisateurs de suivre leurs activités physiques, d'accéder à des programmes d'entraînement personnalisés et de visualiser leurs progrès.",
    "project.fitness.context":
      "Une startup dans le domaine du fitness voulait créer une application accessible pour aider les utilisateurs à atteindre leurs objectifs de santé avec des programmes adaptés.",

    "project.dashboard.title": "Dashboard Analytics",
    "project.dashboard.description":
      "Tableau de bord analytique en temps réel pour la visualisation de données complexes.",
    "project.dashboard.full":
      "Tableau de bord d'analyse de données interactif permettant la visualisation en temps réel de métriques business complexes avec graphiques personnalisables et exports de rapports.",
    "project.dashboard.context":
      "Une entreprise SaaS B2B avait besoin d'un outil pour permettre à ses clients de visualiser et analyser leurs données d'utilisation de manière intuitive et en temps réel.",

    // Project challenges, solutions, results (using generic keys)
    "project.ecommerce.challenge1": "Gérer un catalogue de plus de 5000 produits avec variantes",
    "project.ecommerce.challenge2": "Assurer la sécurité des paiements et données clients",
    "project.ecommerce.challenge3": "Optimiser les performances pour un chargement rapide",
    "project.ecommerce.challenge4": "Synchroniser les stocks en temps réel",

    "project.ecommerce.solution1":
      "Architecture React avec Server-Side Rendering pour des performances optimales",
    "project.ecommerce.solution2":
      "Intégration de Stripe pour des paiements sécurisés conformes PCI-DSS",
    "project.ecommerce.solution3": "Mise en cache intelligente et optimisation des images",
    "project.ecommerce.solution4": "API WebSocket pour la synchronisation temps réel des stocks",

    "project.ecommerce.result1": "Temps de chargement réduit de 60%",
    "project.ecommerce.result2": "Taux de conversion augmenté de 35%",
    "project.ecommerce.result3": "Plus de 10 000 transactions traitées en 3 mois",
    "project.ecommerce.result4": "Note de satisfaction client de 4.8/5",

    "project.fitness.challenge1": "Créer une expérience fluide sur iOS et Android",
    "project.fitness.challenge2": "Gérer le suivi GPS pour les activités en extérieur",
    "project.fitness.challenge3": "Synchroniser les données entre appareils",
    "project.fitness.challenge4": "Personnaliser les programmes selon les objectifs utilisateurs",

    "project.fitness.solution1": "Développement React Native pour une base de code unique",
    "project.fitness.solution2": "Intégration des APIs natives pour le GPS et capteurs",
    "project.fitness.solution3": "Firebase pour la synchronisation temps réel et authentification",
    "project.fitness.solution4":
      "Algorithme de recommandation basé sur les objectifs et performances",

    "project.fitness.result1": "50 000+ téléchargements en 6 mois",
    "project.fitness.result2": "Note moyenne de 4.7/5 sur les stores",
    "project.fitness.result3": "70% des utilisateurs actifs quotidiennement",
    "project.fitness.result4":
      "Réduction de 40% des coûts de développement grâce au cross-platform",

    "project.dashboard.challenge1":
      "Afficher des millions de points de données sans ralentissement",
    "project.dashboard.challenge2": "Créer des visualisations interactives et personnalisables",
    "project.dashboard.challenge3": "Traiter et agréger les données en temps réel",
    "project.dashboard.challenge4": "Permettre l'export de rapports dans différents formats",

    "project.dashboard.solution1": "Vue.js pour une interface réactive et modulaire",
    "project.dashboard.solution2":
      "D3.js pour des visualisations de données avancées et performantes",
    "project.dashboard.solution3": "Backend Python/FastAPI avec traitement asynchrone",
    "project.dashboard.solution4": "Architecture microservices pour l'évolutivité",

    "project.dashboard.result1": "Support de 10M+ points de données sans latence",
    "project.dashboard.result2": "Temps de génération de rapports réduit de 80%",
    "project.dashboard.result3": "Adoption par 95% des clients en 2 mois",
    "project.dashboard.result4": "Réduction des tickets support liés aux rapports de 65%",

    // Contact
    "contact.title": "Contactez-moi",
    "contact.description":
      "Un projet en tête ? Une question ? N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.",
    "contact.form.title": "Envoyez-moi un message",
    "contact.form.description":
      "Remplissez le formulaire ci-dessous et je vous répondrai dans les 24-48 heures.",
    "contact.form.name": "Nom complet",
    "contact.form.name.placeholder": "Jean Dupont",
    "contact.form.email": "Adresse email",
    "contact.form.email.placeholder": "jean.dupont@example.com",
    "contact.form.message": "Votre message",
    "contact.form.message.placeholder": "Parlez-moi de votre projet...",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.send": "Envoyer le message",
    "contact.form.success": "Message envoyé avec succès ! 🎉",
    "contact.form.success.description": "Je vous répondrai dans les plus brefs délais.",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.availability": "Disponibilité",
    "contact.availability.hours": "Lun - Ven : 9h - 18h",
    "contact.availability.status": "Disponible",
    "contact.linkedin.title": "LinkedIn (Préféré)",
    "contact.linkedin.link": "Se connecter sur LinkedIn →",
    "contact.linkedin.description":
      "Meilleur moyen de me contacter pour des opportunités et collaborations",
    "contact.github.title": "GitHub",
    "contact.location.city": "Paris & Marseille, France",

    // About Me
    "about.title": "À propos de moi",
    "about.description":
      "Découvrez mon parcours, mon expérience et ce qui nourrit ma passion pour le développement.",
    "about.tab.overview": "Aperçu",
    "about.tab.experience": "Expérience",
    "about.tab.education": "Formation & Certifications",
    "about.tab.interests": "Centres d'intérêt",
    "about.profile.title": "Florian Fanor",
    "about.profile.role": "Lead Experience Engineer",
    "about.profile.location": "Paris, France",
    "about.profile.bio":
      "Je suis un Développeur Full-Stack avec plus de 7 ans d'expérience dans la construction d'applications web modernes, évolutives et accessibles. Spécialisé en React, TypeScript, Next.js et création d'expériences utilisateur exceptionnelles.",
    "about.profile.download.cv": "Télécharger le CV",
    "about.overview.whoami": "Qui suis-je",
    "about.overview.passion": "Ma passion",
    "about.overview.approach": "Mon approche",
    "about.overview.goals": "Mes objectifs",
    "about.stats.experience": "Années d'expérience",
    "about.stats.projects": "Projets réalisés",
    "about.stats.clients": "Clients satisfaits",
    "about.stats.technologies": "Technologies",
    "about.experience.title": "Expérience professionnelle",
    "about.experience.present": "Aujourd'hui",
    "about.experience.achievements": "Réalisations clés",
    "about.experience.technologies": "Technologies utilisées",
    "about.education.title": "Formation",
    "about.education.degree": "Diplôme",
    "about.education.certifications": "Certifications",
    "about.education.languages": "Langues",
    "about.interests.title": "Centres d'intérêt & Loisirs",
    "about.header.theme.light": "Activer le mode sombre",
    "about.header.theme.dark": "Activer le mode clair",
    "about.header.menu.open": "Ouvrir le menu",
    "about.header.menu.close": "Fermer le menu",
    "about.header.language.fr": "Switch to English",
    "about.header.language.en": "Passer en Français",

    // Blog
    "blog.title": "Articles",
    "blog.description":
      "Mes réflexions sur le développement web, les bonnes pratiques et les nouvelles technologies.",
    "blog.readArticle": "Lire l'article →",
    "blog.backToBlog": "Retour aux articles",
    "blog.readTime": "min",

    // About Me - UI Labels
    "aboutme.cv.downloaded": "CV téléchargé !",
    "aboutme.cv.description": "Le fichier PDF a été téléchargé avec succès.",
    "aboutme.cv.button": "Télécharger le CV (PDF)",
    "aboutme.available": "Disponible immédiatement",
    "aboutme.tab.experience": "Expérience",
    "aboutme.tab.education": "Formation",
    "aboutme.tab.skills": "Compétences",
    "aboutme.tab.interests": "Centres d'intérêt",
    "aboutme.experience.title": "Expérience Professionnelle",
    "aboutme.achievements": "Réalisations clés",
    "aboutme.technologies": "Technologies utilisées",
    "aboutme.education.title": "Formation",
    "aboutme.certifications.title": "Certifications",
    "aboutme.skills.title": "Compétences techniques",
    "aboutme.languages.title": "Langues",
    "aboutme.interests.title": "Centres d'intérêt",
    "aboutme.profile.bio":
      "Technical Lead spécialisé en React, Next.js, Apollo GraphQL, JavaScript, HTML et CSS, avec un focus sur la construction d'applications web évolutives et performantes. Expérience approfondie dans l'architecture de solutions front-end, l'optimisation des performances de rendu et l'intégration d'API GraphQL. Certifié en audit d'accessibilité avec une passion profonde pour rendre le web inclusif pour tous.",
    // Why me
    "aboutme.why.title": "Pourquoi unir nos forces ?",
    "aboutme.why.1.title": "Expertise technique complète & IA",
    "aboutme.why.1.text":
      "Plus de 8 ans en full‑stack et architectures cloud. Intégration IA/ML pragmatique lorsqu’elle apporte de la valeur (expérience plus récente).",
    "aboutme.why.2.title": "Passion pour la qualité",
    "aboutme.why.2.text":
      "Code propre, testé et maintenable. Forte attention portée à l’accessibilité, la performance et l’expérience utilisateur.",
    "aboutme.why.3.title": "Approche collaborative",
    "aboutme.why.3.text":
      "Communication claire et travail en équipe. Mentorat et accompagnement de développeurs juniors.",
    "aboutme.why.4.title": "Orientation produit",
    "aboutme.why.4.text":
      "Focalisé sur la valeur ajoutée pour le client, la mesure d’impact et les bons arbitrages business (time‑to‑market vs dette technique).",

    // Experiences
    "exp.1.title": "Lead Experience Engineer",
    "exp.1.period": "Déc 2023 - Aujourd'hui",
    "exp.1.description":
      "Direction d'initiatives techniques et architecture de solutions front-end évolutives pour des clients entreprise. Mentorat d'équipes de développement et promotion des meilleures pratiques.",
    "exp.1.achievement.1": "Architecture et implémentation d'applications React/Next.js complexes",
    "exp.1.achievement.2": "Optimisation des performances applicatives et des stratégies de rendu",
    "exp.1.achievement.3":
      "Conduite de revues de code et établissement de standards de développement",
    "exp.1.achievement.4": "Accompagnement de développeurs et prise de decisions techniques",
    "exp.1.achievement.5":
      "Collaboration avec la Product Owner pour définir les besoins et les objectifs des projets",

    "exp.2.title": "Ingénieur Logiciel",
    "exp.2.period": "Mars 2022 - Déc 2023",
    "exp.2.description":
      "Développement et maintenance d'applications web haute performance utilisant des frameworks JavaScript modernes. Collaboration avec des équipes cross-fonctionnelles pour livrer des solutions entreprise.",
    "exp.2.achievement.1": "Construction d'applications React évolutives avec Next.js",
    "exp.2.achievement.2": "Implémentation d'API GraphQL avec Apollo Client",
    "exp.2.achievement.3": "Optimisation des performances et de l'expérience utilisateur",
    "exp.2.achievement.4": "Contribution aux décisions d'architecture et conception technique",
    "exp.2.achievement.5": "Referent en accessibilité",

    "exp.3.title": "Ingénieur Logiciel",
    "exp.3.period": "Oct 2019 - Janv 2022",
    "exp.3.description":
      "Développement d'applications mobiles et web cross-platform. Travail sur des projets React et React Native offrant des expériences mobile-first.",
    "exp.3.achievement.1": "Construction et maintenance d'applications mobiles React Native",
    "exp.3.achievement.2": "Développement d'applications web responsives avec React",
    "exp.3.achievement.3":
      "Collaboration avec les équipes design pour une implémentation UI/UX fluide",
    "exp.3.achievement.4": "Implémentation de stratégies de développement mobile-first",
    "exp.3.achievement.5": "Développement de services backend avec Python",

    "exp.4.title": "Ingénieur Logiciel",
    "exp.4.period": "Fév 2019 - Oct 2019",
    "exp.4.description":
      "Travail sur des applications web d'entreprise utilisant .NET et AngularJS. Contribution à des projets de développement full-stack.",
    "exp.4.achievement.1": "Développement d'applications ASP.NET MVC",
    "exp.4.achievement.2": "Construction d'interfaces front-end interactives avec AngularJS",
    "exp.4.achievement.3": "Collaboration dans un environnement de développement agile",
    "exp.4.achievement.4": "Maintenance et amélioration de systèmes legacy",

    "exp.5.title": "Ingénieur Logiciel",
    "exp.5.period": "Déc 2017 - Janv 2019",
    "exp.5.description":
      "Développement d'applications web et sites web utilisant ASP.NET MVC et JavaScript moderne. Début de carrière en construisant des compétences fondamentales en développement full-stack.",
    "exp.5.achievement.1": "Construction de sites web et applications web responsives",
    "exp.5.achievement.2": "Développement avec le framework ASP.NET MVC",
    "exp.5.achievement.3": "Implémentation d'interfaces front-end avec HTML, CSS et JavaScript",
    "exp.5.achievement.4": "Apprentissage des meilleures pratiques de développement web",

    // Education
    "edu.1.degree": "Bachelor of Technology en Génie Logiciel",
    "edu.1.school": "Curtin University",
    "edu.1.location": "Mauritius",
    "edu.1.period": "2014 - 2017",
    "edu.1.description":
      "Programme complet de génie logiciel axé sur les pratiques de développement modernes, la conception de systèmes et l'architecture logicielle.",

    // Certifications
    "cert.1": "Auditer l'accessibilité numérique avec le RGAA (Access42)",
    "cert.2": "Spécialiste en accessibilité WCAG 2.1",
    "cert.3": "Développement avancé React & Next.js",
    "cert.4": "Professionnel GraphQL & Apollo",

    // Languages
    "lang.english": "Anglais",
    "lang.french": "Français",
    "lang.level.native": "Natif / Bilingue",

    // Interests
    "interest.sailing.name": "Voile",
    "interest.sailing.desc": "Profiter du temps sur l'eau",
    "interest.frisbee.name": "Ultimate Frisbee",
    "interest.frisbee.desc": "Sports d'équipe et mode de vie actif",
    "interest.redcross.name": "Bénévole Croix-Rouge",
    "interest.redcross.desc": "Service communautaire et aide aux autres",
    "interest.a11y.name": "Plaidoyer pour l'accessibilité",
    "interest.a11y.desc": "Rendre le web accessible à tous",
    "interest.learning.name": "Apprentissage Tech",
    "interest.learning.desc": "Apprentissage et amélioration continus",

    // Footer
    "footer.tagline":
      "Développeur Full-Stack passionné par la création d'expériences web modernes et accessibles.",
    "footer.navigation": "Navigation",
    "footer.follow": "Me suivre",
    "footer.copyright": "Florian Fanor. Développé avec",
    "footer.and": "et React.",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Politique de confidentialité",
    "footer.backToTop": "Retour en haut de la page",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.blog": "Articles",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Available for new projects",
    "hero.greeting": "Hello, I'm",
    "hero.name": "Florian Fanor",
    "hero.description":
      "Full-Stack Developer passionate about creating modern, performant, and accessible web applications.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Contact me",
    "hero.cta.cv": "Download CV",

    // Skills
    "skills.badge": "Tech Stack",
    "skills.title": "Skills & Technologies",
    "skills.description":
      "Comprehensive expertise to develop modern, performant, and scalable solutions from end to end.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Mobile",
    "skills.devops": "DevOps & Cloud",
    "skills.cms": "CMS & Design",
    "skills.tools": "Tools & Infrastructure",
    "skills.technologies": "technology",
    "skills.technologies_plural": "technologies",
    "skills.stat.experience": "Years of experience",
    "skills.stat.technologies": "Technologies",
    "skills.stat.projects": "Projects completed",
    "skills.stat.accessibility": "Accessibility",

    // Projects
    "projects.title": "Featured Projects",
    "projects.description":
      "Discover a selection of my recent work, combining technical expertise and polished design.",
    "projects.personal": "Personal Projects",
    "projects.client": "Client Projects",
    "projects.details": "Details",
    "projects.view": "View",
    "projects.viewAll": "View all projects",
    "projects.code": "View code",
    "projects.demo": "View",
    "projects.context": "Project Context",
    "projects.challenges": "Technical Challenges",
    "projects.solutions": "Solutions Provided",
    "projects.results": "Results Achieved",

    // Projects data - Real Projects
    "project.inaccessible.title": "The Inaccessible App",
    "project.inaccessible.description":
      "An interactive accessibility challenge that simulates color blindness and other visual impairments to raise awareness about inclusive web design.",
    "project.inaccessible.full":
      "Interactive experience that lets users test keyboard traps, inaccessible forms, and visual impairments. Designed to raise awareness by putting people in the shoes of users with disabilities.",
    "project.inaccessible.context":
      "Personal project aimed at educating developers about the importance of web accessibility by letting them experience what users with disabilities face.",

    "project.inaccessible.challenge1": "Create realistic simulations of visual impairments",
    "project.inaccessible.challenge2": "Make the experience educational without being frustrating",
    "project.inaccessible.challenge3": "Illustrate common accessibility issues",
    "project.inaccessible.challenge4": "Keep users engaged while educating",

    "project.inaccessible.solution1":
      "CSS filters and overlays to simulate different types of color blindness",
    "project.inaccessible.solution2": "Gamified interface with progressive challenges",
    "project.inaccessible.solution3": "Real examples of bad practices and their fixes",
    "project.inaccessible.solution4": "Integrated WCAG documentation and practical tips",

    "project.inaccessible.result1": "Educational tool used in accessibility training",
    "project.inaccessible.result2": "Increased awareness of accessibility importance",
    "project.inaccessible.result3": "Open-source with community contributions",
    "project.inaccessible.result4": "Positive feedback from developers and trainers",

    "project.translation.title": "Translation App",
    "project.translation.description":
      "A full-stack platform enabling organizations to collaboratively manage and edit multilingual content for digital products.",
    "project.translation.full":
      "Complete translation management system allowing teams to collaborate on multilingual content for digital products. Includes real-time editor and versioning system.",
    "project.translation.context":
      "Need identified in professional projects to efficiently manage translations for international applications.",

    "project.translation.challenge1": "Manage real-time synchronization between collaborators",
    "project.translation.challenge2": "Support multiple translation file formats",
    "project.translation.challenge3": "Maintain translation history and versioning",
    "project.translation.challenge4": "Ensure translation consistency across projects",

    "project.translation.solution1": "Full-stack TypeScript architecture with WebSocket",
    "project.translation.solution2": "Parsers for JSON, YAML, and other standard formats",
    "project.translation.solution3": "Integrated Git-like versioning system",
    "project.translation.solution4": "Shared glossary and automatic suggestions",

    "project.translation.result1": "60% reduction in translation management time",
    "project.translation.result2": "Improved terminology consistency",
    "project.translation.result3": "Facilitated collaboration between distributed teams",
    "project.translation.result4": "Faster deployment of localized versions",

    "project.fileanalyzer.title": "File Analyzer AI",
    "project.fileanalyzer.description":
      "An AI-powered system for uploading, analyzing, and exploring time series data to automatically detect anomalies and understand patterns.",
    "project.fileanalyzer.full":
      "AI-powered tool for uploading and analyzing time series data to automatically detect anomalies and understand patterns. Uses machine learning for predictive analysis.",
    "project.fileanalyzer.context":
      "Project exploring AI integration in data analysis to automate problem detection in complex datasets.",

    "project.fileanalyzer.challenge1": "Process large data volumes efficiently",
    "project.fileanalyzer.challenge2": "Detect anomalies with accuracy",
    "project.fileanalyzer.challenge3": "Visualize patterns in an understandable way",
    "project.fileanalyzer.challenge4": "Make AI accessible to non-experts",

    "project.fileanalyzer.solution1": "Optimized ML algorithms for anomaly detection",
    "project.fileanalyzer.solution2": "Intuitive interface for configuring analyses",
    "project.fileanalyzer.solution3": "Interactive charts with D3.js",
    "project.fileanalyzer.solution4": "Clear explanations of AI results",

    "project.fileanalyzer.result1": "Automatic anomaly detection with 90% accuracy",
    "project.fileanalyzer.result2": "75% time savings on manual analysis",
    "project.fileanalyzer.result3": "Interface accessible to non-technical users",
    "project.fileanalyzer.result4": "Continuous model learning with data",

    // Client Projects
    "project.sonepar.title": "Sonepar",
    "project.sonepar.description":
      "Modern, scalable B2B e-commerce platform for a global leader in electrical distribution.",
    "project.sonepar.full":
      "A scalable, modern e-commerce application built for Sonepar, a global leader in B2B electrical distribution. The platform is designed to support thousands of users across multiple regions, offering a seamless product discovery, ordering, and account management experience.",
    "project.sonepar.context":
      "Sonepar needed a modern e-commerce solution to manage its massive catalog of electrical products and serve professional customers worldwide.",

    "project.sonepar.challenge1": "Manage a catalog of tens of thousands of products",
    "project.sonepar.challenge2": "Support thousands of concurrent users",
    "project.sonepar.challenge3": "Integrate with complex legacy systems",
    "project.sonepar.challenge4": "Ensure high performance at global scale",

    "project.sonepar.solution1": "Next.js architecture with Server-Side Rendering",
    "project.sonepar.solution2": "Apollo GraphQL for efficient data management",
    "project.sonepar.solution3": "Redis for high-performance caching",
    "project.sonepar.solution4": "CoreMedia CMS for multilingual content management",

    "project.sonepar.result1": "Support for thousands of concurrent users",
    "project.sonepar.result2": "Optimized loading times for seamless experience",
    "project.sonepar.result3": "Successful deployment across multiple regions",
    "project.sonepar.result4": "Significant improvement in B2B user experience",

    "project.pampers.title": "Pampers.com",
    "project.pampers.description":
      "Consumer website for Pampers, offering parenting resources and product information.",
    "project.pampers.full":
      "Development and maintenance of Pampers.com website, providing parents with educational resources, product information, and an optimized user experience. Worked on performance optimization and site accessibility.",
    "project.pampers.context":
      "Pampers wanted to modernize its web presence to better serve parents worldwide with educational content and product information.",

    "project.pampers.challenge1": "Create an engaging user experience for parents",
    "project.pampers.challenge2": "Manage multilingual content for multiple markets",
    "project.pampers.challenge3": "Optimize performance for high global traffic",
    "project.pampers.challenge4": "Ensure accessibility for all users",

    "project.pampers.solution1": "Modern responsive React interface",
    "project.pampers.solution2": "CMS system for multilingual management",
    "project.pampers.solution3": "Image optimization and smart caching",
    "project.pampers.solution4": "WCAG compliance for accessibility",

    "project.pampers.result1": "Improved user experience for parents",
    "project.pampers.result2": "Support for multiple international markets",
    "project.pampers.result3": "Optimized performance for global traffic",
    "project.pampers.result4": "Accessible site meeting standards",

    "project.bulma.title": "Bulma Solution",
    "project.bulma.description":
      "HR apps suite: React Native mobile app and React web app to support recruitment steps; Python backend (API).",
    "project.bulma.full":
      "Designed and built a React Native mobile app and a React web portal to support HR across the full recruitment workflow (applications, interviews, tracking, notifications). Python backend (REST API) for business logic and persistence.",
    "project.bulma.context":
      "Digitize and streamline the recruitment process with unified mobile and web tools.",

    "project.bulma.challenge1": "Align mobile (React Native) and web (React) with a consistent UX",
    "project.bulma.challenge2": "Provide real‑time sync and offline support for HR data",
    "project.bulma.challenge3": "Secure sensitive data (candidates, interviews, documents)",
    "project.bulma.challenge4": "Integrate existing systems (ATS, SSO, messaging)",

    "project.bulma.solution1": "Multi‑platform architecture: React Native (mobile) and React (web)",
    "project.bulma.solution2": "Python API (FastAPI/Django) with WebSocket/queues for sync",
    "project.bulma.solution3": "JWT/SSO auth, role‑based access, at‑rest encryption",
    "project.bulma.solution4": "PostgreSQL + migrations; CI/CD pipelines and monitoring",

    "project.bulma.result1": "Streamlined, auditable recruitment workflow",
    "project.bulma.result2": "Reduced time to process applications",
    "project.bulma.result3": "Improved candidate and HR team experience",
    "project.bulma.result4": "Scalable, maintainable platform",

    "project.unireso.title": "Unireso",
    "project.unireso.description":
      "Internal application to manage the public transport network, facilitating route planning and ticket purchasing.",
    "project.unireso.full":
      "Development of a web application for Unireso, the public transport network. Allows users to plan trips, check schedules, and purchase tickets online.",
    "project.unireso.context":
      "Unireso wanted to modernize its digital service to offer a better experience to public transport users.",

    "project.unireso.challenge1": "Integrate real-time transport data",
    "project.unireso.challenge2": "Create an intuitive interface for all users",
    "project.unireso.challenge3": "Manage online ticket sales",
    "project.unireso.challenge4": "Ensure 24/7 availability",

    "project.unireso.solution1": "High-performance React TypeScript application",
    "project.unireso.solution2": "API integration for real-time data",
    "project.unireso.solution3": "Secure payment system",
    "project.unireso.solution4": "Robust and scalable architecture",

    "project.unireso.result1": "Modern digital service for users",
    "project.unireso.result2": "Increased public transport usage",
    "project.unireso.result3": "Improved customer satisfaction",
    "project.unireso.result4": "Reduced waiting queues at ticket counters",

    // Sample Projects (removed)
    "project.ecommerce.title": "E-commerce Platform",
    "project.ecommerce.description":
      "A complete e-commerce solution with shopping cart, secure payment, and inventory management.",
    "project.ecommerce.full":
      "Development of a modern and performant e-commerce platform for an online fashion store. The solution enables complete product catalog, order, and payment management.",
    "project.ecommerce.context":
      "A clothing company wanted to modernize its online presence with a smooth and secure shopping experience while efficiently managing its inventory.",

    "project.fitness.title": "Mobile Fitness App",
    "project.fitness.description":
      "Physical activity tracking app with personalized programs and statistics.",
    "project.fitness.full":
      "Cross-platform mobile app allowing users to track their physical activities, access personalized training programs, and visualize their progress.",
    "project.fitness.context":
      "A fitness startup wanted to create an accessible app to help users achieve their health goals with tailored programs.",

    "project.dashboard.title": "Analytics Dashboard",
    "project.dashboard.description":
      "Real-time analytics dashboard for complex data visualization.",
    "project.dashboard.full":
      "Interactive data analysis dashboard enabling real-time visualization of complex business metrics with customizable charts and report exports.",
    "project.dashboard.context":
      "A B2B SaaS company needed a tool to allow their clients to visualize and analyze their usage data intuitively and in real-time.",

    // Project challenges, solutions, results (English)
    "project.ecommerce.challenge1": "Manage a catalog of over 5000 products with variants",
    "project.ecommerce.challenge2": "Ensure payment and customer data security",
    "project.ecommerce.challenge3": "Optimize performance for fast loading",
    "project.ecommerce.challenge4": "Synchronize inventory in real-time",

    "project.ecommerce.solution1":
      "React architecture with Server-Side Rendering for optimal performance",
    "project.ecommerce.solution2": "Stripe integration for PCI-DSS compliant secure payments",
    "project.ecommerce.solution3": "Smart caching and image optimization",
    "project.ecommerce.solution4": "WebSocket API for real-time stock synchronization",

    "project.ecommerce.result1": "Loading time reduced by 60%",
    "project.ecommerce.result2": "Conversion rate increased by 35%",
    "project.ecommerce.result3": "Over 10,000 transactions processed in 3 months",
    "project.ecommerce.result4": "Customer satisfaction rating of 4.8/5",

    "project.fitness.challenge1": "Create a smooth experience on iOS and Android",
    "project.fitness.challenge2": "Handle GPS tracking for outdoor activities",
    "project.fitness.challenge3": "Synchronize data across devices",
    "project.fitness.challenge4": "Customize programs based on user goals",

    "project.fitness.solution1": "React Native development for a single codebase",
    "project.fitness.solution2": "Integration of native APIs for GPS and sensors",
    "project.fitness.solution3": "Firebase for real-time sync and authentication",
    "project.fitness.solution4": "Recommendation algorithm based on goals and performance",

    "project.fitness.result1": "50,000+ downloads in 6 months",
    "project.fitness.result2": "Average rating of 4.7/5 on app stores",
    "project.fitness.result3": "70% of users active daily",
    "project.fitness.result4": "40% reduction in development costs thanks to cross-platform",

    "project.dashboard.challenge1": "Display millions of data points without slowdown",
    "project.dashboard.challenge2": "Create interactive and customizable visualizations",
    "project.dashboard.challenge3": "Process and aggregate data in real-time",
    "project.dashboard.challenge4": "Allow report export in different formats",

    "project.dashboard.solution1": "Vue.js for a reactive and modular interface",
    "project.dashboard.solution2": "D3.js for advanced and performant data visualizations",
    "project.dashboard.solution3": "Python/FastAPI backend with asynchronous processing",
    "project.dashboard.solution4": "Microservices architecture for scalability",

    "project.dashboard.result1": "Support for 10M+ data points without latency",
    "project.dashboard.result2": "Report generation time reduced by 80%",
    "project.dashboard.result3": "Adoption by 95% of clients in 2 months",
    "project.dashboard.result4": "Report-related support tickets reduced by 65%",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description":
      "Have a project in mind? A question? Feel free to contact me, I'd be happy to chat with you.",
    "contact.form.title": "Send me a message",
    "contact.form.description":
      "Fill out the form below and I'll get back to you within 24-48 hours.",
    "contact.form.name": "Full name",
    "contact.form.name.placeholder": "John Doe",
    "contact.form.email": "Email address",
    "contact.form.email.placeholder": "john.doe@example.com",
    "contact.form.message": "Your message",
    "contact.form.message.placeholder": "Tell me about your project...",
    "contact.form.sending": "Sending...",
    "contact.form.send": "Send message",
    "contact.form.success": "Message sent successfully! 🎉",
    "contact.form.success.description": "I'll get back to you as soon as possible.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.availability": "Availability",
    "contact.availability.hours": "Mon - Fri: 9am - 6pm",
    "contact.availability.status": "Available",
    "contact.linkedin.title": "LinkedIn (Preferred)",
    "contact.linkedin.link": "Connect on LinkedIn →",
    "contact.linkedin.description": "Best way to reach me for opportunities and collaborations",
    "contact.github.title": "GitHub",
    "contact.location.city": "Paris & Marseille, France",

    // About Me
    "about.title": "About Me",
    "about.description":
      "Discover my journey, experience, and what drives my passion for development.",
    "about.tab.overview": "Overview",
    "about.tab.experience": "Experience",
    "about.tab.education": "Education & Certifications",
    "about.tab.interests": "Interests",
    "about.profile.title": "Florian Fanor",
    "about.profile.role": "Lead Experience Engineer",
    "about.profile.location": "Paris, France",
    "about.profile.bio":
      "I'm a Full-Stack Developer with 7+ years of experience building modern, scalable, and accessible web applications. Specialized in React, TypeScript, Next.js, and creating exceptional user experiences.",
    "about.profile.download.cv": "Download CV",
    "about.overview.whoami": "Who I Am",
    "about.overview.passion": "My Passion",
    "about.overview.approach": "My Approach",
    "about.overview.goals": "My Goals",
    "about.stats.experience": "Years of Experience",
    "about.stats.projects": "Projects Completed",
    "about.stats.clients": "Happy Clients",
    "about.stats.technologies": "Technologies",
    "about.experience.title": "Professional Experience",
    "about.experience.present": "Present",
    "about.experience.achievements": "Key Achievements",
    "about.experience.technologies": "Technologies Used",
    "about.education.title": "Education",
    "about.education.degree": "Degree",
    "about.education.certifications": "Certifications",
    "about.education.languages": "Languages",
    "about.interests.title": "Interests & Hobbies",
    "about.header.theme.light": "Switch to dark mode",
    "about.header.theme.dark": "Switch to light mode",
    "about.header.menu.open": "Open menu",
    "about.header.menu.close": "Close menu",
    "about.header.language.fr": "Switch to English",
    "about.header.language.en": "Switch to French",

    // Blog
    "blog.title": "Articles",
    "blog.description": "My thoughts on web development, best practices, and new technologies.",
    "blog.readArticle": "Read article →",
    "blog.backToBlog": "Back to articles",
    "blog.readTime": "min",

    // About Me - UI Labels
    "aboutme.cv.downloaded": "CV downloaded!",
    "aboutme.cv.description": "The PDF file was successfully downloaded.",
    "aboutme.cv.button": "Download CV (PDF)",
    "aboutme.available": "Available immediately",
    "aboutme.tab.experience": "Experience",
    "aboutme.tab.education": "Education",
    "aboutme.tab.skills": "Skills",
    "aboutme.tab.interests": "Interests",
    "aboutme.experience.title": "Professional Experience",
    "aboutme.achievements": "Key Achievements",
    "aboutme.technologies": "Technologies Used",
    "aboutme.education.title": "Education",
    "aboutme.certifications.title": "Certifications",
    "aboutme.skills.title": "Technical Skills",
    "aboutme.languages.title": "Languages",
    "aboutme.interests.title": "Interests & Hobbies",
    "aboutme.profile.bio":
      "Technical Lead specializing in React, Next.js, Apollo GraphQL, JavaScript, HTML, and CSS, with a focus on building scalable, high-performance web applications. Extensive experience in architecting front-end solutions, optimizing rendering performance, and integrating GraphQL APIs. Certified in accessibility audit with a deep passion for making the web inclusive for everyone.",
    // Why me
    "aboutme.why.title": "why join forces?",
    "aboutme.why.1.title": "Full technical expertise & AI",
    "aboutme.why.1.text":
      "8+ years in full‑stack and cloud architectures. Pragmatic AI/ML integration where it adds value (more recent experience).",
    "aboutme.why.2.title": "Quality‑driven",
    "aboutme.why.2.text":
      "Clean, tested, maintainable code. Strong focus on accessibility, performance, and user experience.",
    "aboutme.why.3.title": "Collaborative mindset",
    "aboutme.why.3.text":
      "Clear communication and strong teamwork. Mentoring and supporting junior developers.",
    "aboutme.why.4.title": "Product‑oriented",
    "aboutme.why.4.text":
      "Customer value first, measurable impact, and the right business trade‑offs (time‑to‑market vs. technical debt).",

    // Experiences
    "exp.1.title": "Lead Experience Engineer",
    "exp.1.period": "Dec 2023 - Present",
    "exp.1.description":
      "Leading technical initiatives and architecting scalable front-end solutions for enterprise clients. Mentoring development teams and driving best practices.",
    "exp.1.achievement.1": "Architecting and implementing complex React/Next.js applications",
    "exp.1.achievement.2": "Optimizing application performance and rendering strategies",
    "exp.1.achievement.3": "Leading code reviews and establishing development standards",
    "exp.1.achievement.4":
      "Supporting and guiding junior developers and taking technical decisions",
    "exp.1.achievement.5":
      "Collaborating with the Product Owner to define project needs and objectives",

    "exp.2.title": "Software Engineer",
    "exp.2.period": "Mar 2022 - Dec 2023",
    "exp.2.description":
      "Developed and maintained high-performance web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver enterprise solutions.",
    "exp.2.achievement.1": "Built scalable React applications with Next.js",
    "exp.2.achievement.2": "Implemented GraphQL APIs with Apollo Client",
    "exp.2.achievement.3": "Optimized application performance and user experience",
    "exp.2.achievement.4": "Contributed to architecture decisions and technical design",
    "exp.2.achievement.5": "Accessibility referent",

    "exp.3.title": "Software Engineer",
    "exp.3.period": "Oct 2019 - Jan 2022",
    "exp.3.description":
      "Developed cross-platform mobile and web applications. Worked on React and React Native projects delivering mobile-first experiences.",
    "exp.3.achievement.1": "Built and maintained React Native mobile applications",
    "exp.3.achievement.2": "Developed responsive web applications with React",
    "exp.3.achievement.3": "Collaborated with design teams for seamless UI/UX implementation",
    "exp.3.achievement.4": "Implemented mobile-first development strategies",
    "exp.3.achievement.5": "Developped backend services with Python",

    "exp.4.title": "Software Engineer",
    "exp.4.period": "Feb 2019 - Oct 2019",
    "exp.4.description":
      "Worked on enterprise web applications using .NET and AngularJS. Contributed to full-stack development projects.",
    "exp.4.achievement.1": "Developed ASP.NET MVC applications",
    "exp.4.achievement.2": "Built interactive front-ends with AngularJS",
    "exp.4.achievement.3": "Collaborated in agile development environment",
    "exp.4.achievement.4": "Maintained and enhanced legacy systems",

    "exp.5.title": "Software Engineer",
    "exp.5.period": "Dec 2017 - Jan 2019",
    "exp.5.description":
      "Developed web applications and websites using ASP.NET MVC and modern JavaScript. Started career building foundational full-stack development skills.",
    "exp.5.achievement.1": "Built responsive websites and web applications",
    "exp.5.achievement.2": "Developed with ASP.NET MVC framework",
    "exp.5.achievement.3": "Implemented front-end interfaces with HTML, CSS, and JavaScript",
    "exp.5.achievement.4": "Learned web development best practices",

    // Education
    "edu.1.degree": "Bachelor of Technology in Software Engineering",
    "edu.1.school": "Curtin University",
    "edu.1.location": "Mauritius",
    "edu.1.period": "2014 - 2017",
    "edu.1.description":
      "Comprehensive software engineering program focusing on modern development practices, system design, and software architecture.",

    // Certifications
    "cert.1": "Auditer l'accessibilité numérique avec le RGAA (Access42)",
    "cert.2": "WCAG 2.1 Accessibility Specialist",
    "cert.3": "React & Next.js Advanced Development",
    "cert.4": "GraphQL & Apollo Professional",

    // Languages
    "lang.english": "English",
    "lang.french": "French",
    "lang.level.native": "Native / Bilingual",

    // Interests
    "interest.sailing.name": "Sailing",
    "interest.sailing.desc": "Enjoying time on the water",
    "interest.frisbee.name": "Ultimate Frisbee",
    "interest.frisbee.desc": "Team sports and active lifestyle",
    "interest.redcross.name": "Red Cross Volunteer",
    "interest.redcross.desc": "Community service and helping others",
    "interest.a11y.name": "Accessibility Advocacy",
    "interest.a11y.desc": "Making the web accessible to everyone",
    "interest.learning.name": "Tech Learning",
    "interest.learning.desc": "Continuous learning and improvement",

    // Footer
    "footer.tagline":
      "Full-Stack Developer passionate about creating modern and accessible web experiences.",
    "footer.navigation": "Navigation",
    "footer.follow": "Follow me",
    "footer.copyright": "Florian Fanor. Built with",
    "footer.and": "and React.",
    "footer.legal": "Legal notice",
    "footer.privacy": "Privacy policy",
    "footer.backToTop": "Back to top",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["fr"]] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
