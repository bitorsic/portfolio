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
  email: "yashjaiswal.cse@gmail.com",
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
    url: "https://dev.to/bitorsic",
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
  role: "Computer Engineering Student",
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
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2021 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Freelance",
          image: "/logo.webp",
          url: "https://github.com/TimWitzdam",
        },
        date: "2019 - 2021",
      },
    ],
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};
