import type {
  NavBarLink,
  SocialLink,
  Identity,
  ExperiencePageContent,
  ProjectPageContent,
  HomePageContent,
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
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
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
