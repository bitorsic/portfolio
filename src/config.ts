import type {
  NavBarLink,
  SocialLink,
  Identity,
  ExperiencePageContent,
  ProjectPageContent,
  HomePageContent,
  Skill,
} from "./types/config";

export const identity: Identity = {
  name: "Yash Jaiswal",
  logo: "/logo.png",
  picture: "/picture.jpeg",
  email: "yashjaiswal.cse@gmail.com",
  resume: "https://drive.google.com/file/d/1aybkKNvj1A5CTIcyvVb5DwExDWzGk48J/view"
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Experience",
    url: "/experience",
  },
  {
    title: "Projects",
    url: "/projects",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/bitorsic",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/bitorsic",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "dev.to",
    url: "https://dev.to/bitorisc",
    icon: "mdi:dev-to",
    external: true,
  },
];

export const skills: Skill[] = [
  {
    title: "Golang",
    icon: "mdi:language-go",
  },
  {
    title: "Node.js",
    icon: "mdi:nodejs",
  },
  {
    title: "MongoDB",
    icon: "mdi:leaf",
  },
  {
    title: "SQL",
    icon: "mdi:database",
  },
  {
    title: "Redis",
    icon: "mdi:database",
  },
  {
    title: "C++",
    icon: "mdi:language-cpp",
  },
  {
    title: "TypeScript",
    icon: "mdi:language-typescript",
  },
  {
    title: "React.js",
    icon: "mdi:react",
  },
  {
    title: "AWS",
    icon: "mdi:aws",
  },
  {
    title: "Google Cloud",
    icon: "mdi:google-cloud",
  },
  {
    title: "Azure",
    icon: "mdi:microsoft-azure",
  },
  {
    title: "Firebase",
    icon: "mdi:firebase",
  },
  {
    title: "Python",
    icon: "mdi:language-python",
  },
  {
    title: "Java",
    icon: "mdi:language-java",
  },
  {
    title: "Linux",
    icon: "mdi:linux",
  },
  {
    title: "Cybersecurity",
    icon: "mdi:server-security",
  },
]

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Yash Jaiswal",
    description:
      "Backend Development | Cloud Computing | Cybersecurity",
    image: identity.logo,
  },
  role: "Backend Developer",
  description:
    "Backend Development | Cloud Computing | Cybersecurity",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "Experience",
      url: "/experience",
    },
  ],
  skills,
};

// Experience (/experience)
export const experiencePageContent: ExperiencePageContent = {
  seo: {
    title: "Experience | Yash Jaiswal",
    description:
      "Backend Development | Cloud Computing | Cybersecurity",
    image: identity.logo,
  },
  work: {
    items: [
       {
        title: "Backend Developer Intern",
        company: {
          name: "Global Kartel",
          image: "/company-logos/global-kartel.png",
          url: "https://globalkartel.com",
        },
        date: "12/24 - 04/25",
      },     
      // {
        // title: "IT Administrator",
        // company: {
          // name: "Jaiswal Hospital",
          // image: "/company-logos/jaiswal-hospital.jpeg",
          // url: "https://www.linkedin.com/company/jaiswal-hospital",
        // },
        // date: "08/24 - present",
      // },
      {
        title: "DevOps Engineer Intern",
        company: {
          name: "PearlThoughts",
          image: "/company-logos/pearlthoughts.jpeg",
          url: "https://www.linkedin.com/company/pearlthoughts",
        },
        date: "10/23 - 11/23",
      },
      {
        title: "Customer Support Intern",
        company: {
          name: "Valethi Technologies",
          image: "/company-logos/valethi.jpeg",
          url: "https://valethi.com",
        },
        date: "04/21 - 06/21",
      },
    ],
  },
  education: {
    items: [
      {
        title: "BE - Computer Engineering",
        company: {
          name: "PES Modern College of Engineering",
          image: "/company-logos/pesmcoe.jpeg",
          url: "https://moderncoe.edu.in",
        },
        date: "2022 - 2025",
      },
      {
        title: "Diploma in Computer Engineering",
        company: {
          name: "MIT Polytechnic",
          image: "/company-logos/mit.jpeg",
          url: "https://mitwpu.edu.in/",
        },
        date: "2020 - 2022",
      },
    ]
  },
  volunteering: {
    items: [
      {
        title: "Cloud Lead",
        company: {
          name: "GDSC PESMCOE",
          image: "/company-logos/gdsc.jpeg",
          url: "https://www.linkedin.com/company/gdsc-pesmcoe",
        },
        date: "08/23 - 04/24",
      },
      {
        title: "Technical Team Member",
        company: {
          name: "PESMCOE ACM Student Chapter",
          image: "/company-logos/acm.jpeg",
          url: "https://www.linkedin.com/company/pesmcoe-acm-student-chapter",
        },
        date: "03/23 - 04/23",
      },
      {
        title: "Technical Team Member",
        company: {
          name: "Blockaders Club",
          image: "/company-logos/blockaders.jpeg",
          url: "https://www.linkedin.com/company/blockaders-club",
        },
        date: "10/23 - 04/24",
      },
      {
        title: "Professional Development Director",
        company: {
          name: "Rotaract Club of Computers Metro MCOE",
          image: "/company-logos/rotaract.jpeg",
          url: "https://www.linkedin.com/company/rotaract-club-of-computers-metro-mcoe",
        },
        date: "07/23 - 08/23",
      },
    ]
  }
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Yash Jaiswal",
    description: "Backend Development | Cloud Computing | Cybersecurity",
    image: identity.logo,
  },
  projects: [
    {
      title: "Slack Bot with Streaming AI and Observability",
      description: "Slack bot that streams AI responses via SSE or full responses as JSON",
      image: "/projects/chat-relay.png",
      year: "2025",
      url: "https://github.com/bitorsic/chat-relay",
    },
    {
      title: "Secure Chat App with AI Spam and Phishing Detection",
      description: "Messaging webapp with End-to-End Encryption, using custom AI Detection API",
      image: "/projects/chat-nat.png",
      year: "2025",
      url: "https://github.com/harshadparihar/spam-phishing-fastapi",
    },
    {
      title: "Distributed Product Sorting with MPI",
      description: "Full-stack app that uses MPI-base C++ backend to sort large product datasets",
      image: "/projects/mpi-sorting.png",
      year: "2025",
      url: "https://github.com/bitorsic/mpi-sort-webapp",
    },
    {
      title: "Video Conferencing Platform",
      description: "A video conferencing application with custom room management and in-app messaging",
      image: "/projects/konfrens.png",
      year: "2024",
      url: "https://konfrens.onrender.com",
    },
    {
      title: "Secure Task Management App",
      description: "A secure ToDo app with AES encryption, JWT auth, and token based blacklisting with Redis",
      image: "/projects/taskinator-3000.png",
      year: "2024",
      url: "https://task-inator-3000.onrender.com",
    },
    {
      title: "Node.js API Rate Limiter",
      description: "A Node.js rate limiter using Redis, designed to control traffic without dropping any requests",
      image: "/projects/rate-limiter.png",
      year: "2024",
      url: "https://github.com/bitorsic/nodejs-rate-limiting",
    },
    {
      title: "Washer Production Backend",
      description: "Backend for an Inventory Management system for a company that produces washers",
      image: "/projects/washer-production-backend.png",
      year: "2023",
      url: "https://github.com/bitorsic/washer-production-backend",
    },
    {
      title: "Social Media Platform Backend",
      description: "Backend for a social media platform, where users can create and interact with posts",
      image: "/projects/postomania.png",
      year: "2023",
      url: "https://github.com/bitorsic/postomania",
    },
  ],
};
