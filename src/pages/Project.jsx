//import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import projects from "../data/project";
import ProjectCard from "../components/projectCard";

const Project = () => {
  return (
    <section className="min-h-screen overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col gap-8 sm:mb-12 md:flex-row md:items-start md:justify-between">

          {/* Left */}
          <div className="w-full md:w-1/2">
            <p className="font-body text-lg font-bold uppercase tracking-widest text-gray-400 sm:text-2xl">
              These are
            </p>

            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-hc sm:text-5xl md:mt-5 md:text-6xl">
              Projects
            </h1>
          </div>

          {/* Home Button */}
          <div className="flex w-full justify-start md:w-1/2 md:justify-end">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-4 py-2.5 font-body text-sm font-bold text-hc transition duration-300 hover:bg-hc hover:text-white sm:px-5 sm:text-base"
            >
              <FaArrowLeft />
              <span>Home</span>
            </Link>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="mt-5 grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

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
