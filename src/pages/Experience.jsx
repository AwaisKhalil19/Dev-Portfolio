import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import experiences from "../data/experience"




const Experience = () => {
  return (
    <section className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl mb-20">

        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          {/* Left */}
          <div className="w-[70%] md:w-1/2">
            <p className="font-body text-2xl font-bold uppercase tracking-widest text-gray-400">
              Experience
            </p>

            <h1 className="mt-6 font-heading text-md font-bold leading-[1em] text-hc md:text-7xl">
              My Journey
            </h1>

            {/* <p className="mt-8 max-w-2xl font-body text-gray-500">
              My professional journey and experience working with modern
              web technologies to build useful digital products.
            </p> */}
          </div>

          {/* Home Button */}
          <div className="w-[30%] md:w-1/2 flex flex-col gap-4 justify-end items-end md:justify-end">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-5 py-2.5 font-body font-bold text-hc transition duration-300 hover:bg-hc hover:text-white"
            >
              <FaArrowLeft />
              <span>Home</span>
            </Link>
            <Link
              to="/project"
              className="flex w-fit items-center gap-2 rounded-lg border border-border-custom px-5 py-2.5 font-body font-bold text-hc transition duration-300 hover:bg-hc hover:text-white"
            >
              <FaArrowLeft />
              <span>Project</span>
            </Link>
          </div>

        </div>

        {/* Experience */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-2 top-0 hidden h-full w-px bg-border-custom md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative md:pl-10"
              >

                {/* Timeline Dot */}
                <div className="absolute left-[4.5px] top-6 hidden h-2 w-2 rounded-full bg-hc md:block" />

                {/* Experience Card */}
                <div className="rounded-xl border border-border-custom p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                    <div>
                      <h2 className="font-heading text-2xl font-bold text-hc">
                        {experience.role}
                      </h2>

                      {/* <p className="mt-1 font-body font-bold text-gray-500">
                        {experience.company}
                      </p> */}
                    </div>

                    <div className="text-left md:text-right">
                      <p className="font-body text-sm font-bold text-hc">
                        {experience.duration}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {experience.location}
                      </p>
                    </div>

                  </div>

                  <p className="mt-6 max-w-3xl font-body leading-7 text-gray-500">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
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