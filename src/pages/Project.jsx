import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import projects from "../data/project";
import ProjectCard from "../components/projectCard";

const Project = () => {
  return (
    <section className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 flex flex-row items-start justify-between">

          {/* Left */}
          <div className="w-1/2 flex flex-col">
            <p className="font-body text-2xl font-bold uppercase tracking-widest text-gray-400">
              These are
            </p>

            <h1 className="mt-5 font-heading text-md font-bold text-hc md:text-6xl">
              Projects
            </h1>

            {/* <p className="mt-8 max-w-2xl font-body text-gray-500">
              A collection of projects I have built using modern
              technologies and development practices.
            </p> */}
          </div>

          {/* Home Button */}
          <div className="w-1/2 flex justify-end">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-5 py-2.5 font-body font-bold text-hc transition duration-300 hover:bg-hc hover:text-white"
            >
              <FaArrowLeft />
              <span>Home</span>
            </Link>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;

