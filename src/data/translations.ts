export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    skills: string;
    process: string;
    trust: string;
    contact: string;
    startProject: string;
  };
  hero: {
    taglineBadge: string;
    heading1: string;
    heading2: string;
    heading3: string;
    role: string;
    location: string;
    description: string;
    viewWork: string;
    startProject: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  services: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    divisions: {
      marketing: {
        title: string;
        subtitle: string;
        description: string;
      };
      aiCreative: {
        title: string;
        subtitle: string;
        description: string;
      };
      webSoftware: {
        title: string;
        subtitle: string;
        description: string;
      };
    };
    whatIDo: string;
    whatIDeliver: string;
    whoItsFor: string;
    expectedOutcome: string;
    toolsAndTech: string;
    viewVisualProof: string;
    inspectProof: string;
    categoryProofBadge: string;
    startProject: string;
  };
  portfolio: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    categories: {
      all: string;
      marketing: string;
      aiCreative: string;
      webDev: string;
      software: string;
    };
    noProjects: string;
    objective: string;
    solution: string;
    outcome: string;
    servicesProvided: string;
    technologies: string;
    inspectProof: string;
    ctaTitle: string;
    ctaButton: string;
    proofLabels: {
      concept: string;
      sampleWork: string;
      demonstration: string;
      prototype: string;
    };
  };
  about: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    name: string;
    founderTitle: string;
    headline: string;
    headlineAccent: string;
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    tags: string[];
  };
  skills: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    techStackTitle: string;
    frontend: string;
    backend: string;
    database: string;
  };
  process: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      details: string[];
    }>;
  };
  trust: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
    facts: {
      fact1Value: string;
      fact1Label: string;
      fact1Desc: string;
      fact2Value: string;
      fact2Label: string;
      fact2Desc: string;
      fact3Value: string;
      fact3Label: string;
      fact3Desc: string;
    };
  };
  contact: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    heading: string;
    subheading: string;
    connectHeading: string;
    connectSubheading: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      serviceOptions: {
        marketing: string;
        aiCreative: string;
        webDev: string;
        software: string;
        other: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      successMessage: string;
      errorMessage: string;
    };
    direct: {
      emailLabel: string;
      whatsappLabel: string;
      locationLabel: string;
      locationValue: string;
      followMe: string;
    };
  };
  modal: {
    visualProof: string;
    serviceDemonstrated: string;
    division: string;
    authenticityStatus: string;
    zoomIn: string;
    zoomOut: string;
    reset: string;
    close: string;
    prev: string;
    next: string;
    startProjectWithCapability: string;
  };
  footer: {
    slogan: string;
    tagline: string;
    servicesTitle: string;
    navTitle: string;
    connectTitle: string;
    copyright: string;
    designedAndBuilt: string;
    backToTop: string;
    cameroonToWorld: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      skills: 'Skills',
      process: 'Process',
      trust: 'Why Me',
      contact: 'Contact',
      startProject: 'Start a Project',
    },
    hero: {
      taglineBadge: 'DIMI DIGITAL LAB · STUDIO',
      heading1: 'Create.',
      heading2: 'Innovate.',
      heading3: 'Elevate.',
      role: 'Digital Marketing Specialist · AI Content Creator · Web & Software Developer',
      location: 'Based in Cameroon · Working Worldwide',
      description: 'Human strategy, creative direction, and AI-assisted workflows combined with modern web and software engineering to elevate your digital presence.',
      viewWork: 'Explore Visual Proof',
      startProject: 'Start a Project',
      badge1: 'Digital Marketing Strategy',
      badge2: 'AI Creative Production',
      badge3: 'Full-Stack Web & Software',
    },
    services: {
      sectionNumber: '01',
      sectionTitle: 'Services',
      sectionSubtitle: 'WHAT I DO',
      divisions: {
        marketing: {
          title: 'DIGITAL MARKETING',
          subtitle: 'Strategic Brand Growth',
          description: 'Comprehensive digital marketing strategies, audience research, multi-channel campaign architectures, and systematic social media operations designed for measurable brand growth.',
        },
        aiCreative: {
          title: 'AI CREATIVE STUDIO',
          subtitle: 'Next-Gen Visual Production',
          description: 'High-end visual content production powered by human creative direction and cutting-edge generative AI workflows for advertising, short-form video, and product visualization.',
        },
        webSoftware: {
          title: 'WEB & SOFTWARE',
          subtitle: 'Robust Digital Solutions',
          description: 'End-to-end engineering of modern web applications, e-commerce storefronts, responsive websites, APIs, and scalable database architectures tailored to business needs.',
        },
      },
      whatIDo: 'What I Do',
      whatIDeliver: 'What I Deliver',
      whoItsFor: "Who It's For",
      expectedOutcome: 'Client Value & Outcome',
      toolsAndTech: 'Tools & Technologies',
      viewVisualProof: 'View Visual Proof',
      inspectProof: 'Inspect Visual Proof Asset',
      categoryProofBadge: 'Official Proof Asset',
      startProject: 'Start a Project in this Division',
    },
    portfolio: {
      sectionNumber: '02',
      sectionTitle: 'Visual Proof & Portfolio',
      sectionSubtitle: 'AUTHENTIC DEMONSTRATIONS',
      categories: {
        all: 'All Proofs',
        marketing: 'Digital Marketing',
        aiCreative: 'AI Creative Studio',
        webDev: 'Web Development',
        software: 'Software Engineering',
      },
      noProjects: 'No proof assets found for this category.',
      objective: 'Core Objective',
      solution: 'Execution & Architecture',
      outcome: 'Deliverable & Value',
      servicesProvided: 'Services Demonstrated',
      technologies: 'Tools & Stack',
      inspectProof: 'Inspect Full Visual Proof',
      ctaTitle: 'Ready to build something impactful for your business?',
      ctaButton: 'Start a Conversation',
      proofLabels: {
        concept: 'Concept Architecture',
        sampleWork: 'Sample Work Demonstration',
        demonstration: 'Visual Service Proof',
        prototype: 'Interactive Prototype',
      },
    },
    about: {
      sectionNumber: '03',
      sectionTitle: 'About Dimitri Kuete',
      sectionSubtitle: 'FOUNDER & LEAD SPECIALIST',
      name: 'Dimitri Kuete',
      founderTitle: 'Founder & Principal Developer, DIMI DIGITAL LAB',
      headline: 'Where strategic vision meets',
      headlineAccent: 'technical execution.',
      bioParagraph1: "I am Dimitri Kuete — a Digital Marketing Specialist, AI Content Creator, and Web & Software Developer based in Cameroon, serving clients worldwide through DIMI DIGITAL LAB.",
      bioParagraph2: "Rather than treating marketing, creative media, and software engineering as isolated silos, I unite them under one unified methodology: Human strategy + Creative direction + AI-assisted production + Production-grade code.",
      bioParagraph3: "Whether designing multi-channel marketing funnels, producing AI-assisted advertising suites, or building full-stack web applications with Next.js, Java Spring Boot, and relational databases, my focus is delivering authentic, high-impact digital solutions.",
      tags: [
        'Digital Marketing Strategy',
        'AI Creative Direction',
        'Full-Stack Development',
        'Responsive Web Architecture',
        'Relational Database Systems',
        'Global Remote Delivery',
      ],
    },
    skills: {
      sectionNumber: '04',
      sectionTitle: 'Skills & Capabilities',
      sectionSubtitle: 'TECHNICAL & STRATEGIC ECOSYSTEM',
      techStackTitle: 'Development Technologies & Frameworks',
      frontend: 'Frontend Engineering',
      backend: 'Backend Engineering',
      database: 'Database & Data Architecture',
    },
    process: {
      sectionNumber: '05',
      sectionTitle: 'Our Process',
      sectionSubtitle: 'HOW I DELIVER WORK',
      steps: [
        {
          number: '01',
          title: 'DISCOVER',
          description: 'Deep-dive discovery into business objectives, audience segments, and competitor landscape.',
          details: ['Stakeholder alignment', 'Audience segmentation', 'Competitor benchmarking', 'Metric & scope definition'],
        },
        {
          number: '02',
          title: 'STRATEGIZE',
          description: 'Architecting the strategic roadmap across marketing channels, creative direction, or tech stack.',
          details: ['Channel & content planning', 'Visual moodboards & briefs', 'Software system architecture', 'Milestone timeline'],
        },
        {
          number: '03',
          title: 'PRODUCE',
          description: 'Executing content creation, AI generation, frontend UI, or backend software logic.',
          details: ['AI-assisted asset generation', 'Clean component implementation', 'Backend REST API engineering', 'Brand asset suites'],
        },
        {
          number: '04',
          title: 'REFINE',
          description: 'Rigorous testing, optimization, cross-device QA, and design polishing.',
          details: ['Responsive cross-device check', 'Accessibility & SEO audits', 'Code & performance tuning', 'Asset formatting'],
        },
        {
          number: '05',
          title: 'DELIVER',
          description: 'Launch, deployment, client handover, and actionable post-launch guidance.',
          details: ['Production deployment', 'Campaign launch readiness', 'Documentation handover', 'Ongoing strategic support'],
        },
      ],
    },
    trust: {
      sectionNumber: '06',
      sectionTitle: 'Why Work With Me',
      sectionSubtitle: 'AUTHENTICITY & STANDARDS',
      cards: [
        {
          title: 'Full-Spectrum Digital Mastery',
          description: 'Bridging marketing strategy, high-end visual production, and full-stack software development into a coherent, single-point digital capability.',
        },
        {
          title: 'Human-Led AI Production',
          description: 'AI used as a multiplier for speed, quality, and creative iteration — guided by human creative direction and rigorous quality standards.',
        },
        {
          title: 'Production-Grade Engineering',
          description: 'Clean, maintainable, standards-compliant web code (TypeScript, Next.js, Tailwind) and robust backend architectures (Spring Boot, MySQL).',
        },
      ],
      facts: {
        fact1Value: 'Worldwide',
        fact1Label: 'Global Service Reach',
        fact1Desc: 'Based in Cameroon, delivering world-class digital services to clients internationally.',
        fact2Value: '3 Core',
        fact2Label: 'Specialized Divisions',
        fact2Desc: 'Digital Marketing, AI Creative Studio, and Web & Software Development.',
        fact3Value: '100%',
        fact3Label: 'Authentic Visuals',
        fact3Desc: 'Zero stock photography; every visual asset in this portfolio demonstrates real capabilities.',
      },
    },
    contact: {
      sectionNumber: '07',
      sectionTitle: 'Contact & Collaboration',
      sectionSubtitle: 'GET IN TOUCH',
      heading: 'Ready to elevate your digital presence?',
      subheading: "Whether you need a digital marketing strategy, AI-generated creative assets, or a full-stack web application, let's discuss your project.",
      connectHeading: 'Direct Communication',
      connectSubheading: 'Reach out directly through email, messaging apps, or the project inquiry form below. Inquiries are answered within 24 hours.',
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'e.g. John Doe',
        emailLabel: 'Your Email',
        emailPlaceholder: 'e.g. john@example.com',
        serviceLabel: 'Service of Interest',
        servicePlaceholder: 'Select a primary division',
        serviceOptions: {
          marketing: 'Digital Marketing (Strategy, Social, Campaigns)',
          aiCreative: 'AI Creative Studio (Images, Video, Creatives)',
          webDev: 'Web Development (Landing pages, Portfolios, Websites)',
          software: 'Software Engineering (Full-stack, APIs, Databases)',
          other: 'Custom Cross-Discipline Project',
        },
        messageLabel: 'Project Brief / Message',
        messagePlaceholder: 'Tell me about your project, timeline, and goals...',
        submitButton: 'Send Project Inquiry',
        submittingButton: 'Sending Message...',
        successMessage: 'Thank you! Your message has been sent successfully. Dimitri will get back to you shortly.',
        errorMessage: 'Something went wrong. Please reach out directly via WhatsApp or email.',
      },
      direct: {
        emailLabel: 'Official Email',
        whatsappLabel: 'WhatsApp & Direct Phone',
        locationLabel: 'Studio Headquarters',
        locationValue: 'Based in Cameroon · Serving Clients Worldwide',
        followMe: 'Connect on Professional Channels',
      },
    },
    modal: {
      visualProof: 'Visual Proof Asset',
      serviceDemonstrated: 'Service Demonstrated',
      division: 'Division',
      authenticityStatus: 'Verification Status',
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      reset: 'Reset Zoom',
      close: 'Close (Esc)',
      prev: 'Previous Proof',
      next: 'Next Proof',
      startProjectWithCapability: 'Request This Capability',
    },
    footer: {
      slogan: 'CREATE. INNOVATE. ELEVATE.',
      tagline: 'Digital Strategy · AI Creative Studio · Web & Software Development',
      servicesTitle: 'Service Divisions',
      navTitle: 'Navigation',
      connectTitle: 'Get In Touch',
      copyright: 'DIMI DIGITAL LAB. All rights reserved.',
      designedAndBuilt: 'Designed & Engineered by Dimitri Kuete',
      backToTop: 'Back to top',
      cameroonToWorld: 'Based in Cameroon · Working Worldwide',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'À Propos',
      skills: 'Compétences',
      process: 'Processus',
      trust: 'Pourquoi Moi',
      contact: 'Contact',
      startProject: 'Lancer un Projet',
    },
    hero: {
      taglineBadge: 'DIMI DIGITAL LAB · STUDIO',
      heading1: 'Créer.',
      heading2: 'Innover.',
      heading3: 'Élever.',
      role: 'Spécialiste Marketing Digital · Créateur de Contenu IA · Développeur Web & Logiciel',
      location: 'Basé au Cameroun · Actif à l’International',
      description: 'Stratégie humaine, direction créative et production assistée par IA associées à une ingénierie logicielle et web moderne pour propulser votre présence numérique.',
      viewWork: 'Explorer les Preuves Visuelles',
      startProject: 'Lancer un Projet',
      badge1: 'Stratégie Marketing Digital',
      badge2: 'Production Créative par IA',
      badge3: 'Ingénierie Web & Logiciel Full-Stack',
    },
    services: {
      sectionNumber: '01',
      sectionTitle: 'Services',
      sectionSubtitle: 'CE QUE JE FAIS',
      divisions: {
        marketing: {
          title: 'MARKETING DIGITAL',
          subtitle: 'Croissance Stratégique de Marque',
          description: 'Stratégies marketing complètes, recherche d’audience, architectures de campagnes multicanales et gestion rigoureuse des réseaux sociaux pour une croissance mesurable.',
        },
        aiCreative: {
          title: 'STUDIO CRÉATIF IA',
          subtitle: 'Production Visuelle Nouvelle Génération',
          description: 'Production visuelle de prestige alliant direction artistique humaine et flux génératifs IA de pointe pour la publicité, la vidéo courte et la mise en valeur de produits.',
        },
        webSoftware: {
          title: 'WEB & LOGICIEL',
          subtitle: 'Solutions Numériques Robustes',
          description: 'Ingénierie de bout en bout d’applications web modernes, boutiques e-commerce, sites réactifs, architectures d’API et bases de données adaptées à vos besoins métiers.',
        },
      },
      whatIDo: 'Ce que je fais',
      whatIDeliver: 'Livrables',
      whoItsFor: 'Pour qui',
      expectedOutcome: 'Valeur client & Impact',
      toolsAndTech: 'Outils & Technologies',
      viewVisualProof: 'Voir la preuve visuelle',
      inspectProof: 'Inspecter la preuve visuelle',
      categoryProofBadge: 'Preuve Visuelle Officielle',
      startProject: 'Démarrer un projet dans cette division',
    },
    portfolio: {
      sectionNumber: '02',
      sectionTitle: 'Preuves Visuelles & Portfolio',
      sectionSubtitle: 'DÉMONSTRATIONS AUTHENTIQUES',
      categories: {
        all: 'Toutes les Preuves',
        marketing: 'Marketing Digital',
        aiCreative: 'Studio Créatif IA',
        webDev: 'Développement Web',
        software: 'Ingénierie Logicielle',
      },
      noProjects: 'Aucune preuve trouvée dans cette catégorie.',
      objective: 'Objectif Principal',
      solution: 'Exécution & Architecture',
      outcome: 'Livrable & Valeur Créée',
      servicesProvided: 'Services Démontrés',
      technologies: 'Outils & Stack',
      inspectProof: 'Inspecter la preuve en plein écran',
      ctaTitle: 'Prêt à concrétiser un projet ambitieux pour votre entreprise ?',
      ctaButton: 'Démarrer une Discussion',
      proofLabels: {
        concept: 'Concept Architectural',
        sampleWork: 'Travail de Démonstration',
        demonstration: 'Preuve Visuelle de Service',
        prototype: 'Prototype Interactif',
      },
    },
    about: {
      sectionNumber: '03',
      sectionTitle: 'À Propos de Dimitri Kuete',
      sectionSubtitle: 'FONDATEUR & DÉVELOPPEUR PRINCIPAL',
      name: 'Dimitri Kuete',
      founderTitle: 'Fondateur & Développeur Principal, DIMI DIGITAL LAB',
      headline: 'Là où la vision stratégique rencontre',
      headlineAccent: 'l’excellence technique.',
      bioParagraph1: "Je suis Dimitri Kuete — spécialiste en marketing digital, créateur de contenu IA et développeur web & logiciel basé au Cameroun, accompagnant des clients du monde entier à travers DIMI DIGITAL LAB.",
      bioParagraph2: "Au lieu de traiter le marketing, la création visuelle et le code comme des silos indépendants, je les combine en une formule unique : Stratégie humaine + Direction créative + Production assistée par IA + Ingénierie logicielle robuste.",
      bioParagraph3: "Qu’il s’agisse de concevoir des entonnoirs de conversion, de produire des visuels publicitaires percutants par IA ou de développer des plateformes web complètes (Next.js, Spring Boot, MySQL), mon engagement reste l’impact et l’authenticité.",
      tags: [
        'Stratégie Marketing Digital',
        'Direction Créative par IA',
        'Développement Full-Stack',
        'Architecture Web Réactive',
        'Systèmes de Bases de Données',
        'Collaboration Internationale',
      ],
    },
    skills: {
      sectionNumber: '04',
      sectionTitle: 'Compétences & Savoir-faire',
      sectionSubtitle: 'ÉCOSYSTÈME STRATÉGIQUE & TECHNIQUE',
      techStackTitle: 'Technologies & Frameworks de Développement',
      frontend: 'Ingénierie Frontend',
      backend: 'Ingénierie Backend',
      database: 'Architecture de Données & Bases',
    },
    process: {
      sectionNumber: '05',
      sectionTitle: 'Notre Processus',
      sectionSubtitle: 'MÉTHODOLOGIE DE TRAVAIL',
      steps: [
        {
          number: '01',
          title: 'EXPLORER',
          description: 'Compréhension approfondie des objectifs métiers, des segments cibles et de la concurrence.',
          details: ['Alignement des parties prenantes', 'Segmentation d’audience', 'Analyse concurrentielle', 'Définition du périmètre'],
        },
        {
          number: '02',
          title: 'DÉFINIR',
          description: 'Conception de la feuille de route stratégique, de la ligne éditoriale ou de l’architecture logicielle.',
          details: ['Stratégie de canaux & contenus', 'Planches d’ambiance & briefs créatifs', 'Architecture technique', 'Planning opérationnel'],
        },
        {
          number: '03',
          title: 'CRÉER',
          description: 'Production des contenus, génération visuelle IA, interface frontend ou logique backend.',
          details: ['Production visuelle par IA', 'Composants frontend soignés', 'Ingénierie d’API REST backend', 'Packs graphiques de marque'],
        },
        {
          number: '04',
          title: 'OPTIMISER',
          description: 'Tests rigoureux, optimisation des performances, contrôle qualité multi-appareils et finitions.',
          details: ['Validation multi-écrans', 'Audits SEO & accessibilité', 'Optimisation des performances', 'Harmonisation des rendus'],
        },
        {
          number: '05',
          title: 'DÉPLOYER',
          description: 'Mise en ligne, livraison au client et transmission des guides de prise en main.',
          details: ['Déploiement en production', 'Lancement opérationnel', 'Transmission de la documentation', 'Accompagnement continu'],
        },
      ],
    },
    trust: {
      sectionNumber: '06',
      sectionTitle: 'Pourquoi Collaborer',
      sectionSubtitle: 'AUTHENTICITÉ & EXIGENCE',
      cards: [
        {
          title: 'Maîtrise Numérique Complète',
          description: 'Convergence harmonieuse entre vision marketing, production visuelle par IA et développement d’applications robustes.',
        },
        {
          title: 'Production IA Guidée par l’Humain',
          description: 'L’IA utilisée comme un levier d’agilité et de créativité, canalisée par une direction artistique rigoureuse.',
        },
        {
          title: 'Ingénierie Conforme aux Standards',
          description: 'Code propre, maintenable et moderne (TypeScript, Next.js, Tailwind) adossé à des architectures backend éprouvées (Spring Boot, MySQL).',
        },
      ],
      facts: {
        fact1Value: 'Monde entier',
        fact1Label: 'Rayonnement International',
        fact1Desc: 'Basé au Cameroun, au service de partenaires et clients à l’échelle internationale.',
        fact2Value: '3 Pôles',
        fact2Label: 'Divisions Spécialisées',
        fact2Desc: 'Marketing Digital, Studio Créatif IA et Développement Web & Logiciel.',
        fact3Value: '100%',
        fact3Label: 'Visuels Authentiques',
        fact3Desc: 'Zéro photo de stock ; chaque visuel de ce portfolio témoigne de réalisations concrètes.',
      },
    },
    contact: {
      sectionNumber: '07',
      sectionTitle: 'Contact & Collaboration',
      sectionSubtitle: 'ME CONTACTER',
      heading: 'Prêt à donner une nouvelle dimension à vos projets ?',
      subheading: 'Stratégie marketing, production visuelle assistée par IA ou application web sur-mesure : échangeons sur vos ambitions.',
      connectHeading: 'Contact Direct',
      connectSubheading: 'Contactez-moi directement par email, WhatsApp ou via le formulaire ci-dessous. Réponse assurée sous 24 heures.',
      form: {
        nameLabel: 'Votre Nom',
        namePlaceholder: 'ex. Jean Dupont',
        emailLabel: 'Votre Email',
        emailPlaceholder: 'ex. jean@example.com',
        serviceLabel: 'Service souhaité',
        servicePlaceholder: 'Sélectionnez un domaine principal',
        serviceOptions: {
          marketing: 'Marketing Digital (Stratégie, Réseaux, Campagnes)',
          aiCreative: 'Studio Créatif IA (Images, Vidéo, Visuels pub)',
          webDev: 'Développement Web (Landing pages, Portfolios, Sites vitrines)',
          software: 'Ingénierie Logicielle (Full-Stack, API, Données)',
          other: 'Projet Hybride Sur-Mesure',
        },
        messageLabel: 'Détails du projet / Message',
        messagePlaceholder: 'Présentez brièvement vos besoins, délais et objectifs...',
        submitButton: 'Envoyer ma Demande',
        submittingButton: 'Envoi en cours...',
        successMessage: 'Merci ! Votre message a été transmis avec succès. Dimitri vous répondra rapidement.',
        errorMessage: 'Une erreur est survenue. N’hésitez pas à me contacter directement sur WhatsApp ou par email.',
      },
      direct: {
        emailLabel: 'Email Professionnel',
        whatsappLabel: 'WhatsApp & Téléphone',
        locationLabel: 'Siège du Studio',
        locationValue: 'Basé au Cameroun · Actif à l’International',
        followMe: 'Retrouvez-moi sur les réseaux professionnels',
      },
    },
    modal: {
      visualProof: 'Preuve Visuelle Officielle',
      serviceDemonstrated: 'Service Démontré',
      division: 'Division',
      authenticityStatus: 'Statut de Vérification',
      zoomIn: 'Zoomer',
      zoomOut: 'Dézoomer',
      reset: 'Réinitialiser',
      close: 'Fermer (Échap)',
      prev: 'Preuve Précédente',
      next: 'Preuve Suivante',
      startProjectWithCapability: 'Demander cette expertise',
    },
    footer: {
      slogan: 'CREATE. INNOVATE. ELEVATE.',
      tagline: 'Stratégie Digitale · Studio Créatif IA · Développement Web & Logiciel',
      servicesTitle: 'Divisions de Services',
      navTitle: 'Navigation',
      connectTitle: 'Prendre Contact',
      copyright: 'DIMI DIGITAL LAB. Tous droits réservés.',
      designedAndBuilt: 'Conçu & Développé par Dimitri Kuete',
      backToTop: 'Haut de page',
      cameroonToWorld: 'Basé au Cameroun · Actif à l’International',
    },
  },
};
