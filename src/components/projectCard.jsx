//import React from "react";
import Description from "../components/description";


const ProjectCard = ({ project }) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border-custom shadow-md transition duration-300 hover:shadow-xl">

      {/* Project Image */}
      <div className="w-full">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover sm:h-52"
        />
      </div>

      {/* Content */}
      <div className="border-t border-border-custom p-5 sm:p-6">

        {/* Title */}
        <h2 className="mb-2 font-heading text-xl font-bold leading-tight text-hc sm:text-2xl">
          {project.title}
        </h2>

        {/* Description */}
        <Description
          text={project.description}
        />

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-200 px-3 py-1 font-body text-xs text-hc"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">

          <a
            href={project.liveLink}
            rel="noopener noreferrer"
            className="rounded-lg bg-hc px-4 py-2 font-body text-sm text-white transition hover:opacity-90 sm:text-base"
          >
            Live Demo
          </a>

          <a
            href={project.githubLink}
            rel="noopener noreferrer"
            className="rounded-lg border border-border-custom px-4 py-2 font-body text-sm text-hc transition hover:bg-hc hover:text-white sm:text-base"
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
