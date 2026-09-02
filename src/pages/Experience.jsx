//import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import experiences from "../data/experience";

const Experience = () => {
  return (
    <section className="min-h-screen overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto mb-16 max-w-6xl sm:mb-20">

        {/* Heading */}
        <div className="mb-10 flex flex-col gap-8 md:mb-14 md:flex-row md:items-start md:justify-between">

          {/* Left */}
          <div className="w-full md:w-1/2">
            <p className="font-body text-lg font-bold uppercase tracking-widest text-gray-400 sm:text-2xl">
              Experience
            </p>

            <h1 className="mt-4 font-heading text-5xl font-bold leading-tight text-hc sm:text-6xl md:mt-6 md:text-7xl">
              My Journey
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-row flex-wrap items-start justify-start gap-3 md:w-1/2 md:justify-end">

            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-4 py-2.5 font-body text-sm font-bold text-hc transition duration-300 hover:bg-hc hover:text-white sm:px-5 sm:text-base"
            >
              <FaArrowLeft />
              <span>Home</span>
            </Link>

            <Link
              to="/project"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-4 py-2.5 font-body text-sm font-bold text-hc transition duration-300 hover:bg-hc hover:text-white sm:px-5 sm:text-base"
            >
              <FaArrowLeft />
              <span>Project</span>
            </Link>

          </div>
        </div>

        {/* Experience */}
        <div className="relative">

          {/* Timeline Line - Desktop */}
          <div className="absolute left-2 top-0 hidden h-full w-px bg-border-custom md:block" />

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative md:pl-10"
              >

                {/* Timeline Dot - Desktop */}
                <div className="absolute left-[4.5px] top-6 hidden h-2 w-2 rounded-full bg-hc md:block" />

                {/* Experience Card */}
                <div className="rounded-xl border border-border-custom p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 md:p-8">

                  {/* Role + Duration */}
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-4">

                    {/* Role */}
                    <div className="min-w-0">
                      <h2 className="font-heading text-xl font-bold leading-tight text-hc sm:text-2xl">
                        {experience.role}
                      </h2>
                    </div>

                    {/* Duration + Location */}
                    <div className="text-left md:min-w-[150px] md:text-right">
                      <p className="font-body text-sm font-bold text-hc">
                        {experience.duration}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {experience.location}
                      </p>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl font-body text-sm leading-6 text-gray-500 sm:mt-6 sm:text-base sm:leading-7">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-hc"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
