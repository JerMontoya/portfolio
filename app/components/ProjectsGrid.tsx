import React from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  github: string;
  tags: string[];
  image: string;
};

function ProjectCard({
  title,
  description,
  link,
  github,
  tags,
  image,
}: Project) {
  return (
    <article className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col">
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2 flex-wrap">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 ml-auto">
          <a
            href={link}
            title="Live Site"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-block text-sm text-indigo-600"
          >
            <FontAwesomeIcon icon={faLink} />
          </a>
          <a
            href={github}
            title="GitHub Repository"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-block text-sm text-indigo-600"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Selected Projects
          </h2>
          <p className="text-gray-600">
            Hand-picked projects that showcase my skills.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
