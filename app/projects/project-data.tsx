export interface Project {
  title: string;
  year: number;
  description: string;
  type: "github" | "youtube" | "streamlit";
  url: string;
}

export const projects: Project[] = [
  {
    title: "Compressing Fluid Subspaces",
    year: 2016,
    description: "Computer Graphics Research",
    url: "https://www.youtube.com/watch?v=4b9Y7fWy0KE",
    type: "youtube",
  },
  {
    title: "Chess Walk",
    year: 2025,
    description: "Finding the zone of proximal development for chess improvement",
    url: "https://github.com/aadjones/chess_walk",
    type: "github",
  },
];
