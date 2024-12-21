export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Skill = {
  title: string;
  icon: string;
};

export type Identity = {
  name: string;
  logo: string;
  picture: string;
  email: string;
  resume: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
  skills: Skill[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
};

export type ExperiencePageContent = {
  seo: SEOInfo;
  work: {
    items: ResumeItem[];
  };
  education: {
    items: ResumeItem[];
  };
  volunteering: {
    items: ResumeItem[];
  };
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
};

export type ProjectPageContent = {
  seo: SEOInfo;
  projects: Project[];
};
