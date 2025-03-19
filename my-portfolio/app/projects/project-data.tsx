export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Mithril AI",
    year: 2024,
    description: "Open science AI resarch lab",
    url: "https://github.com/mithrilai",
  },
  {
    title: "OpenDeepLearning",
    year: 2023,
    description: "Open source AI education resources",
    url: "https://opendeeplearning.xyz/",
  },
];
