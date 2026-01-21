export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: number;
  category: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  problem: string;
  solution: string;
  techStack: {
    frontend: string[];
    backend: string[];
    tools: string[];
    services?: string[];
  };
  features: string[];
  challenges: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "chernelang-physio",
    title: "Chernelang Physio",
    client: "Chernelang Physiotherapy",
    year: 2024,
    category: "Healthcare",
    description: "A modern physiotherapy practice website designed to help patients book appointments and learn about services.",
    heroImage: "/images/projects/chernelang-physio/Hero Section.PNG",
    galleryImages: [
      "/images/projects/chernelang-physio/Hero Section.PNG",
      "/images/projects/chernelang-physio/ABOUT US SECTION.PNG",
      "/images/projects/chernelang-physio/cONTACT SECTION.PNG",
    ],
    problem: "The client needed a professional online presence to attract new patients and streamline appointment booking. The existing website was outdated and didn't reflect the quality of care provided.",
    solution: "We developed a clean, modern website with an intuitive appointment booking system, service information pages, and a blog for health education. The design emphasizes trust and professionalism while maintaining accessibility.",
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Next.js API Routes"],
      tools: ["Vercel", "Git"],
      services: ["Appointment Booking", "Content Management"],
    },
    features: [
      "Responsive design for all devices",
      "Online appointment booking system",
      "Service information pages",
      "Patient testimonials",
      "Blog for health education",
      "Contact forms",
    ],
    challenges: [
      "Integrating appointment booking with existing systems",
      "Ensuring HIPAA compliance considerations",
      "Creating an intuitive user experience for all age groups",
    ],
    results: [
      "Increased online appointment bookings by 40%",
      "Improved patient engagement through blog content",
      "Professional online presence that reflects practice quality",
    ],
    liveUrl: "https://www.chernelangphysio.co.za/",
  },
  {
    id: "2",
    slug: "fitguide-pro",
    title: "FitGuide Pro",
    client: "FitGuide Pro",
    year: 2024,
    category: "Health & Fitness",
    description: "A comprehensive fitness and health platform providing personalized workout plans and nutrition guidance.",
    heroImage: "/images/projects/fitguide-pro/hERO SECTION.PNG",
    galleryImages: [
      "/images/projects/fitguide-pro/hERO SECTION.PNG",
      "/images/projects/fitguide-pro/aBOUT.PNG",
      "/images/projects/fitguide-pro/Dashboard.PNG",
      "/images/projects/fitguide-pro/Workout dashboard.PNG",
    ],
    problem: "Fitness enthusiasts needed a centralized platform to access workout plans, track progress, and receive personalized nutrition advice. Existing solutions were fragmented and expensive.",
    solution: "We built a unified platform combining workout planning, progress tracking, and nutrition guidance. The platform uses AI to personalize recommendations based on user goals and preferences.",
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "PostgreSQL", "Prisma"],
      tools: ["Vercel", "Git", "Stripe"],
      services: ["AI Integration", "Payment Processing", "User Authentication"],
    },
    features: [
      "Personalized workout plans",
      "Progress tracking and analytics",
      "Nutrition guidance and meal planning",
      "User authentication and profiles",
      "Payment integration",
      "Mobile-responsive design",
    ],
    challenges: [
      "Implementing AI recommendations accurately",
      "Handling real-time data synchronization",
      "Creating an intuitive user interface for complex fitness data",
    ],
    results: [
      "500+ active users in first month",
      "High user engagement with daily active usage",
      "Positive user feedback on personalization features",
    ],
    liveUrl: "https://www.fitguidepro.online/",
  },
  {
    id: "3",
    slug: "skainet-cleaning",
    title: "Skainet Cleaning",
    client: "Skainet Cleaning Services",
    year: 2024,
    category: "Services",
    description: "A professional cleaning services website showcasing services and enabling easy customer inquiries.",
    heroImage: "/images/projects/skainet-cleaning/Hero section.PNG",
    galleryImages: [
      "/images/projects/skainet-cleaning/Hero section.PNG",
      "/images/projects/skainet-cleaning/Services.PNG",
      "/images/projects/skainet-cleaning/About us.PNG",
      "/images/projects/skainet-cleaning/Contact us.PNG",
    ],
    problem: "A local cleaning service needed a professional website to compete with larger companies and make it easy for customers to request quotes and book services.",
    solution: "We created a clean, professional website with clear service descriptions, easy-to-use contact forms, and a gallery showcasing their work. The design emphasizes trust and reliability.",
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Next.js API Routes"],
      tools: ["Vercel", "Git"],
      services: ["Contact Forms", "Email Integration"],
    },
    features: [
      "Service information pages",
      "Quote request forms",
      "Service area information",
      "Before/after gallery",
      "Customer testimonials",
      "Mobile-optimized design",
    ],
    challenges: [
      "Creating a professional image for a local service business",
      "Ensuring fast load times on mobile devices",
      "Making the quote request process simple and accessible",
    ],
    results: [
      "Increased quote requests by 60%",
      "Improved online visibility",
      "Professional brand presence",
    ],
    liveUrl: "https://www.skainetcleaning.co.za/",
  },
  {
    id: "4",
    slug: "dma-law",
    title: "DMA Law",
    client: "Dev Maharaj and Associates",
    year: 2024,
    category: "Legal",
    description: "A comprehensive law firm website showcasing legal services, team members, and firm values with appointment booking.",
    heroImage: "/images/projects/dma-law/Hero section.PNG",
    galleryImages: [
      "/images/projects/dma-law/Hero section.PNG",
      "/images/projects/dma-law/History.PNG",
      "/images/projects/dma-law/mission.PNG",
      "/images/projects/dma-law/BBBEE.PNG",
    ],
    problem: "A prominent law firm needed a modern website that reflected their professionalism and values while making it easy for clients to learn about services and book consultations.",
    solution: "We developed a sophisticated website with detailed service pages, team profiles, firm values, and an appointment booking system. The design conveys trust, professionalism, and accessibility.",
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Next.js API Routes"],
      tools: ["Vercel", "Git"],
      services: ["Appointment Booking", "Content Management", "News/Blog"],
    },
    features: [
      "Service area pages",
      "Team member profiles",
      "Appointment booking system",
      "Firm values and mission",
      "News and updates section",
      "Client resources",
      "B-BBEE information",
    ],
    challenges: [
      "Presenting complex legal information in an accessible way",
      "Ensuring security and privacy for client communications",
      "Reflecting firm values and culture in design",
    ],
    results: [
      "Increased consultation bookings",
      "Improved online presence and credibility",
      "Better client engagement with firm resources",
    ],
    liveUrl: "https://www.dmalaw.co.za/",
  },
  {
    id: "5",
    slug: "skills-to-furnish",
    title: "Skills to Furnish International",
    client: "Skills to Furnish International",
    year: 2024,
    category: "Education",
    description: "An educational institution website for furniture manufacturing training programs and skills development.",
    heroImage: "/images/projects/skills-to-furnish/Hero Section.PNG",
    galleryImages: [
      "/images/projects/skills-to-furnish/Hero Section.PNG",
      "/images/projects/skills-to-furnish/About us.PNG",
      "/images/projects/skills-to-furnish/Gallery.PNG",
      "/images/projects/skills-to-furnish/contact.PNG",
    ],
    problem: "A training institute needed a website to showcase their programs, attract students, and provide information about their accredited courses in furniture manufacturing.",
    solution: "We created an informative website with program details, accreditation information, gallery of student work, and easy contact methods. The design emphasizes education and skill development.",
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Next.js API Routes"],
      tools: ["Vercel", "Git"],
      services: ["Content Management", "Gallery", "Contact Forms"],
    },
    features: [
      "Program information pages",
      "Accreditation details",
      "Student work gallery",
      "Training gallery",
      "Contact and location information",
      "About the institution",
    ],
    challenges: [
      "Presenting technical training information clearly",
      "Showcasing student work effectively",
      "Making the application process accessible",
    ],
    results: [
      "Increased student inquiries",
      "Better online visibility for programs",
      "Professional presentation of institution",
    ],
    liveUrl: "https://www.skillstofurnish.co.za/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category);
}
