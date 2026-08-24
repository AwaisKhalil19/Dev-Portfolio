import React from "react";
import Description from "../components/description"

const ProjectCard = ({ project }) => {
  return (
    <div className="w-90 border border-border-custom rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

    <div className="">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
        />
    </div>

      
      <div className="border-t-1 border-border-custom p-6">

        <h2 className="text-xl/1.2 font-bold font-heading text-hc mb-2">
          {project.title}
        </h2>

        <Description
          text={project.description}
        />

        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs text-hc font-body rounded-full bg-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>

        
        <div className="flex gap-3 mt-5">

          <a
            href={project.liveLink}
            // target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-hc text-white"
            >
            Live Demo
          </a>  

          <a
            href={project.githubLink}
            //target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border"
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;