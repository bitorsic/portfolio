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
        title: "DevOps Engineer Intern",
        company: {
          name: "PearlThoughts",
          image: "/company-logos/pearlthoughts.jpeg",
          url: "https://www.linkedin.com/company/pearlthoughts",
        },
        date: "10/23 - 11/23",
      },
      {
        title: "Technical Team Member",
        company: {
          name: "Blockaders Club",
          image: "/company-logos/blockaders.jpeg",
          url: "https://www.linkedin.com/company/blockaders-club",
        },
        date: "10/23 - present",
      },
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
  }
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Backend Development | Cloud Computing | Cybersecurity",
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
  ],
};
