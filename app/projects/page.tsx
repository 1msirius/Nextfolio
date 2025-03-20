import Link from "next/link";
import type { Metadata } from "next";
import { projects, Project } from "./project-data";
import { YouTubeComponent as YouTube } from '@/app/components/youtube';

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

function renderProjectContent(project: Project) {
  if (project.type === "youtube") {
    // Extract videoId from URL for the YouTube embed component
    const videoId = new URL(project.url).searchParams.get("v");
    return videoId ? <YouTube videoId={videoId} /> : null;
  } else if (project.type === "streamlit") {
    return (
      <iframe
        src={project.url}
        className="w-full h-64"
        title={project.title}
        frameBorder="0"
      />
    );
  } else {
    // For GitHub or similar projects, just show a link
    return (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on GitHub
      </Link>
    );
  }
}

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-[15px]">
                {project.description}
              </p>
            </div>
            <div className="mt-2">
              {renderProjectContent(project)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
