export type Language = 'en' | 'fr';

export interface TrainingProgram {
  id: string;
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  audience: string;
  image: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    creative: string;
    training: string;
    contact: string;
    workWithMe: string;
  };
  hero: {
    taglineBadge: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    role: string;
    location: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    saasLabel: string;
    statusAvailable: string;
    competencies: string[];
  };
  about: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    name: string;
    roleTitle: string;
    headline: string;
    headlineAccent: string;
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    experienceTitle: string;
    experienceSubtitle: string;
    experiences: {
      role: string;
      organization: string;
      period: string;
      description: string;
      badge?: string;
    }[];
    pillarsTitle: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    intro: string;
    ctaButton: string;
    domains: {
      id: string;
      number: string;
      title: string;
      subtitle: string;
      description: string;
      capabilities: string[];
      tech: string[];
    }[];
  };
  projects: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    intro: string;
    liveBadge: string;
    devBadge: string;
    problemLabel: string;
    capabilitiesLabel: string;
    techLabel: string;
    visitLiveCta: string;
    comingSoonCta: string;
    items: {
      id: string;
      name: string;
      status: 'live' | 'development';
      category: string;
      tagline: string;
      description: string;
      problemSolved: string;
      capabilities: string[];
      technologies: string[];
      liveUrl?: string;
      images: { src: string; alt: string; caption?: string }[];
    }[];
  };
  creative: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    intro: string;
    ctaButton: string;
    pillars: {
      title: string;
      subtitle: string;
      description: string;
      image: string;
      highlights: string[];
    }[];
  };
  training: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    intro: string;
    outcomesLabel: string;
    audienceLabel: string;
    ctaButton: string;
    programs: TrainingProgram[];
  };
  trust: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    cards: {
      title: string;
      description: string;
    }[];
    stats: {
      value: string;
      label: string;
      desc: string;
    }[];
  };
  contact: {
    sectionNumber: string;
    sectionTitle: string;
    sectionSubtitle: string;
    heading: string;
    subheading: string;
    connectHeading: string;
    connectSubheading: string;
    direct: {
      emailLabel: string;
      whatsappLabel: string;
      locationLabel: string;
      locationValue: string;
      responseNotice: string;
    };
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      serviceOptions: {
        webDev: string;
        marketing: string;
        creative: string;
        automation: string;
        trainingEcommerce: string;
        trainingProduct: string;
        trainingVideo: string;
        trainingMarketing: string;
        other: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      successMessage: string;
      errorMessage: string;
    };
  };
  footer: {
    slogan: string;
    tagline: string;
    navTitle: string;
    servicesTitle: string;
    connectTitle: string;
    copyright: string;
    designedAndBuilt: string;
    cameroonToWorld: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      creative: 'Creative Media',
      training: 'Training',
      contact: 'Contact',
      workWithMe: 'Work With Me',
    },
    hero: {
      taglineBadge: 'DIMI DIGITAL LAB · DIMITRI KUETE',
      headlinePart1: 'Building Digital Solutions.',
      headlinePart2: 'Creating Impact.',
      headlinePart3: 'Driving Growth.',
      role: 'Digital Solutions Developer · Digital Marketing Strategist · Content Creator',
      location: 'Based in Cameroon · Working Worldwide',
      description: 'I develop digital products, build web solutions, create compelling content and help businesses grow through technology, creativity and strategic digital marketing.',
      primaryCta: 'Work With Me',
      secondaryCta: 'Explore My Projects',
      saasLabel: 'Live SaaS Products',
      statusAvailable: 'Available for New Projects & Collaborations',
      competencies: [
        'Full-Stack Web & SaaS Engineering',
        'Digital Marketing & E-Commerce Growth',
        'Video Production & Content Creation',
        'Digital Automation & AI Workflows',
      ],
    },
    about: {
      sectionNumber: '01',
      sectionTitle: 'About Dimitri Kuete',
      sectionSubtitle: 'BACKGROUND & PHILOSOPHY',
      name: 'Dimitri Kuete',
      roleTitle: 'Digital Solutions Developer · Marketing Strategist · Founder, DIMI DIGITAL LAB',
      headline: 'Where technical execution meets',
      headlineAccent: 'business strategy & creative production.',
      bioParagraph1: "I am Dimitri Kuete — a multidisciplinary digital professional based in Cameroon, partnering with visionary founders, enterprises, and brands worldwide. My work bridges the gap between software engineering, strategic marketing, and high-impact digital content.",
      bioParagraph2: "I do not simply discuss digital opportunities or post theoretical advice; I architect, code, and deploy practical solutions. From engineering production-ready SaaS platforms to formulating data-backed customer acquisition funnels, I turn ambitious business goals into functioning digital realities.",
      bioParagraph3: "My methodology combines four core disciplines: technical precision in modern software engineering, conversion-focused marketing strategy, human creative direction, and practical AI workflow integration. Whether building a complex web platform or directing video content, my focus is always tangible business impact.",
      pillarsTitle: 'Five Multidisciplinary Pillars',
      pillars: [
        { title: 'Digital Development', desc: 'Engineering robust, scalable web applications and SaaS platforms with modern architectures.' },
        { title: 'Digital Entrepreneurship', desc: 'Conceiving, packaging, and commercializing digital products that solve real-world problems.' },
        { title: 'Digital Marketing', desc: 'Architecting multi-channel acquisition funnels, retention systems, and measurable growth campaigns.' },
        { title: 'Content Creation', desc: 'Producing engaging video and visual media that communicates ideas and builds brand authority.' },
        { title: 'Digital Innovation', desc: 'Harnessing modern AI tools and workflow automation to optimize operations and production speed.' },
      ],
      experienceTitle: 'Professional Background',
      experienceSubtitle: 'EXPERIENCE & LEADERSHIP',
      experiences: [
        {
          role: 'Founder & Lead Digital Specialist',
          organization: 'DIMI DIGITAL LAB',
          period: '2023 — Present',
          description: 'Architecting proprietary SaaS products (SchoolIOS, Chop237, CardLink), developing custom client web solutions, and directing digital marketing operations for businesses internationally.',
          badge: 'Principal Practice',
        },
        {
          role: 'Digital Marketing & Brand Operations',
          organization: 'TECNO Mobile',
          period: 'Professional Experience',
          description: 'Contributed to regional digital marketing campaigns, product launch communications, mobile device promotion, and social audience engagement strategies.',
          badge: 'Industry Experience',
        },
      ],
    },
    services: {
      sectionNumber: '02',
      sectionTitle: 'Professional Services',
      sectionSubtitle: 'FOUR CORE CAPABILITY DOMAINS',
      intro: 'Structured across four core domains, I provide end-to-end digital solutions designed to help businesses establish authority, streamline operations, and drive sustainable growth.',
      ctaButton: 'Discuss a Project in this Domain',
      domains: [
        {
          id: 'development',
          number: '01',
          title: 'Digital Development & Solutions',
          subtitle: 'Scalable Software & Web Engineering',
          description: 'I design and develop modern digital platforms and applications that solve practical business problems, from high-performance corporate web presences to complex cloud SaaS systems.',
          capabilities: [
            'Website & modern web application development (Next.js, React, TypeScript)',
            'SaaS product development, system architecture & cloud deployment',
            'Custom business platforms, administrative portals & relational database systems',
            'Responsive interfaces, accessible UI/UX systems & mobile-first experiences',
          ],
          tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
        },
        {
          id: 'marketing',
          number: '02',
          title: 'Digital Marketing & E-Commerce',
          subtitle: 'Strategic Brand Growth & Conversion',
          description: 'I help businesses establish, develop and improve their digital presence through strategic marketing, customer acquisition funnels, and robust online commerce solutions.',
          capabilities: [
            'Comprehensive digital marketing strategy & conversion funnel architecture',
            'E-commerce development & localized checkout integration (Mobile Money, Cards)',
            'Digital product development, launch management & commercialisation',
            'Social media strategy, editorial calendars & audience development',
          ],
          tech: ['Meta Ads', 'TikTok Strategy', 'SEO & GSC', 'Shopify', 'Conversion Rate Optimization', 'Analytics'],
        },
        {
          id: 'content',
          number: '03',
          title: 'Content Creation & Creative Production',
          subtitle: 'Visual Storytelling & Media Production',
          description: 'I create professional digital content designed to communicate ideas, engage audiences and strengthen brands through human creative direction and modern production tools.',
          capabilities: [
            'Professional video content creation & visual brand storytelling',
            'Social media content production for vertical platforms (TikTok, Reels, Shorts)',
            'Advanced video editing, color grading, pacing & creative direction',
            'AI-assisted video production & modern creative media workflows',
            'High-impact creative campaign development & promotional asset suites',
          ],
          tech: ['DaVinci Resolve', 'Adobe Premiere Pro', 'CapCut Pro', 'Creative AI Tools', 'Sound Design'],
        },
        {
          id: 'automation',
          number: '04',
          title: 'Digital Automation & AI Solutions',
          subtitle: 'Process Efficiency & Smarter Workflows',
          description: 'I leverage modern technologies to improve digital workflows, automate repetitive processes and develop smarter business solutions that scale with your team.',
          capabilities: [
            'Business process automation & cross-platform system integrations',
            'Practical AI tool integration into daily business and marketing workflows',
            'AI-assisted digital asset generation & automated publishing pipelines',
            'Operational workflow audits, digital optimization & productivity systems',
          ],
          tech: ['Workflow Automation', 'OpenAI & Claude APIs', 'Webhooks', 'Process Mapping', 'Cloud Tools'],
        },
      ],
    },
    projects: {
      sectionNumber: '03',
      sectionTitle: 'Digital Products & SaaS',
      sectionSubtitle: 'PROPRIETARY PLATFORMS',
      intro: 'I build and operate actual digital products. Rather than just designing mockups, I engineer, deploy, and manage live SaaS platforms that solve pressing real-world challenges.',
      liveBadge: 'LIVE / DEPLOYED',
      devBadge: 'IN DEVELOPMENT',
      problemLabel: 'Problem Solved',
      capabilitiesLabel: 'Verified Key Capabilities',
      techLabel: 'Technical Architecture',
      visitLiveCta: 'Explore Live Product',
      comingSoonCta: 'Follow Development',
      items: [
        {
          id: 'schoolios',
          name: 'SchoolIOS',
          status: 'live',
          category: 'Education Management SaaS',
          tagline: 'Comprehensive Digital Operating System for Educational Institutions',
          description: 'SchoolIOS is a centralized digital education management platform engineered to help schools manage their academic, administrative, and financial operations through a unified cloud environment. It covers nursery, primary, secondary schools, higher education institutions, and vocational training centers.',
          problemSolved: 'Replaces error-prone paper grade records, slow physical report card distributions, manual fee reconciliation, and fragmented parent communication with a secure, sub-second digital operating system.',
          capabilities: [
            'Independent multi-tenant school workspaces with role-based access (admin, teachers, parents, students)',
            'Automated academic deliberation engine & official MINESEC-compliant report card generation',
            'Integrated school tuition fee management with automated Mobile Money payment workflows',
            'Multi-lingual accessibility supporting French, English, and indigenous African languages',
            'Resilient offline data synchronization ensuring uninterrupted operations during connectivity drops',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Role-Based Access', 'PWA'],
          liveUrl: 'https://school-ios.vercel.app/',
          images: [
            { src: '/images/schoolios-hero.png', alt: 'SchoolIOS Web Platform Live Hero Interface' },
            { src: '/images/schoolios-logo.png', alt: 'SchoolIOS Official 3D Brand Logo' },
          ],
        },
        {
          id: 'chop237',
          name: 'Chop237',
          status: 'live',
          category: 'FoodTech & Restaurant Delivery SaaS',
          tagline: 'On-Demand Local Food Marketplace & Delivery Ecosystem for Cameroon',
          description: 'Chop237 is a dedicated digital food ordering and delivery marketplace engineered specifically for the culinary ecosystem in Cameroon. It connects authentic local restaurants, caterers, and food artisans directly with consumers across 14 cities.',
          problemSolved: 'Solves the frustration of missing restaurant menus on Google Maps, unverified phone orders, and lack of real-time order delivery tracking by providing a transparent, localized digital ordering experience.',
          capabilities: [
            'Curated network of 294+ partner restaurants across Douala, Yaoundé, and 14 major Cameroonian cities',
            'Transparent digital menus with verified FCFA pricing and dish customisation',
            'Instant secure mobile checkout via MTN Mobile Money and Orange Money',
            'Real-time order lifecycle tracking (Cart → In Kitchen → Courier Dispatch in 65°C insulated bags)',
            'Native-feel Progressive Web App (PWA) with 1-click installation on Android and iPhone',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Mobile Money APIs', 'PWA Architecture', 'WebSockets'],
          liveUrl: 'https://www.chop237.app/',
          images: [
            { src: '/images/chop237-hero.png', alt: 'Chop237 Live Web Application Interface' },
            { src: '/images/chop237-menu.png', alt: 'Chop237 Cameroonian Dishes Ordering Catalog' },
            { src: '/images/chop237-badge.png', alt: 'Chop237 Official Brand Badge' },
          ],
        },
        {
          id: 'cardlink',
          name: 'CardLink',
          status: 'development',
          category: 'Digital Identity & Smart Networking SaaS',
          tagline: 'Next-Generation Contactless Business Identity & NFC Profile Platform',
          description: 'CardLink is an innovative digital business-card and corporate networking platform currently under active development. Its purpose is to enable modern professionals and corporate teams to exchange contact details seamlessly through NFC-enabled physical cards and dynamic QR codes.',
          problemSolved: 'Eliminates disposable paper business cards that quickly end up discarded, ensuring contact details are always up-to-date, saved directly into smartphone address books, and backed by measurable analytics.',
          capabilities: [
            '1-Tap contactless NFC interaction transferring full professional profile data to any modern smartphone',
            'Dynamic QR code profile sharing for rapid camera-based scanning without extra hardware',
            '1-Click digital vCard contact saving directly to iOS and Android address books',
            'Centralized corporate employee profile management with visit analytics and CRM lead capture',
          ],
          technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'NFC Web API', 'QR Dynamic Engine', 'PostgreSQL'],
          images: [
            { src: '/images/cardlink-dev.jpg', alt: 'CardLink SaaS Architecture in Active Development' },
          ],
        },
      ],
    },
    creative: {
      sectionNumber: '04',
      sectionTitle: 'Content Creation & Creative Production',
      sectionSubtitle: 'VISUAL STORYTELLING & MEDIA',
      intro: 'As a genuine content creator, I produce compelling visual media that communicates clear ideas, engages modern digital audiences, and builds authentic brand authority.',
      ctaButton: 'Collaborate on Creative Production',
      pillars: [
        {
          title: 'Cinematic & Brand Video Production',
          subtitle: 'High-Impact Visual Narratives',
          description: 'From concept scripting and camera framing to final production, I create professional video content for digital campaigns, brand introductions, and product showcases.',
          image: '/images/video-production.jpg',
          highlights: ['Concept scripting & storyboarding', 'Professional camera setups & lighting', 'Product showcases & brand films'],
        },
        {
          title: 'Vertical Social Media Video (TikTok & Reels)',
          subtitle: 'Content Engineered for Engagement',
          description: 'Producing dynamic, hook-driven vertical content calibrated to the algorithms and audience behavior of modern social platforms.',
          image: '/images/social-growth.jpg',
          highlights: ['Hook-first visual pacing', 'Trend-adapted creative concepts', 'High-retention mobile formats'],
        },
        {
          title: 'Advanced Post-Production & Color Grading',
          subtitle: 'Precision Editing & Visual Polish',
          description: 'Detailed timeline assembly, dynamic rhythm pacing, sound design, and cinematic color grading in DaVinci Resolve and Premiere Pro to elevate production value.',
          image: '/images/color-grading.jpg',
          highlights: ['DaVinci Resolve color pipelines', 'Rhythm & narrative pacing', 'Sound design & audio sweetening'],
        },
        {
          title: 'AI-Assisted Creative Workflows',
          subtitle: 'Next-Gen Production Speed',
          description: 'Leveraging cutting-edge generative AI tools as intelligent production multipliers — speeding up concept exploration, storyboarding, and visual asset generation.',
          image: '/images/ai-video-editing.jpg',
          highlights: ['Concept art & moodboard generation', 'Generative B-roll & visual synthesis', 'Automated captioning & formatting'],
        },
      ],
    },
    training: {
      sectionNumber: '05',
      sectionTitle: 'Professional Training Programmes',
      sectionSubtitle: 'PRACTICAL DIGITAL COMPETENCIES',
      intro: 'Drawing from real-world execution across software, marketing, and media, I deliver hands-on, practical training programmes designed to equip professionals, entrepreneurs, and creators with in-demand digital skills.',
      outcomesLabel: 'Key Practical Competencies Acquired',
      audienceLabel: 'Designed For',
      ctaButton: 'Enquire About Training',
      programs: [
        {
          id: 'ecommerce-business',
          title: 'E-Commerce & Online Business',
          category: 'Digital Commerce',
          description: 'A comprehensive, practical programme covering how to identify profitable product niches, set up high-converting storefronts, integrate localized payments, and run effective digital commerce operations.',
          outcomes: [
            'E-commerce store architecture & product catalog optimization',
            'Mobile Money (MTN MoMo, Orange Money) and international card payment gateways',
            'Order logistics, customer fulfillment & inventory management workflows',
            'Conversion rate optimization (CRO) and customer lifetime value growth',
          ],
          audience: 'Entrepreneurs, physical retail business owners, and digital managers seeking to build a sustainable online sales channel.',
          image: '/images/ecommerce-store.jpg',
        },
        {
          id: 'digital-product-creation',
          title: 'Digital Product Creation & SaaS Foundations',
          category: 'Software & Entrepreneurship',
          description: 'Learn how to conceptualize, validate, architect, and commercialize digital products and SaaS platforms that solve verifiable market problems.',
          outcomes: [
            'Market opportunity identification & problem-solution validation',
            'MVP scoping, user flow mapping & rapid agile prototyping',
            'Modern SaaS architecture fundamentals, databases & cloud deployment',
            'Subscription pricing models, customer onboarding & go-to-market strategy',
          ],
          audience: 'Aspiring digital entrepreneurs, software developers, and product creators wanting to build proprietary digital assets.',
          image: '/images/product-design.jpg',
        },
        {
          id: 'video-ai-content',
          title: 'Video & AI-Assisted Content Creation',
          category: 'Creative Production',
          description: 'Master the complete workflow of modern content creation: from visual storytelling, camera setups, and professional editing to integrating AI tools as production accelerators.',
          outcomes: [
            'Pre-production planning: scripting, visual briefs & hook design',
            'Camera techniques, framing, studio lighting & smartphone production',
            'Timeline editing, rhythmic cutting, sound design & color grading',
            'Practical generative AI workflows for asset creation and workflow acceleration',
          ],
          audience: 'Content creators, marketing professionals, social media managers, and brand founders seeking to produce high-end video.',
          image: '/images/video-editing-suite.jpg',
        },
        {
          id: 'digital-marketing-strategy',
          title: 'Digital Marketing & Content Strategy',
          category: 'Strategic Growth',
          description: 'A thorough deep-dive into digital marketing strategy, multi-channel customer acquisition funnels, systematic social media operations, and data-driven audience growth.',
          outcomes: [
            'Multi-channel marketing funnel design (Awareness → Conversion → Retention)',
            'Audience profiling, segmentation & competitor benchmarking',
            'Social media editorial planning, publishing systems & engagement tactics',
            'Analytics tracking, Google Search Console, campaign KPIs & ROI optimization',
          ],
          audience: 'Marketers, business leaders, agency specialists, and freelancers seeking to deliver measurable marketing results.',
          image: '/images/analytics-dashboard.jpg',
        },
      ],
    },
    trust: {
      sectionNumber: '06',
      sectionTitle: 'Why Work With Me',
      sectionSubtitle: 'EXECUTION & STANDARDS',
      cards: [
        {
          title: 'End-to-End Multidisciplinary Mastery',
          description: 'I bridge software engineering, strategic marketing, and creative production into a single point of delivery. You avoid the friction between developers who cannot sell and marketers who cannot build.',
        },
        {
          title: 'Proven Track Record of Live Products',
          description: 'I build and operate actual deployed SaaS platforms (SchoolIOS, Chop237) that handle real users, real workflows, and real monetary transactions.',
        },
        {
          title: 'Human Direction Powered by Modern AI',
          description: 'I leverage AI tools as practical force multipliers to deliver superior speed and iteration, guided always by human judgment, rigorous quality standards, and genuine craftsmanship.',
        },
      ],
      stats: [
        {
          value: '3 Core',
          label: 'Flagship SaaS Products',
          desc: 'SchoolIOS (Live), Chop237 (Live), CardLink (In Development)',
        },
        {
          value: '4 Domains',
          label: 'Service Capability',
          desc: 'Development, Marketing, Creative Production, and Automation',
        },
        {
          value: '100%',
          label: 'Authentic Execution',
          desc: 'Real deployed software, genuine content production, zero synthetic filler',
        },
      ],
    },
    contact: {
      sectionNumber: '07',
      sectionTitle: 'Contact & Collaboration',
      sectionSubtitle: 'GET IN TOUCH',
      heading: 'Let’s Build Something Meaningful Together.',
      subheading: 'Whether you need a custom web solution, an end-to-end digital marketing strategy, professional content production, or training for your team, I am ready to collaborate.',
      connectHeading: 'Direct Communication',
      connectSubheading: 'Reach out through the project enquiry form or connect directly via WhatsApp and email. All business inquiries receive a response within 24 hours.',
      direct: {
        emailLabel: 'Direct Email',
        whatsappLabel: 'WhatsApp & Direct Mobile',
        locationLabel: 'Location & Service Reach',
        locationValue: 'Based in Cameroon · Serving Clients Worldwide',
        responseNotice: 'Guaranteed response within 24 business hours',
      },
      form: {
        nameLabel: 'Your Name / Company',
        namePlaceholder: 'e.g. John Doe / Acme Corp',
        emailLabel: 'Email Address',
        emailPlaceholder: 'e.g. john@example.com',
        serviceLabel: 'Service or Programme of Interest',
        servicePlaceholder: 'Select a domain or training programme',
        serviceOptions: {
          webDev: 'Digital Development & Solutions (Web Apps, SaaS, Platforms)',
          marketing: 'Digital Marketing & E-Commerce (Strategy, Growth, Funnels)',
          creative: 'Content Creation & Creative Production (Video, Campaigns)',
          automation: 'Digital Automation & AI Solutions (Workflows, Tools)',
          trainingEcommerce: 'Training: E-Commerce & Online Business',
          trainingProduct: 'Training: Digital Product Creation & SaaS',
          trainingVideo: 'Training: Video & AI Content Creation',
          trainingMarketing: 'Training: Digital Marketing & Content Strategy',
          other: 'General Business Collaboration / Other Project',
        },
        messageLabel: 'Project Overview / Inquiry Details',
        messagePlaceholder: 'Tell me about your project, objectives, timeline, or training requirements...',
        submitButton: 'Send Enquiry',
        submittingButton: 'Sending Message...',
        successMessage: 'Thank you for reaching out. Your enquiry has been received successfully. Dimitri Kuete will get back to you shortly.',
        errorMessage: 'An error occurred while sending your message. Please reach out directly via WhatsApp or email.',
      },
    },
    footer: {
      slogan: 'Building Digital Solutions. Creating Impact. Driving Growth.',
      tagline: 'Professional studio of Dimitri Kuete — Digital solutions development, strategic marketing, creative content production, and professional training.',
      navTitle: 'Navigation',
      servicesTitle: 'Core Domains',
      connectTitle: 'Direct Connect',
      copyright: 'All rights reserved.',
      designedAndBuilt: 'Designed & Engineered by Dimitri Kuete · DIMI DIGITAL LAB',
      cameroonToWorld: 'Based in Cameroon · Working Worldwide',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      projects: 'Projets',
      creative: 'Création Média',
      training: 'Formations',
      contact: 'Contact',
      workWithMe: 'Collaborer Avec Moi',
    },
    hero: {
      taglineBadge: 'DIMI DIGITAL LAB · DIMITRI KUETE',
      headlinePart1: 'Bâtir des Solutions Numériques.',
      headlinePart2: 'Créer de l’Impact.',
      headlinePart3: 'Stimuler la Croissance.',
      role: 'Développeur de Solutions Numériques · Stratège Marketing Digital · Créateur de Contenu',
      location: 'Basé au Cameroun · Actif à l’International',
      description: 'Je conçois des produits numériques, développe des solutions web, crée des contenus percutants et accompagne la croissance des entreprises par la technologie, la créativité et le marketing stratégique.',
      primaryCta: 'Collaborer Avec Moi',
      secondaryCta: 'Explorer Mes Projets',
      saasLabel: 'Produits SaaS Opérationnels',
      statusAvailable: 'Disponible pour Nouveaux Projets & Collaborations',
      competencies: [
        'Ingénierie Web Full-Stack & SaaS',
        'Marketing Digital & Croissance E-Commerce',
        'Production Vidéo & Création de Contenu',
        'Automatisation & Flux de Travail par IA',
      ],
    },
    about: {
      sectionNumber: '01',
      sectionTitle: 'À Propos de Dimitri Kuete',
      sectionSubtitle: 'PARCOURS & MÉTHODOLOGIE',
      name: 'Dimitri Kuete',
      roleTitle: 'Développeur de Solutions Numériques · Stratège Marketing · Fondateur, DIMI DIGITAL LAB',
      headline: 'Là où l’exécution technique rencontre',
      headlineAccent: 'la stratégie commerciale et la création visuelle.',
      bioParagraph1: "Je suis Dimitri Kuete — professionnel du numérique multidisciplinaire basé au Cameroun, collaborant avec des entrepreneurs, entreprises et marques à l’échelle internationale. Mon activité crée une passerelle concrète entre l'ingénierie logicielle, le marketing stratégique et la production de contenus à fort impact.",
      bioParagraph2: "Je ne me limite pas à évoquer les opportunités numériques ou à prodiguer des conseils théoriques ; je conçois, développe et déploie des solutions opérationnelles. Qu'il s'agisse de bâtir des plateformes SaaS prêtes pour la production ou de formuler des tunnels d'acquisition client mesurables, je transforme vos objectifs commerciaux en réalités digitales performantes.",
      bioParagraph3: "Ma méthode repose sur quatre disciplines clés : la rigueur de l'ingénierie logicielle moderne, l'orientation conversion du marketing stratégique, la créativité humaine et l'intégration pragmatique des outils d'IA. Qu'il s'agisse d'architecturer une plateforme web complexe ou de réaliser des productions vidéo, mon objectif reste l'impact économique mesurable.",
      pillarsTitle: 'Cinq Piliers Pluridisciplinaires',
      pillars: [
        { title: 'Développement Numérique', desc: 'Conception d’applications web modernes et de plateformes SaaS robustes et évolutives.' },
        { title: 'Entrepreneuriat Digital', desc: 'Idéation, modélisation et commercialisation de produits numériques répondant à des besoins réels.' },
        { title: 'Marketing Digital', desc: 'Architecture de tunnels d’acquisition multicanaux, rétention et campagnes de croissance mesurables.' },
        { title: 'Création de Contenu', desc: 'Production de contenus vidéo et visuels engageants pour asseoir l’autorité et la visibilité de marque.' },
        { title: 'Innovation Digitale', desc: 'Exploitation des outils d’IA et de l’automatisation pour optimiser les processus opérationnels.' },
      ],
      experienceTitle: 'Parcours Professionnel',
      experienceSubtitle: 'EXPÉRIENCE & LEADERSHIP',
      experiences: [
        {
          role: 'Fondateur & Développeur Principal',
          organization: 'DIMI DIGITAL LAB',
          period: '2023 — Présent',
          description: 'Conception et développement de plateformes SaaS propriétaires (SchoolIOS, Chop237, CardLink), réalisation de solutions web sur-mesure et pilotage de stratégies marketing digital pour des clients internationaux.',
          badge: 'Activité Principale',
        },
        {
          role: 'Opérations Marketing Digital & Marque',
          organization: 'TECNO Mobile',
          period: 'Expérience Professionnelle',
          description: 'Contribution aux campagnes promotionnelles numériques, lancements de nouveaux smartphones et animation de communautés digitales pour la marque.',
          badge: 'Expérience Entreprise',
        },
      ],
    },
    services: {
      sectionNumber: '02',
      sectionTitle: 'Services Professionnels',
      sectionSubtitle: 'QUATRE DOMAINES D’INTERVENTION',
      intro: 'Structurés autour de quatre pôles majeurs, j’apporte des solutions numériques complètes pour asseoir votre autorité, optimiser vos opérations et générer des résultats concrets.',
      ctaButton: 'Échanger sur ce Domaine',
      domains: [
        {
          id: 'development',
          number: '01',
          title: 'Développement Numérique & Solutions',
          subtitle: 'Ingénierie Logicielle & Plateformes Web',
          description: 'Je conçois et développe des plateformes numériques et applications modernes répondant à des défis métiers concrets, du site vitrine d’excellence aux architectures SaaS cloud complexes.',
          capabilities: [
            'Développement d’applications web et sites performants (Next.js, React, TypeScript)',
            'Architecture et déploiement de solutions SaaS cloud multi-niveaux',
            'Plateformes métiers sur-mesure, portails d’administration & bases de données relationnelles',
            'Interfaces réactives modernes, conformité UI/UX & ergonomie mobile de premier plan',
          ],
          tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'API REST'],
        },
        {
          id: 'marketing',
          number: '02',
          title: 'Marketing Digital & E-Commerce',
          subtitle: 'Croissance de Marque & Conversion',
          description: 'J’accompagne les entreprises dans l’établissement, le développement et l’optimisation de leur présence en ligne par le biais de stratégies d’acquisition et de solutions e-commerce robustes.',
          capabilities: [
            'Stratégie globale de marketing digital & modélisation de tunnels de conversion',
            'Développement e-commerce & intégration de paiements locaux (Mobile Money, Cartes)',
            'Création, packaging et commercialisation de produits numériques',
            'Stratégie de présence sur les réseaux sociaux, plannings éditoriaux & développement d’audience',
          ],
          tech: ['Meta Ads', 'Stratégie TikTok', 'SEO & GSC', 'Shopify', 'Optimisation Taux de Conversion', 'Analytics'],
        },
        {
          id: 'content',
          number: '03',
          title: 'Création de Contenu & Production',
          subtitle: 'Narration Visuelle & Production Média',
          description: 'Je crée des contenus digitaux professionnels conçus pour transmettre des idées fortes, captiver les audiences et valoriser l’image de marque grâce à une direction artistique soignée.',
          capabilities: [
            'Production vidéo professionnelle & narration visuelle de marque',
            'Création de vidéos courtes dynamiques pour réseaux sociaux (TikTok, Reels, Shorts)',
            'Montage vidéo avancé, étalonnage colorimétrique, rythme & direction créative',
            'Production vidéo assistée par IA & flux de production visuelle modernes',
            'Conception de campagnes créatives publicitaires et déclinaisons d’assets',
          ],
          tech: ['DaVinci Resolve', 'Adobe Premiere Pro', 'CapCut Pro', 'Outils IA Créatifs', 'Design Sonore'],
        },
        {
          id: 'automation',
          number: '04',
          title: 'Automatisation Digitale & Solutions IA',
          subtitle: 'Optimisation des Processus & Productivité',
          description: 'J’exploite les technologies modernes pour perfectionner les flux opérationnels, automatiser les processus répétitifs et mettre en place des solutions business intelligentes.',
          capabilities: [
            'Automatisation des processus d’entreprise & interconnexions d’applications',
            'Intégration d’outils d’IA dans les flux quotidiens de travail et de marketing',
            'Pipelines de production assistée par IA & génération d’assets digitaux',
            'Audit opérationnel, optimisation de flux et déploiement de systèmes de productivité',
          ],
          tech: ['Automatisation No-Code / Code', 'API OpenAI & Claude', 'Webhooks', 'Cartographie de Flux', 'Outils Cloud'],
        },
      ],
    },
    projects: {
      sectionNumber: '03',
      sectionTitle: 'Produits Numériques & SaaS',
      sectionSubtitle: 'PLATEFORMES PROPRIÉTAIRES',
      intro: 'Je conçois et opère des produits numériques réels. Au lieu de simples maquettes visuelles, je développe et maintiens des plateformes SaaS opérationnelles résolvant des besoins concrets.',
      liveBadge: 'EN PRODUCTION / DÉPLOYÉ',
      devBadge: 'EN COURS DE DÉVELOPPEMENT',
      problemLabel: 'Problème Résolu',
      capabilitiesLabel: 'Fonctionnalités Clés Implémentées',
      techLabel: 'Architecture Technique',
      visitLiveCta: 'Explorer le Produit en Direct',
      comingSoonCta: 'Suivre le Développement',
      items: [
        {
          id: 'schoolios',
          name: 'SchoolIOS',
          status: 'live',
          category: 'SaaS de Gestion Éducative',
          tagline: 'Système d’Exploitation Centralisé pour Établissements Scolaires',
          description: 'SchoolIOS est une plateforme cloud de gestion scolaire conçue pour administrer l’ensemble des opérations pédagogiques, administratives et financières au sein d’un environnement digital unique. Elle couvre les écoles maternelles, primaires, collèges, lycées, universités et centres de formation.',
          problemSolved: 'Élimine les lourdeurs des bulletins papier, les erreurs de saisie manuelle des notes, les retards de communication avec les parents et les risques liés à la manipulation des espèces.',
          capabilities: [
            'Espaces d’établissements indépendants avec gestion des rôles (administration, professeurs, parents, élèves)',
            'Moteur de délibération académique automatisé conforme aux directives officielles MINESEC',
            'Gestion centralisée des frais de scolarité avec paiement automatisé par Mobile Money',
            'Accessibilité multilingue incluant le français, l’anglais et plusieurs langues africaines majeures',
            'Architecture résiliente hors-ligne garantissant la continuité opérationnelle en cas de coupure réseau',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Gestion des Rôles', 'PWA'],
          liveUrl: 'https://school-ios.vercel.app/',
          images: [
            { src: '/images/schoolios-hero.png', alt: 'Interface en Direct de la Plateforme SchoolIOS' },
            { src: '/images/schoolios-logo.png', alt: 'Logo 3D Officiel SchoolIOS' },
          ],
        },
        {
          id: 'chop237',
          name: 'Chop237',
          status: 'live',
          category: 'SaaS FoodTech & Commande de Repas',
          tagline: 'Place de Marché & Écosystème de Livraison de Cuisine Locale au Cameroun',
          description: 'Chop237 est une place de marché numérique de commande et de livraison de repas spécifiquement conçue pour l’écosystème de restauration au Cameroun. Elle connecte directement les restaurants traditionnels et traiteurs aux clients à travers 14 villes.',
          problemSolved: 'Met fin aux difficultés liées aux menus introuvables sur Google Maps, aux commandes téléphoniques non tracées et aux imprécisions de livraison grâce à un parcours clair et transparent.',
          capabilities: [
            'Réseau de 294+ restaurants partenaires à Douala, Yaoundé et dans 14 villes camerounaises',
            'Menus interactifs complets avec affichage transparent des prix en FCFA',
            'Paiement mobile instantané et sécurisé par MTN Mobile Money et Orange Money',
            'Suivi du statut de commande en direct (Panier → En cuisine → Acheminement sous sac isotherme 65°C)',
            'Application Web Progressive (PWA) installable en 1 clic sur Android et iPhone sans téléchargement lourd',
          ],
          technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'API Mobile Money', 'Architecture PWA', 'WebSockets'],
          liveUrl: 'https://www.chop237.app/',
          images: [
            { src: '/images/chop237-hero.png', alt: 'Interface Web en Direct de Chop237' },
            { src: '/images/chop237-menu.png', alt: 'Catalogue de Plats Camerounais Chop237' },
            { src: '/images/chop237-badge.png', alt: 'Badge Officiel de Marque Chop237' },
          ],
        },
        {
          id: 'cardlink',
          name: 'CardLink',
          status: 'development',
          category: 'SaaS Identité Numérique & Réseautage NFC',
          tagline: 'Plateforme Nouvelle Génération de Cartes de Visite Intelligentes',
          description: 'CardLink est une plateforme de cartes de visite virtuelles et de mise en relation professionnelle par puce NFC et codes QR dynamiques actuellement en cours de développement.',
          problemSolved: 'Remplace les cartes de visite papier jetables par un hub d’identité digitale dynamique, constamment à jour, enregistré directement dans les téléphones et enrichi de métriques de consultation.',
          capabilities: [
            'Interaction sans contact 1-tap via puce NFC transférant instantanément les coordonnées professionnelles',
            'Génération de QR codes dynamiques pour un partage immédiat par appareil photo',
            'Enregistrement direct du contact en format vCard dans le carnet d’adresses iOS et Android',
            'Gestion d’annuaire d’entreprise et tableau de bord analytique des consultations',
          ],
          technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Web NFC', 'Moteur QR Dynamique', 'PostgreSQL'],
          images: [
            { src: '/images/cardlink-dev.jpg', alt: 'Développement Actif de l’Architecture CardLink' },
          ],
        },
      ],
    },
    creative: {
      sectionNumber: '04',
      sectionTitle: 'Création de Contenu & Production',
      sectionSubtitle: 'NARRATION VISUELLE & MÉDIA',
      intro: 'En tant que véritable créateur de contenu, je conçois des médias visuels engageants qui communiquent des idées fortes, captivent les audiences modernes et développent une autorité de marque authentique.',
      ctaButton: 'Collaborer sur une Production Créative',
      pillars: [
        {
          title: 'Production Vidéo de Marque & Cinématographique',
          subtitle: 'Récits Visuels à Fort Impact',
          description: 'De l’écriture du brief et du cadrage jusqu’à la livraison finale, je réalise des vidéos professionnelles pour campagnes digitales, présentations de marques et mises en valeur de produits.',
          image: '/images/video-production.jpg',
          highlights: ['Écriture de scripts & storyboards', 'Équipement caméra professionnel & éclairage', 'Films de marque & vitrines produits'],
        },
        {
          title: 'Vidéos Courtes pour Réseaux Sociaux (TikTok & Reels)',
          subtitle: 'Contenus Conçus pour l’Engagement',
          description: 'Production de vidéos verticales dynamiques au rythme soutenu, adaptées aux algorithmes et aux codes visuels des plateformes actuelles.',
          image: '/images/social-growth.jpg',
          highlights: ['Accroches visuelles dès les 3 premières secondes', 'Concepts créatifs contextualisés', 'Formats mobiles à haute rétention'],
        },
        {
          title: 'Post-Production Avancée & Étalonnage',
          subtitle: 'Montage Précis & Finition Visuelle',
          description: 'Assemblage minutieux, travail du rythme, design sonore et étalonnage cinématographique sous DaVinci Resolve et Premiere Pro pour sublimer chaque plan.',
          image: '/images/color-grading.jpg',
          highlights: ['Pipelines d’étalonnage DaVinci Resolve', 'Rythme & dynamique narrative', 'Design sonore & mixage audio'],
        },
        {
          title: 'Flux Créatifs Assistés par IA',
          subtitle: 'Vitesse de Production Démultipliée',
          description: 'Utilisation des outils génératifs d’IA de pointe comme accélérateurs de production — de la recherche conceptuelle aux déclinaisons visuelles rapides.',
          image: '/images/ai-video-editing.jpg',
          highlights: ['Génération de concepts & planches d’ambiance', 'Création de plans d’illustration & B-roll', 'Sous-titrage & adaptation multiformat'],
        },
      ],
    },
    training: {
      sectionNumber: '05',
      sectionTitle: 'Programmes de Formation Professionnelle',
      sectionSubtitle: 'COMPÉTENCES PRATIQUES DU NUMÉRIQUE',
      intro: 'Fort de mon expérience pratique dans le logiciel, le marketing et les médias, je propose des programmes de formation concrets conçus pour doter les professionnels, entrepreneurs et créateurs de compétences directement applicables.',
      outcomesLabel: 'Compétences Concrètes Acquises',
      audienceLabel: 'Public Cible',
      ctaButton: 'Se Renseigner sur la Formation',
      programs: [
        {
          id: 'ecommerce-business',
          title: 'E-Commerce & Vente en Ligne',
          category: 'Commerce Numérique',
          description: 'Un programme complet et pratique pour apprendre à identifier des opportunités de vente, configurer des boutiques en ligne performantes, intégrer les paiements locaux et piloter la logistique commerciale.',
          outcomes: [
            'Architecture de boutique e-commerce & optimisation de catalogue',
            'Intégration de passerelles Mobile Money (MTN MoMo, Orange Money) et cartes',
            'Gestion des commandes, chaîne logistique & relation client',
            'Techniques d’optimisation du taux de conversion (CRO)',
          ],
          audience: 'Entrepreneurs, commerçants physiques et chefs de projet souhaitant créer un canal de vente en ligne rentable.',
          image: '/images/ecommerce-store.jpg',
        },
        {
          id: 'digital-product-creation',
          title: 'Création de Produits Numériques & SaaS',
          category: 'Logiciel & Entrepreneuriat',
          description: 'Apprenez à identifier des besoins de marché non satisfaits, concevoir des concepts SaaS viables, développer des versions MVP et orchestrer leur commercialisation.',
          outcomes: [
            'Détection d’opportunités & validation du couple problème-solution',
            'Cadrage du MVP, parcours utilisateurs & prototypage agile',
            'Fondamentaux d’architecture logicielle, bases de données & hébergement cloud',
            'Modèles de tarification récurrente & stratégie de lancement sur le marché',
          ],
          audience: 'Futurs créateurs de SaaS, développeurs web et entrepreneurs voulant commercialiser leurs propres solutions.',
          image: '/images/product-design.jpg',
        },
        {
          id: 'video-ai-content',
          title: 'Production Vidéo & Création de Contenu par IA',
          category: 'Production Créative',
          description: 'Maîtrisez l’intégralité de la chaîne de production vidéo moderne : de l’écriture du message au cadrage, du montage dynamique à l’intégration de l’IA comme accélérateur.',
          outcomes: [
            'Pré-production : écriture de script, structure narrative & conception de l’accroche',
            'Prise de vue, cadrage, éclairage studio & production smartphone de qualité',
            'Montage sur banc professionnel, découpage rythmique, son & étalonnage',
            'Flux de travail par IA générative pour concevoir et enrichir les vidéos',
          ],
          audience: 'Créateurs de contenu, professionnels du marketing, community managers et fondateurs de marques.',
          image: '/images/video-editing-suite.jpg',
        },
        {
          id: 'digital-marketing-strategy',
          title: 'Stratégie Marketing Digital & Contenu',
          category: 'Croissance Stratégique',
          description: 'Une formation approfondie sur la stratégie marketing multicanale, l’architecture d’entonnoirs d’acquisition, la gestion méthodique des réseaux sociaux et le suivi analytique orienté ROI.',
          outcomes: [
            'Conception de tunnels de vente (Notoriété → Conversion → Fidélisation)',
            'Profilage d’audience cible, segmentation & analyse concurrentielle',
            'Systèmes d’organisation éditoriale, plannings & formats d’engagement',
            'Suivi des KPI, exploitation des données d’analyse & optimisation du ROI',
          ],
          audience: 'Responsables marketing, consultants, dirigeants d’entreprise et professionnels de la communication.',
          image: '/images/analytics-dashboard.jpg',
        },
      ],
    },
    trust: {
      sectionNumber: '06',
      sectionTitle: 'Pourquoi Travailler Avec Moi',
      sectionSubtitle: 'ENGAGEMENT & STANDARDS',
      cards: [
        {
          title: 'Maîtrise Complète de la Chaîne Numérique',
          description: 'J’associe le code, le marketing stratégique et la création visuelle en un interlocuteur unique. Vous évitez les incompréhensions classiques entre développeurs qui ne savent pas vendre et marketeurs incapables de programmer.',
        },
        {
          title: 'Expérience Concrète de Produits Déployés',
          description: 'Je conçois et pilote des plateformes SaaS opérationnelles en production (SchoolIOS, Chop237) traitant de véritables utilisateurs, des flux métiers denses et des transactions réelles.',
        },
        {
          title: 'Direction Humaine Multipliée par l’IA',
          description: 'J’utilise les outils d’intelligence artificielle comme accélérateurs d’exécution pour livrer rapidement des solutions soignées, toujours guidées par la rigueur et le sens du détail.',
        },
      ],
      stats: [
        {
          value: '3 Produits',
          label: 'Plateformes SaaS Phares',
          desc: 'SchoolIOS (Déployé), Chop237 (Déployé), CardLink (En Développement)',
        },
        {
          value: '4 Domaines',
          label: 'Champs d’Expertise',
          desc: 'Développement, Marketing, Création Média et Automatisation',
        },
        {
          value: '100%',
          label: 'Exécution Authentique',
          desc: 'Applications en production, contenus réels, aucun artifice fictif',
        },
      ],
    },
    contact: {
      sectionNumber: '07',
      sectionTitle: 'Contact & Collaboration',
      sectionSubtitle: 'ME CONTACTER',
      heading: 'Donnons Vie à Votre Prochain Projet.',
      subheading: 'Que vous ayez besoin d’une solution web sur-mesure, d’une stratégie marketing complète, d’une production de contenu professionnel ou d’un programme de formation pour votre équipe, échangeons ensemble.',
      connectHeading: 'Contact Direct',
      connectSubheading: 'Utilisez le formulaire ci-dessous ou contactez-moi directement via WhatsApp et email. Une réponse personnalisée vous est apportée sous 24 heures.',
      direct: {
        emailLabel: 'Email Professionnel',
        whatsappLabel: 'WhatsApp & Ligne Directe',
        locationLabel: 'Localisation & Disponibilité',
        locationValue: 'Basé au Cameroun · Actif à l’International',
        responseNotice: 'Réponse sous 24h ouvrées garantie',
      },
      form: {
        nameLabel: 'Votre Nom / Entreprise',
        namePlaceholder: 'ex. Jean Dupont / Société Exemple',
        emailLabel: 'Adresse Email',
        emailPlaceholder: 'ex. jean@example.com',
        serviceLabel: 'Domaine ou Formation Souhaitée',
        servicePlaceholder: 'Sélectionnez un domaine ou une formation',
        serviceOptions: {
          webDev: 'Développement Numérique & Solutions (Web, SaaS, Plateformes)',
          marketing: 'Marketing Digital & E-Commerce (Stratégie, Funnels, Vente)',
          creative: 'Création de Contenu & Production (Vidéo, Campagnes, Étalonnage)',
          automation: 'Automatisation Digitale & Solutions IA (Flux, Outils)',
          trainingEcommerce: 'Formation : E-Commerce & Vente en Ligne',
          trainingProduct: 'Formation : Création de Produits Numériques & SaaS',
          trainingVideo: 'Formation : Production Vidéo & IA Créative',
          trainingMarketing: 'Formation : Stratégie Marketing Digital & Contenu',
          other: 'Collaboration d’Affaires / Autre Projet Spécifique',
        },
        messageLabel: 'Détails du Projet / Objet de la Demande',
        messagePlaceholder: 'Présentez brièvement vos besoins, vos objectifs, vos délais ou votre demande de formation...',
        submitButton: 'Envoyer la Demande',
        submittingButton: 'Envoi en cours...',
        successMessage: 'Merci pour votre message. Votre demande a été reçue avec succès. Dimitri Kuete vous répondra dans les plus brefs délais.',
        errorMessage: 'Une erreur est survenue lors de l’envoi. Veuillez me contacter directement par WhatsApp ou email.',
      },
    },
    footer: {
      slogan: 'Bâtir des Solutions Numériques. Créer de l’Impact. Stimuler la Croissance.',
      tagline: 'Studio professionnel de Dimitri Kuete — Développement de solutions numériques, marketing stratégique, production de contenus créatifs et formations professionnelles.',
      navTitle: 'Navigation',
      servicesTitle: 'Domaines d’Expertise',
      connectTitle: 'Contact Direct',
      copyright: 'Tous droits réservés.',
      designedAndBuilt: 'Conçu & Développé par Dimitri Kuete · DIMI DIGITAL LAB',
      cameroonToWorld: 'Basé au Cameroun · Actif à l’International',
    },
  },
};
