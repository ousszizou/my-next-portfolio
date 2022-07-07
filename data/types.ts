export type Link = {
  id: string;
  name: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
};

export type Project = {
  type: string;
  title: string;
  description: string;
  link: string;
  stack: Array<string>;
};

export type Technology = {
  type: string;
  title: string;
  icon: string;
};
